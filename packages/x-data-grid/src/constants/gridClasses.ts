import generateUtilityClass from '@mui/utils/generateUtilityClass';
import generateUtilityClasses from '@mui/utils/generateUtilityClasses';

export interface GridClasses {
  /**
   * Styles applied to the root element of the AI assistant panel.
   */
  aiAssistantPanel: string;
  /**
   * Styles applied to the AI assistant panel header.
   */
  aiAssistantPanelHeader: string;
  /**
   * Styles applied to the AI assistant panel title.
   */
  aiAssistantPanelTitle: string;
  /**
   * Styles applied to the AI assistant panel title container.
   */
  aiAssistantPanelTitleContainer: string;
  /**
   * Styles applied to the AI assistant panel body.
   */
  aiAssistantPanelBody: string;
  /**
   * Styles applied to the AI assistant panel conversation title.
   */
  aiAssistantPanelConversationTitle: string;
  /**
   * Styles applied to the AI assistant panel empty text.
   */
  aiAssistantPanelEmptyText: string;
  /**
   * Styles applied to the AI assistant panel footer.
   */
  aiAssistantPanelFooter: string;
  /**
   * Styles applied to the AI assistant panel conversation.
   */
  aiAssistantPanelConversation: string;
  /**
   * Styles applied to the AI assistant panel conversation list.
   */
  aiAssistantPanelConversationList: string;
  /**
   * Styles applied to the AI assistant panel suggestions.
   */
  aiAssistantPanelSuggestions: string;
  /**
   * Styles applied to the AI assistant panel suggestions list.
   */
  aiAssistantPanelSuggestionsList: string;
  /**
   * Styles applied to the AI assistant panel suggestions item.
   */
  aiAssistantPanelSuggestionsItem: string;
  /**
   * Styles applied to the AI assistant panel suggestions label.
   */
  aiAssistantPanelSuggestionsLabel: string;
  /**
   * Styles applied to the root element of the cell with type="actions".
   */
  actionsCell: string;
  /**
   * Styles applied to the root element of the column header when aggregated.
   */
  aggregationColumnHeader: string;
  /**
   * Styles applied to the root element of the header when aggregation if `headerAlign="left"`.
   */
  'aggregationColumnHeader--alignLeft': string;
  /**
   * Styles applied to the root element of the header when aggregation if `headerAlign="center"`.
   */
  'aggregationColumnHeader--alignCenter': string;
  /**
   * Styles applied to the root element of the header when aggregation if `headerAlign="right"`.
   */
  'aggregationColumnHeader--alignRight': string;
  /**
   * Styles applied to the aggregation label in the column header when aggregated.
   */
  aggregationColumnHeaderLabel: string;
  /**
   * Styles applied to the aggregation row overlay wrapper.
   */
  aggregationRowOverlayWrapper: string;
  /**
   * Styles applied to the root element if `autoHeight={true}`.
   */
  autoHeight: string;
  /**
   * Styles applied to the root element while it is being autosized.
   */
  autosizing: string;
  withSidePanel: string;
  /**
   * Styles applied to the icon of the boolean cell.
   */
  booleanCell: string;
  /**
   * Styles applied to the cell element if the cell is editable.
   */
  'cell--editable': string;
  /**
   * Styles applied to the cell element if the cell is in edit mode.
   */
  'cell--editing': string;
  /**
   * Styles applied to the cell element in flex display mode.
   */
  'cell--flex': string;
  /**
   * Styles applied to the cell element if `align="center"`.
   */
  'cell--textCenter': string;
  /**
   * Styles applied to the cell element if `align="left"`.
   */
  'cell--textLeft': string;
  /**
   * Styles applied to the cell element if `align="right"`.
   */
  'cell--textRight': string;
  /**
   * Styles applied to the cell element if it is at the top edge of a cell selection range.
   */
  'cell--rangeTop': string;
  /**
   * Styles applied to the cell element if it is at the bottom edge of a cell selection range.
   */
  'cell--rangeBottom': string;
  /**
   * Styles applied to the cell element if it is at the left edge of a cell selection range.
   */
  'cell--rangeLeft': string;
  /**
   * Styles applied to the cell element if it is at the right edge of a cell selection range.
   */
  'cell--rangeRight': string;
  /**
   * Styles applied to the cell element if it is pinned to the left.
   */
  'cell--pinnedLeft': string;
  /**
   * Styles applied to the cell element if it is pinned to the right.
   */
  'cell--pinnedRight': string;
  /**
   * Styles applied to the cell element if it is in a cell selection range.
   */
  'cell--selectionMode': string;
  /**
   * Styles applied to the cell element.
   */
  cell: string;
  /**
   * Styles applied to the cell checkbox element.
   */
  cellCheckbox: string;
  /**
   * Styles applied to the empty cell element.
   */
  cellEmpty: string;
  /**
   * Styles applied to the skeleton cell element.
   */
  cellSkeleton: string;
  /**
   * @ignore - do not document.
   * Styles applied to the left offset cell element.
   */
  cellOffsetLeft: string;
  /**
   * Styles applied to the selection checkbox element.
   */
  checkboxInput: string;
  /**
   * Styles applied to the column header element.
   */
  columnHeader: string;
  /**
   * Styles applied to the collapsible element.
   */
  collapsible: string;
  /**
   * Styles applied to the collapsible icon element.
   */
  collapsibleIcon: string;
  /**
   * Styles applied to the collapsible trigger element.
   */
  collapsibleTrigger: string;
  /**
   * Styles applied to the collapsible panel element.
   */
  collapsiblePanel: string;
  /**
   * Styles applied to the column header if `headerAlign="center"`.
   */
  'columnHeader--alignCenter': string;
  /**
   * Styles applied to the column header if `headerAlign="left"`.
   */
  'columnHeader--alignLeft': string;
  /**
   * Styles applied to the column header if `headerAlign="right"`.
   */
  'columnHeader--alignRight': string;
  /**
   * Styles applied to the floating column header element when it is dragged.
   */
  'columnHeader--dragging': string;
  /**
   * Styles applied to the column header if it is being dragged.
   */
  'columnHeader--moving': string;
  /**
   * Styles applied to the column header if the type of the column is `number`.
   */
  'columnHeader--numeric': string;
  /**
   * Styles applied to the column header if the column is sortable.
   */
  'columnHeader--sortable': string;
  /**
   * Styles applied to the column header if the column is sorted.
   */
  'columnHeader--sorted': string;
  /**
   * Styles applied to the column header if the column has a filter applied to it.
   */
  'columnHeader--filtered': string;
  'columnHeader--pinnedLeft': string;
  'columnHeader--pinnedRight': string;
  /**
   * Styles applied to the last column header element.
   */
  'columnHeader--last': string;
  /**
   * Styles applied to the last unpinned column header item.
   * @ignore - do not document.
   */
  'columnHeader--lastUnpinned': string;
  /**
   * Styles applied to a column header item when its sibling with a bordering separator is focused.
   * @ignore - do not document.
   */
  'columnHeader--siblingFocused': string;
  /**
   * Styles applied to the header filter input element.
   */
  columnHeaderFilterInput: string;
  /**
   * Styles applied to the header filter operator label element.
   */
  columnHeaderFilterOperatorLabel: string;
  /**
   * Styles applied to the header checkbox cell element.
   */
  columnHeaderCheckbox: string;
  /**
   * Styles applied to the column header's draggable container element.
   */
  columnHeaderDraggableContainer: string;
  /**
   * Styles applied to the row's draggable placeholder element inside the special row reorder cell.
   */
  rowReorderCellPlaceholder: string;
  /**
   * Styles applied to the column header's title element;
   */
  columnHeaderTitle: string;
  /**
   * Styles applied to the column header's title container element.
   */
  columnHeaderTitleContainer: string;
  /**
   * Styles applied to the column header's title excepted buttons.
   */
  columnHeaderTitleContainerContent: string;
  /**
   * Styles applied to the column group header cell if not empty.
   */
  'columnHeader--filledGroup': string;
  /**
   * Styles applied to the empty column group header cell.
   */
  'columnHeader--emptyGroup': string;
  /**
   * Styles applied to the header filter cell.
   */
  'columnHeader--filter': string;
  /**
   * Styles applied to the column headers.
   */
  columnHeaders: string;
  /**
   * Styles applied to the column header separator if the column is resizable.
   */
  'columnSeparator--resizable': string;
  /**
   * Styles applied to the column header separator if the column is being resized.
   */
  'columnSeparator--resizing': string;
  /**
   * Styles applied to the column header separator if the side is "left".
   */
  'columnSeparator--sideLeft': string;
  /**
   * Styles applied to the column header separator if the side is "right".
   */
  'columnSeparator--sideRight': string;
  /**
   * Styles applied to the column header separator element.
   */
  columnSeparator: string;
  /**
   * Styles applied to the columns management body.
   */
  columnsManagement: string;
  /**
   * Styles applied to the columns management row element.
   */
  columnsManagementRow: string;
  /**
   * Styles applied to the columns management header element.
   */
  columnsManagementHeader: string;
  /**
   * Styles applied to the columns management search input element.
   */
  columnsManagementSearchInput: string;
  /**
   * Styles applied to the columns management footer element.
   */
  columnsManagementFooter: string;
  /**
   * Styles applied to the columns management scroll area element.
   */
  columnsManagementScrollArea: string;
  /**
   * Styles applied to the columns management empty text element.
   */
  columnsManagementEmptyText: string;
  /**
   * Styles applied to the top container.
   */
  'container--top': string;
  /**
   * Styles applied to the bottom container.
   */
  'container--bottom': string;
  /**
   * Styles applied to the detail panel element.
   */
  detailPanel: string;
  /**
   * Styles applied to the detail panel toggle cell element.
   */
  detailPanelToggleCell: string;
  /**
   * Styles applied to the detail panel toggle cell element if expanded.
   */
  'detailPanelToggleCell--expanded': string;
  /**
   * Styles applied to the root element of the cell inside a footer row.
   */
  footerCell: string;
  /**
   * Styles applied to the panel element.
   */
  panel: string;
  /**
   * Styles applied to the panel header element.
   */
  panelHeader: string;
  /**
   * Styles applied to the panel wrapper element.
   */
  panelWrapper: string;
  /**
   * Styles applied to the panel content element.
   */
  panelContent: string;
  /**
   * Styles applied to the panel footer element.
   */
  panelFooter: string;
  /**
   * Styles applied to the paper element.
   */
  paper: string;
  /**
   * Styles applied to root of the boolean edit component.
   */
  editBooleanCell: string;
  /**
   * Styles applied to the filler row.
   * @ignore - do not document.
   */
  filler: string;
  /**
   * Styles applied to the filler row with bottom border.
   * @ignore - do not document.
   */
  'filler--borderBottom': string;
  /**
   * Styles applied to the filler row pinned left section.
   * @ignore - do not document.
   */
  'filler--pinnedLeft': string;
  /**
   * Styles applied to the filler row pinned right section.
   * @ignore - do not document.
   */
  'filler--pinnedRight': string;
  /**
   * Styles applied to the root of the filter form component.
   */
  filterForm: string;
  /**
   * Styles applied to the delete icon of the filter form component.
   */
  filterFormDeleteIcon: string;
  /**
   * Styles applied to the link operator input of the filter form component.
   */
  filterFormLogicOperatorInput: string;
  /**
   * Styles applied to the column input of the filter form component.
   */
  filterFormColumnInput: string;
  /**
   * Styles applied to the operator input of the filter form component.
   */
  filterFormOperatorInput: string;
  /**
   * Styles applied to the value input of the filter form component.
   */
  filterFormValueInput: string;
  /**
   * Styles applied to the root of the input component.
   */
  editInputCell: string;
  /**
   * Styles applied to the filter icon element.
   */
  filterIcon: string;
  /**
   * Styles applied to the footer container element.
   */
  footerContainer: string;
  /**
   * Styles applied to the column header icon's container.
   */
  iconButtonContainer: string;
  /**
   * Styles applied to the column header separator icon element.
   */
  iconSeparator: string;
  /**
   * Styles applied to the column header filter row.
   */
  headerFilterRow: string;
  mainContent: string; // TODO: come up with a better name
  /**
   * Styles applied to the main container element.
   */
  main: string;
  /**
   * Styles applied to the main container element when it has right pinned columns.
   */
  'main--hasPinnedRight': string;
  /**
   * Styles applied to the main container element to hide the contents of the grid.
   * @ignore - do not document.
   */
  'main--hiddenContent': string;
  /**
   * Styles applied to the menu element.
   */
  menu: string;
  /**
   * Styles applied to the menu icon element.
   */
  menuIcon: string;
  /**
   * Styles applied to the menu icon button element.
   */
  menuIconButton: string;
  /**
   * Styles applied to the menu icon element if the menu is open.
   */
  menuOpen: string;
  /**
   * Styles applied to the menu list element.
   */
  menuList: string;
  /**
   * Styles applied to the overlay wrapper element.
   */
  overlayWrapper: string;
  /**
   * Styles applied to the overlay wrapper inner element.
   */
  overlayWrapperInner: string;
  /**
   * Styles applied to the overlay element.
   */
  overlay: string;
  /**
   * Styles applied to the virtualization container.
   */
  virtualScroller: string;
  /**
   * Styles applied to the virtualization container when it is scrollable in the horizontal direction.
   * @ignore - do not document.
   */
  'virtualScroller--hasScrollX': string;
  /**
   * Styles applied to the virtualization content.
   */
  virtualScrollerContent: string;
  /**
   * Styles applied to the virtualization content when its height is bigger than the virtualization container.
   */
  'virtualScrollerContent--overflowed': string;
  /**
   * Styles applied to the virtualization render zone.
   */
  virtualScrollerRenderZone: string;
  /**
   * Styles applied to resizable panel handles.
   */
  resizablePanelHandle: string;
  /**
   * Styles applied to horizontal resizable panel handles.
   */
  'resizablePanelHandle--horizontal': string;
  /**
   * Styles applied to vertical resizable panel handles.
   */
  'resizablePanelHandle--vertical': string;
  /**
   * Styles applied to the root element.
   */
  root: string;
  /**
   * Styles applied to the root element if density is "standard" (default).
   */
  'root--densityStandard': string;
  /**
   * Styles applied to the root element if density is "comfortable".
   */
  'root--densityComfortable': string;
  /**
   * Styles applied to the root element if density is "compact".
   */
  'root--densityCompact': string;
  /**
   * Styles applied to the root element when user selection is disabled.
   */
  'root--disableUserSelection': string;
  /**
   * Used to fix header outline border radius.
   * @ignore - do not document.
   */
  'root--noToolbar': string;
  /**
   * Styles applied to the row element if the row is editable.
   */
  'row--editable': string;
  /**
   * Styles applied to the row element if the row is in edit mode.
   */
  'row--editing': string;
  /**
   * Styles applied to the floating special row reorder cell element when it is dragged.
   */
  'row--dragging': string;
  /**
   * Styles applied to the row element when it is a drop target above.
   */
  'row--dropAbove': string;
  /**
   * Styles applied to the row element when it is a drop target below.
   */
  'row--dropBelow': string;
  /**
   * Styles applied to the row element when it is being dragged (entire row).
   */
  'row--beingDragged': string;
  /**
   * Styles applied to the first visible row element on every page of the grid.
   */
  'row--firstVisible': string;
  /**
   * Styles applied to the last visible row element on every page of the grid.
   */
  'row--lastVisible': string;
  /**
   * Styles applied to the row if it has dynamic row height.
   */
  'row--dynamicHeight': string;
  /**
   * Styles applied to the row if its detail panel is open.
   */
  'row--detailPanelExpanded': string;
  /**
   * Styles applied to the row cells if the row needs a bottom border.
   * @ignore - do not document.
   */
  'row--borderBottom': string;
  /**
   * Styles applied to the row element.
   */
  row: string;
  /**
   * Styles applied to the footer row count element to show the total number of rows.
   * Only works when pagination is disabled.
   */
  rowCount: string;
  /**
   * Styles applied to the row reorder cell container element.
   */
  rowReorderCellContainer: string;
  /**
   * Styles applied to the root element of the row reorder cell
   */
  rowReorderCell: string;
  /**
   * Styles applied to the root element of the row reorder cell when dragging is allowed
   */
  'rowReorderCell--draggable': string;
  /**
   * Styles applied to the row reorder icon element.
   */
  rowReorderIcon: string;
  /**
   * Styles applied to the skeleton row element.
   */
  rowSkeleton: string;
  /**
   * Styles applied to both scroll area elements.
   */
  scrollArea: string;
  /**
   * Styles applied to the left scroll area element.
   */
  'scrollArea--left': string;
  /**
   * Styles applied to the right scroll area element.
   */
  'scrollArea--right': string;
  /**
   * Styles applied to the top scroll area element.
   */
  'scrollArea--up': string;
  /**
   * Styles applied to the bottom scroll area element.
   */
  'scrollArea--down': string;
  /**
   * Styles applied to the scrollbars.
   */
  scrollbar: string;
  /**
   * Styles applied to the horizontal scrollbar.
   */
  'scrollbar--horizontal': string;
  /**
   * Styles applied to the horizontal scrollbar.
   */
  'scrollbar--vertical': string;
  /**
   * @ignore - do not document.
   * Styles applied to the scrollbar filler cell.
   */
  scrollbarFiller: string;
  /**
   * @ignore - do not document.
   * Styles applied to the scrollbar filler cell, in header position.
   */
  'scrollbarFiller--header': string;
  /**
   * @ignore - do not document.
   * Styles applied to the scrollbar filler cell, with a border top.
   */
  'scrollbarFiller--borderTop': string;
  /**
   * @ignore - do not document.
   * Styles applied to the scrollbar filler cell, with a border bottom.
   */
  'scrollbarFiller--borderBottom': string;
  /**
   * @ignore - do not document.
   * Styles applied to the scrollbar filler cell.
   */
  'scrollbarFiller--pinnedRight': string;
  /**
   * Styles applied to the footer selected row count element.
   */
  selectedRowCount: string;
  /**
   * Styles applied to the sort button element.
   */
  sortButton: string;
  /**
   * Styles applied to the sort button icon element.
   */
  sortIcon: string;
  /**
   * Styles applied to the toolbar root element.
   */
  toolbar: string;
  /**
   * Styles applied to the toolbar label element.
   */
  toolbarLabel: string;
  /**
   * Styles applied to the toolbar divider element.
   */
  toolbarDivider: string;
  /**
   * Styles applied to the shadow scroll area element.
   * @ignore - do not document.
   */
  shadowScrollArea: string;
  /**
   * Styles applied to the sidebar element.
   */
  sidebar: string;
  /**
   * Styles applied to the sidebar header element.
   */
  sidebarHeader: string;
  /**
   * Styles applied to the toolbar container element.
   */
  toolbarContainer: string;
  /**
   * Styles applied to the toolbar filter list element.
   */
  toolbarFilterList: string;
  /**
   * Styles applied to the toolbar quick filter root element.
   */
  toolbarQuickFilter: string;
  /**
   * Styles applied to the toolbar quick filter trigger element.
   */
  toolbarQuickFilterTrigger: string;
  /**
   * Styles applied to the toolbar quick filter control element.
   */
  toolbarQuickFilterControl: string;
  /**
   * Styles applied the grid if `showColumnVerticalBorder={true}`.
   */
  withVerticalBorder: string;
  /**
   * Styles applied to cells, column header and other elements that have border.
   * Sets border color only.
   */
  withBorderColor: string;
  /**
   * Styles applied the cell if `showColumnVerticalBorder={true}`.
   */
  'cell--withRightBorder': string;
  /**
   * Styles applied the cell if `showColumnVerticalBorder={true}`.
   */
  'cell--withLeftBorder': string;
  /**
   * Styles applied the column header if `showColumnVerticalBorder={true}`.
   */
  'columnHeader--withRightBorder': string;
  'columnHeader--withLeftBorder': string;
  /**
   * Styles applied to the root of the grouping column of the tree data.
   */
  treeDataGroupingCell: string;
  /**
   * Styles applied to the toggle of the grouping cell of the tree data.
   */
  treeDataGroupingCellToggle: string;
  /**
   * Styles applied to the loading container of the grouping cell of the tree data.
   * @ignore - do not document.
   */
  treeDataGroupingCellLoadingContainer: string;
  /**
   * Styles applied to the root element of the grouping criteria cell
   */
  groupingCriteriaCell: string;
  /**
   * Styles applied to the toggle of the grouping criteria cell
   */
  groupingCriteriaCellToggle: string;
  /**
   * Styles applied to the loading container of the grouping cell of the tree data.
   * @ignore - do not document.
   */
  groupingCriteriaCellLoadingContainer: string;
  /**
   * Styles applied to the pinned rows container.
   */
  pinnedRows: string;
  /**
   * Styles applied to the top pinned rows container.
   */
  'pinnedRows--top': string;
  /**
   * Styles applied to the bottom pinned rows container.
   */
  'pinnedRows--bottom': string;
  /**
   * Styles applied to the pivot panel available fields.
   */
  pivotPanelAvailableFields: string;
  /**
   * Styles applied to the pivot panel body.
   */
  pivotPanelBody: string;
  /**
   * Styles applied to the pivot panel field.
   */
  pivotPanelField: string;
  /**
   * Styles applied to the pivot panel field action container.
   */
  pivotPanelFieldActionContainer: string;
  /**
   * Styles applied to the pivot panel field checkbox.
   */
  pivotPanelFieldCheckbox: string;
  /**
   * Styles applied to the pivot panel field drag icon.
   */
  pivotPanelFieldDragIcon: string;
  /**
   * Styles applied to the pivot panel field list.
   */
  pivotPanelFieldList: string;
  /**
   * Styles applied to the pivot panel field name.
   */
  pivotPanelFieldName: string;
  /**
   * Styles applied to the pivot panel field when sorted.
   */
  'pivotPanelField--sorted': string;
  /**
   * Styles applied to the pivot panel header.
   */
  pivotPanelHeader: string;
  /**
   * Styles applied to the pivot panel placeholder.
   */
  pivotPanelPlaceholder: string;
  /**
   * Styles applied to the pivot panel scroll area.
   */
  pivotPanelScrollArea: string;
  /**
   * Styles applied to the pivot panel search container.
   */
  pivotPanelSearchContainer: string;
  /**
   * Styles applied to the pivot panel section.
   */
  pivotPanelSection: string;
  /**
   * Styles applied to the pivot panel section title.
   */
  pivotPanelSectionTitle: string;
  /**
   * Styles applied to the pivot panel sections.
   */
  pivotPanelSections: string;
  /**
   * Styles applied to the pivot panel switch.
   */
  pivotPanelSwitch: string;
  /**
   * Styles applied to the pivot panel switch label.
   */
  pivotPanelSwitchLabel: string;
  /**
   * Styles applied to the prompt root element.
   */
  prompt: string;
  /**
   * Styles applied to the prompt content element.
   */
  promptContent: string;
  /**
   * Styles applied to the prompt text element.
   */
  promptText: string;
  /**
   * Styles applied to the prompt feedback element.
   */
  promptFeedback: string;
  /**
   * Styles applied to the prompt change list element.
   */
  promptChangeList: string;
  /**
   * Styles applied to the prompt changes toggle element.
   */
  promptChangesToggle: string;
  /**
   * Styles applied to the prompt changes toggle icon element.
   */
  promptChangesToggleIcon: string;
  /**
   * Styles applied to the prompt icon element.
   */
  promptIconContainer: string;
  /**
   * Styles applied to the prompt icon element.
   */
  promptIcon: string;
  /**
   * Styles applied to the prompt error element.
   */
  promptError: string;
  /**
   * Styles applied to the prompt action element.
   */
  promptAction: string;
}

export type GridClassKey = keyof GridClasses;

export function getDataGridUtilityClass(slot: string): string {
  return generateUtilityClass('MuiDataGrid', slot);
}

export const gridClasses = generateUtilityClasses<GridClassKey>('MuiDataGrid', [
  'aiAssistantPanel',
  'aiAssistantPanelHeader',
  'aiAssistantPanelTitleContainer',
  'aiAssistantPanelTitle',
  'aiAssistantPanelBody',
  'aiAssistantPanelEmptyText',
  'aiAssistantPanelFooter',
  'aiAssistantPanelConversation',
  'aiAssistantPanelConversationList',
  'aiAssistantPanelConversationTitle',
  'aiAssistantPanelSuggestions',
  'aiAssistantPanelSuggestionsList',
  'aiAssistantPanelSuggestionsItem',
  'aiAssistantPanelSuggestionsLabel',
  'actionsCell',
  'aggregationColumnHeader',
  'aggregationColumnHeader--alignLeft',
  'aggregationColumnHeader--alignCenter',
  'aggregationColumnHeader--alignRight',
  'aggregationColumnHeaderLabel',
  'aggregationRowOverlayWrapper',
  'autoHeight',
  'autosizing',
  'mainContent',
  'withSidePanel',
  'booleanCell',
  'cell--editable',
  'cell--editing',
  'cell--flex',
  'cell--textCenter',
  'cell--textLeft',
  'cell--textRight',
  'cell--rangeTop',
  'cell--rangeBottom',
  'cell--rangeLeft',
  'cell--rangeRight',
  'cell--pinnedLeft',
  'cell--pinnedRight',
  'cell--selectionMode',
  'cell',
  'cellCheckbox',
  'cellEmpty',
  'cellSkeleton',
  'cellOffsetLeft',
  'checkboxInput',
  'collapsible',
  'collapsibleTrigger',
  'collapsibleIcon',
  'collapsiblePanel',
  'columnHeader',
  'columnHeader--alignCenter',
  'columnHeader--alignLeft',
  'columnHeader--alignRight',
  'columnHeader--dragging',
  'columnHeader--moving',
  'columnHeader--numeric',
  'columnHeader--sortable',
  'columnHeader--sorted',
  'columnHeader--filtered',
  'columnHeader--pinnedLeft',
  'columnHeader--pinnedRight',
  'columnHeader--last',
  'columnHeader--lastUnpinned',
  'columnHeader--siblingFocused',
  'columnHeader--filter',
  'columnHeaderFilterInput',
  'columnHeaderFilterOperatorLabel',
  'columnHeaderCheckbox',
  'columnHeaderDraggableContainer',
  'columnHeaderTitle',
  'columnHeaderTitleContainer',
  'columnHeaderTitleContainerContent',
  'columnHeader--filledGroup',
  'columnHeader--emptyGroup',
  'columnHeaders',
  'columnSeparator--resizable',
  'columnSeparator--resizing',
  'columnSeparator--sideLeft',
  'columnSeparator--sideRight',
  'columnSeparator',
  'columnsManagement',
  'columnsManagementRow',
  'columnsManagementHeader',
  'columnsManagementSearchInput',
  'columnsManagementFooter',
  'columnsManagementScrollArea',
  'columnsManagementEmptyText',
  'container--top',
  'container--bottom',
  'detailPanel',
  'detailPanelToggleCell',
  'detailPanelToggleCell--expanded',
  'footerCell',
  'panel',
  'panelHeader',
  'panelWrapper',
  'panelContent',
  'panelFooter',
  'paper',
  'editBooleanCell',
  'editInputCell',
  'filler',
  'filler--borderBottom',
  'filler--pinnedLeft',
  'filler--pinnedRight',
  'filterForm',
  'filterFormDeleteIcon',
  'filterFormLogicOperatorInput',
  'filterFormColumnInput',
  'filterFormOperatorInput',
  'filterFormValueInput',
  'filterIcon',
  'footerContainer',
  'headerFilterRow',
  'iconButtonContainer',
  'iconSeparator',
  'main',
  'main--hasPinnedRight',
  'main--hiddenContent',
  'menu',
  'menuIcon',
  'menuIconButton',
  'menuOpen',
  'menuList',
  'overlay',
  'overlayWrapper',
  'overlayWrapperInner',
  'root',
  'root--densityStandard',
  'root--densityComfortable',
  'root--densityCompact',
  'root--disableUserSelection',
  'root--noToolbar',
  'row',
  'row--editable',
  'row--editing',
  'row--firstVisible',
  'row--lastVisible',
  // TODO v9: Rename to `cell--dragging`
  'row--dragging',
  'row--dropAbove',
  'row--dropBelow',
  'row--beingDragged',
  'row--dynamicHeight',
  'row--detailPanelExpanded',
  'row--borderBottom',
  'rowReorderCellPlaceholder',
  'rowCount',
  'rowReorderCellContainer',
  'rowReorderCell',
  'rowReorderCell--draggable',
  'rowReorderIcon',
  'rowSkeleton',
  'scrollArea--left',
  'scrollArea--right',
  'scrollArea--up',
  'scrollArea--down',
  'scrollArea',
  'scrollbar',
  'scrollbar--vertical',
  'scrollbar--horizontal',
  'scrollbarFiller',
  'scrollbarFiller--header',
  'scrollbarFiller--borderTop',
  'scrollbarFiller--borderBottom',
  'scrollbarFiller--pinnedRight',
  'selectedRowCount',
  'sortButton',
  'sortIcon',
  'shadowScrollArea',
  'sidebar',
  'sidebarHeader',
  'toolbarContainer',
  'toolbar',
  'toolbarLabel',
  'toolbarDivider',
  'toolbarFilterList',
  'toolbarQuickFilter',
  'toolbarQuickFilterTrigger',
  'toolbarQuickFilterControl',
  'virtualScroller',
  'virtualScroller--hasScrollX',
  'virtualScrollerContent',
  'virtualScrollerContent--overflowed',
  'virtualScrollerRenderZone',
  'withVerticalBorder',
  'withBorderColor',
  'cell--withRightBorder',
  'cell--withLeftBorder',
  'columnHeader--withRightBorder',
  'columnHeader--withLeftBorder',
  'treeDataGroupingCell',
  'treeDataGroupingCellToggle',
  'treeDataGroupingCellLoadingContainer',
  'groupingCriteriaCell',
  'groupingCriteriaCellToggle',
  'groupingCriteriaCellLoadingContainer',
  'pinnedRows',
  'pinnedRows--top',
  'pinnedRows--bottom',
  'pivotPanelAvailableFields',
  'pivotPanelField',
  'pivotPanelField--sorted',
  'pivotPanelFieldActionContainer',
  'pivotPanelFieldCheckbox',
  'pivotPanelFieldDragIcon',
  'pivotPanelFieldList',
  'pivotPanelFieldName',
  'pivotPanelHeader',
  'pivotPanelPlaceholder',
  'pivotPanelScrollArea',
  'pivotPanelSearchContainer',
  'pivotPanelSection',
  'pivotPanelSectionTitle',
  'pivotPanelSections',
  'pivotPanelSwitch',
  'pivotPanelSwitchLabel',
  'prompt',
  'promptContent',
  'promptText',
  'promptFeedback',
  'promptChangeList',
  'promptChangesToggle',
  'promptChangesToggleIcon',
  'promptIcon',
  'promptIconContainer',
  'promptError',
  'promptAction',
]);
