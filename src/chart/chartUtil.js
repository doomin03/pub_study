import { depositSeries } from '@/chart/series/seriesStyle';
import { defaultXAxis, buildDepositXAxis } from '@/chart/xAxis/xAxisStyle';
import { depositYAxisStyle } from '@/chart/yAxis/yAxisStyle';
import { depositTooltip } from '@/chart/tooltip/tooltipStyle';

export const chartStyleMap = {
    deposit: {
        series: depositSeries,
        xAxis: defaultXAxis,
        xAxisBuilder: buildDepositXAxis,
        yAxis: depositYAxisStyle,
        tooltip: depositTooltip
    }
};