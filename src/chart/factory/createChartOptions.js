import { chartStyleMap } from '@/chart/chartUtil.js';
import { buildSeries } from '@/chart/series/seriesStyle';

export function createChartOptions({
                                       styleType = '',
                                       categories = [],
                                       dataList = [],
                                       ranges = [],
                                       title = '',
                                       height = 400,
                                       customOptions = {}
                                   }) {
    const selectedStyle = chartStyleMap[styleType];

    if (!selectedStyle) {
        return {
            chart: {
                height
            },
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
            style: selectedStyle.xAxis
        })
        : {
            ...selectedStyle.xAxis,
            categories
        };

    const baseOptions = {
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
        plotOptions: {
            // legend: {
            //
            // },
            column: {
                stacking: 'normal',
                borderRadius: 3,
                // 하나의 컬럼에서 데이터간에 간격 조정
                pointPadding: 0.05,
                groupPadding: 0.1,
            }
        },
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

    return baseOptions;
}