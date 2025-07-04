'use client';
import * as React from 'react';
import {
  AxisId,
  DEFAULT_ZOOM_SLIDER_SHOW_TOOLTIP,
  useDrawingArea,
  useSelector,
  useStore,
  ZOOM_SLIDER_MARGIN,
  ZoomSliderShowTooltip,
} from '@mui/x-charts/internals';
import { useXAxes, useYAxes } from '@mui/x-charts/hooks';
import { ZOOM_SLIDER_SIZE, ZOOM_SLIDER_TRACK_SIZE } from './constants';
import { selectorChartAxisZoomData } from '../../internals/plugins/useChartProZoom';
import { ChartAxisZoomSliderTrack } from './ChartAxisZoomSliderTrack';
import { ChartAxisZoomSliderActiveTrack } from './ChartAxisZoomSliderActiveTrack';

interface ChartZoomSliderProps {
  /**
   * The ID of the axis this overview refers to.
   */
  axisId: AxisId;
  /**
   * The direction of the axis.
   */
  axisDirection: 'x' | 'y';
}

/**
 * Renders the zoom slider for a specific axis.
 * @internal
 */
export function ChartAxisZoomSlider({ axisDirection, axisId }: ChartZoomSliderProps) {
  const store = useStore();
  const drawingArea = useDrawingArea();
  const zoomData = useSelector(store, selectorChartAxisZoomData, [axisId]);
  const [showTooltip, setShowTooltip] = React.useState(false);
  const { xAxis } = useXAxes();
  const { yAxis } = useYAxes();

  if (!zoomData) {
    return null;
  }

  let x: number;
  let y: number;
  let reverse: boolean;
  let axisPosition: 'top' | 'bottom' | 'left' | 'right';
  let tooltipConditions: ZoomSliderShowTooltip;

  if (axisDirection === 'x') {
    const axis = xAxis[axisId];

    if (!axis || axis.position === 'none') {
      return null;
    }

    const axisSize = axis.height;

    x = drawingArea.left;
    y =
      axis.position === 'bottom'
        ? drawingArea.top + drawingArea.height + axis.offset + axisSize + ZOOM_SLIDER_MARGIN
        : drawingArea.top - axis.offset - axisSize - ZOOM_SLIDER_SIZE - ZOOM_SLIDER_MARGIN;
    reverse = axis.reverse ?? false;
    axisPosition = axis.position ?? 'bottom';
    tooltipConditions = axis.zoom?.slider?.showTooltip ?? DEFAULT_ZOOM_SLIDER_SHOW_TOOLTIP;
  } else {
    const axis = yAxis[axisId];

    if (!axis || axis.position === 'none') {
      return null;
    }

    const axisSize = axis.width;

    x =
      axis.position === 'right'
        ? drawingArea.left + drawingArea.width + axis.offset + axisSize + ZOOM_SLIDER_MARGIN
        : drawingArea.left - axis.offset - axisSize - ZOOM_SLIDER_SIZE - ZOOM_SLIDER_MARGIN;
    y = drawingArea.top;
    reverse = axis.reverse ?? false;
    axisPosition = axis.position ?? 'left';
    tooltipConditions = axis.zoom?.slider?.showTooltip ?? DEFAULT_ZOOM_SLIDER_SHOW_TOOLTIP;
  }

  const backgroundRectOffset = (ZOOM_SLIDER_SIZE - ZOOM_SLIDER_TRACK_SIZE) / 2;

  return (
    <g data-charts-zoom-slider transform={`translate(${x} ${y})`} style={{ touchAction: 'none' }}>
      <ChartAxisZoomSliderTrack
        x={axisDirection === 'x' ? 0 : backgroundRectOffset}
        y={axisDirection === 'x' ? backgroundRectOffset : 0}
        height={axisDirection === 'x' ? ZOOM_SLIDER_TRACK_SIZE : drawingArea.height}
        width={axisDirection === 'x' ? drawingArea.width : ZOOM_SLIDER_TRACK_SIZE}
        rx={ZOOM_SLIDER_TRACK_SIZE / 2}
        ry={ZOOM_SLIDER_TRACK_SIZE / 2}
        axisId={axisId}
        axisDirection={axisDirection}
        reverse={reverse}
        onSelectStart={tooltipConditions === 'hover' ? () => setShowTooltip(true) : undefined}
        onSelectEnd={tooltipConditions === 'hover' ? () => setShowTooltip(false) : undefined}
      />
      <ChartAxisZoomSliderActiveTrack
        zoomData={zoomData}
        axisId={axisId}
        axisPosition={axisPosition}
        axisDirection={axisDirection}
        reverse={reverse}
        showTooltip={
          (showTooltip && tooltipConditions !== 'never') || tooltipConditions === 'always'
        }
        onPointerEnter={tooltipConditions === 'hover' ? () => setShowTooltip(true) : undefined}
        onPointerLeave={tooltipConditions === 'hover' ? () => setShowTooltip(false) : undefined}
      />
    </g>
  );
}
