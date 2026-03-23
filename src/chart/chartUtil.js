import { depositSeries, testSeries } from '@/chart/series/seriesStyle';
import {depositXAxis, testXAxis} from '@/chart/xAxis/xAxisStyle';
import { depositYAxisStyle, testYAxisStyle } from '@/chart/yAxis/yAxisStyle';
import { depositTooltip, defaultTooltip } from '@/chart/tooltip/tooltipStyle';
import {defaultLegend} from  '@/chart/legend/legend.js'
import { depositPlotStyle, testPlotStyle } from  '@/chart/plot/plot.js'

export const chartStyleMap = {
    deposit: {
        series: depositSeries,
        xAxis: depositXAxis,
        yAxis: depositYAxisStyle,
        tooltip: depositTooltip,
        legend: defaultLegend,
        plotOptions : depositPlotStyle,
    },

    test: {
        series: testSeries,
        xAxis: testXAxis,
        yAxis: testYAxisStyle,
        tooltip: defaultTooltip,
        legend: defaultLegend,
        plotOptions : testPlotStyle,
    }
};