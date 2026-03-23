import { chartStyleMap } from '@/chart/chartUtil.js';
import { buildSeries } from '@/chart/series/seriesStyle';

export function createChartOptions({
                                       styleType = '',
                                       categories = [],
                                       dataList = [],
                                       ranges = [],
                                       title = '',
                                       customOptions = {}
                                   }) {
    const selectedStyle = chartStyleMap[styleType];

    if (!selectedStyle) {
        return {
            title: {
                text: `Unknown chart type: ${styleType}`
            },
            series: []
        };
    }

    const xAxis = selectedStyle.xAxisBuilder
        ? selectedStyle.xAxisBuilder({
            categories,
            ranges,
            style: selectedStyle.xAxis,
            format: selectedStyle.xAxisFormat
        })
        : {
            ...selectedStyle.xAxis,
            categories
        };

    return  {
        legend: selectedStyle.legend,
        chart: {
            width: 900,
            height: 400,
            marginLeft: 60,
            marginRight: 60,
            marginTop: 70,
            marginBottom: 50,
            spacingLeft: 0,
            spacingRight: 0
        },
        lang: {
            locale: 'ko-KR'
        },
        plotOptions: selectedStyle.plotOptions,
        title: {
            text: title || null
        },
        credits: {
            enabled: false
        },
        xAxis,
        yAxis: selectedStyle.yAxis,
        tooltip: selectedStyle.tooltip,
        series: buildSeries(selectedStyle.series, dataList),
        ...customOptions
    };
}