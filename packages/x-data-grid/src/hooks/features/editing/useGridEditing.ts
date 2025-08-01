'use client';
import * as React from 'react';
import { RefObject } from '@mui/x-internals/types';
import { GridPrivateApiCommunity } from '../../../models/api/gridApiCommunity';
import {
  GridEditingApi,
  GridEditingPrivateApi,
  GridEditingSharedApi,
  GridEditingSharedPrivateApi,
} from '../../../models/api/gridEditingApi';
import { DataGridProcessedProps } from '../../../models/props/DataGridProps';
import { useGridApiMethod } from '../../utils/useGridApiMethod';
import { GridRowId } from '../../../models/gridRows';
import { useGridCellEditing } from './useGridCellEditing';
import { GridCellModes, GridEditModes } from '../../../models/gridEditRowModel';
import { useGridRowEditing } from './useGridRowEditing';
import { GridStateInitializer } from '../../utils/useGridInitializeState';
import { gridEditRowsStateSelector } from './gridEditingSelectors';
import { isAutogeneratedRowNode } from '../rows/gridRowsUtils';

export const editingStateInitializer: GridStateInitializer = (state) => ({
  ...state,
  editRows: {},
});

export const useGridEditing = (
  apiRef: RefObject<GridPrivateApiCommunity>,
  props: Pick<
    DataGridProcessedProps,
    'isCellEditable' | 'editMode' | 'processRowUpdate' | 'dataSource' | 'onDataSourceError'
  >,
) => {
  useGridCellEditing(apiRef, props);
  useGridRowEditing(apiRef, props);

  const debounceMap = React.useRef<
    Record<GridRowId, Record<string, [ReturnType<typeof setTimeout>, () => void]>>
  >({});

  const { isCellEditable: isCellEditableProp } = props;

  const isCellEditable = React.useCallback<GridEditingApi['isCellEditable']>(
    (params) => {
      if (isAutogeneratedRowNode(params.rowNode)) {
        return false;
      }
      if (!params.colDef.editable) {
        return false;
      }
      if (!params.colDef.renderEditCell) {
        return false;
      }
      if (isCellEditableProp) {
        return isCellEditableProp(params);
      }
      return true;
    },
    [isCellEditableProp],
  );

  const maybeDebounce = (
    id: GridRowId,
    field: string,
    debounceMs: number | undefined,
    callback: () => Promise<void>,
  ) => {
    if (!debounceMs) {
      callback();
      return;
    }

    if (!debounceMap.current[id]) {
      debounceMap.current[id] = {};
    }

    if (debounceMap.current[id][field]) {
      const [timeout] = debounceMap.current[id][field];
      clearTimeout(timeout);
    }

    // To run the callback immediately without waiting the timeout
    const runImmediately = () => {
      const [timeout] = debounceMap.current[id][field];
      clearTimeout(timeout);
      callback();
      delete debounceMap.current[id][field];
    };

    const timeout = setTimeout(() => {
      callback();
      delete debounceMap.current[id][field];
    }, debounceMs);

    debounceMap.current[id][field] = [timeout, runImmediately];
  };

  React.useEffect(() => {
    const debounces = debounceMap.current;

    return () => {
      Object.entries(debounces).forEach(([id, fields]) => {
        Object.keys(fields).forEach((field) => {
          const [timeout] = debounces[id][field];
          clearTimeout(timeout);
          delete debounces[id][field];
        });
      });
    };
  }, []);

  const runPendingEditCellValueMutation = React.useCallback<
    GridEditingPrivateApi['runPendingEditCellValueMutation']
  >((id, field) => {
    if (!debounceMap.current[id]) {
      return;
    }
    if (!field) {
      Object.keys(debounceMap.current[id]).forEach((debouncedField) => {
        const [, runCallback] = debounceMap.current[id][debouncedField];
        runCallback();
      });
    } else if (debounceMap.current[id][field]) {
      const [, runCallback] = debounceMap.current[id][field];
      runCallback();
    }
  }, []);

  const setEditCellValue = React.useCallback<GridEditingApi['setEditCellValue']>(
    (params) => {
      const { id, field, debounceMs } = params;

      return new Promise((resolve) => {
        maybeDebounce(id, field, debounceMs, async () => {
          const setEditCellValueToCall =
            props.editMode === GridEditModes.Row
              ? apiRef.current.setRowEditingEditCellValue
              : apiRef.current.setCellEditingEditCellValue;

          // Check if the cell is in edit mode
          // By the time this callback runs the user may have cancelled the editing
          if (apiRef.current.getCellMode(id, field) === GridCellModes.Edit) {
            const result = await setEditCellValueToCall(params);
            resolve(result);
          }
        });
      });
    },
    [apiRef, props.editMode],
  );

  const getRowWithUpdatedValues = React.useCallback<
    GridEditingSharedApi['getRowWithUpdatedValues']
  >(
    (id, field) => {
      return props.editMode === GridEditModes.Cell
        ? apiRef.current.getRowWithUpdatedValuesFromCellEditing(id, field)
        : apiRef.current.getRowWithUpdatedValuesFromRowEditing(id);
    },
    [apiRef, props.editMode],
  );

  const getEditCellMeta = React.useCallback<GridEditingSharedApi['unstable_getEditCellMeta']>(
    (id, field) => {
      const editingState = gridEditRowsStateSelector(apiRef);
      return editingState[id]?.[field] ?? null;
    },
    [apiRef],
  );

  const editingSharedApi: GridEditingSharedApi = {
    isCellEditable,
    setEditCellValue,
    getRowWithUpdatedValues,
    unstable_getEditCellMeta: getEditCellMeta,
  };

  const editingSharedPrivateApi: GridEditingSharedPrivateApi = {
    runPendingEditCellValueMutation,
  };

  useGridApiMethod(apiRef, editingSharedApi, 'public');
  useGridApiMethod(apiRef, editingSharedPrivateApi, 'private');
};
