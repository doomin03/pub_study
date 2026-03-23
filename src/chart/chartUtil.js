import { depositSeries } from '@/chart/series/seriesStyle';
import { defaultXAxis, buildDepositXAxis } from '@/chart/xAxis/xAxisStyle';
import { depositYAxisStyle } from '@/chart/yAxis/yAxisStyle';
import { depositTooltip } from '@/chart/tooltip/tooltipStyle';
import { depositFormatter } from '@/chart/xAxis/format.js';
import {defaultLegend} from  '@/chart/legend/legend.js'
import { depositPlotStyle } from  '@/chart/plot/plot.js'

export const chartStyleMap = {
    deposit: {
        series: depositSeries,
        xAxis: defaultXAxis,
        xAxisBuilder: buildDepositXAxis,
        xAxisFormat: depositFormatter,
        yAxis: depositYAxisStyle,
        tooltip: depositTooltip,
        legend: defaultLegend,
        plotOptions : depositPlotStyle,
    }
};