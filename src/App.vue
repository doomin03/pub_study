<template>
    <chart-default-component></chart-default-component>
    <chart1-component></chart1-component>
    <chart2-component></chart2-component>
    <chart3-component></chart3-component>

    <chart-view-component
        style-type="deposit"
        :categories="categories"
        :data-list="dataList"
        :ranges="ranges"
        :height="400"
    ></chart-view-component>
</template>

<script>
import ChartDefaultComponent from "@/component/ChartDefaultComponent.vue";
import Chart1Component from "@/component/Chart1Component.vue";
import Chart2Component from "@/component/Chart2Component.vue";
import Chart3Component from "@/component/Chart3Component.vue";
import ChartViewComponent from "@/chart/ChartViewComponent.vue";

export default {
    name: "App",
    components: {
        ChartDefaultComponent: ChartDefaultComponent,
        Chart1Component: Chart1Component,
        Chart2Component: Chart2Component,
        Chart3Component: Chart3Component,
        ChartViewComponent: ChartViewComponent
    },
    data: function () {
        return {
            categories: [
                '2022M01', '2022M02', '2022M03', '2022M04', '2022M05', '2022M06',
                '2022M07', '2022M08', '2022M09', '2022M10', '2022M11', '2022M12',
                '2023M01', '2023M02', '2023M03', '2023M04', '2023M05', '2023M06',
                '2023M07', '2023M08', '2023M09', '2023M10', '2023M11', '2023M12',
                '2024M01', '2024M02', '2024M03', '2024M04', '2024M05', '2024M06',
                '2024M07', '2024M08', '2024M09', '2024M10', '2024M11', '2024M12',
                '2025M01', '2025M02', '2025M03', '2025M04', '2025M05', '2025M06',
                '2025M07', '2025M08'
            ],
            dataList: [
                [
                    1.7, 1.7, 2.0, 2, 0.8, 1.3, 1.9, 1.6, 0.8, 1.2, 1.0, 3.1,
                    0.0, -0.3, 2.3, 2.8, 4.3, 7.0, 5.9, 7.0, 6.1, 5.7, 5.7, 5.1,
                    4.8, 4.6, 0.5, 4.5, 5.6, 6.2, 5.5, 8.1, 6.1, 3.5, 1.4, 0.8,
                    1.7, 3.4, 2.5, 3.7, 4.1, 5.0, 3.4, 3.9
                ],
                [
                    -2.2, -1.9, -3.1, -0.8, -0.4, 1.1, -2.2, -1.3, -2.1, -2.0, -2.0, -2.9,
                    -4.6, -2.4, -3.0, -0.5, -0.1, -1.2, -0.1, -0.1, -1.3, 1.0, -0.4, -2.0,
                    -1.5, -2.7, -2.1, 0.6, 0.3, -0.3, -0.1, 1.1, -0.5, 0.3, 0.5, -1.1,
                    -2.2, -0.2, -0.8, 1.1, 1.1, 1.1
                ],
                [
                    -0.8, -0.1, -1.5, -0.4, 0.4, 0.9, -0.6, 0.2, -0.1, 0.0, 1.4, -2.3,
                    -2.9, -2.6, -4.3, -2.7, -2.3, -2.0, -1.5, -1.6, -1.8, -1.5, -2.1, -2.3,
                    -2.5, -3.0, -2.5, -1.4, -1.4, -1.1, -0.9, -0.4, -0.4, 1.4, 2.2, 2.4,
                    0.0, 0.9, 0.1, 0.6, 1.1, 1.1, -0.6, 0.3
                ],
                [
                    -1.3, -0.3, -2.6, 0.8, 0.7, 1.1, -0.9, 0.4, -1.4, -0.8, -2.5, -2.1,
                    -7.5, -5.3, -5.0, -0.4, 1.9, 3.7, 4.4, 5.3, 3.0, 5.4, 3.3, 0.9,
                    0.9, -1.1, -4.2, 3.6, 4.6, 4.7, 4.5, 8.8, 5.2, 5.2, 4.1, 2.1,
                    -0.5, 4.2, 1.8, 5.4, 6.4, 7.3
                ]
            ],
            ranges: [
                {
                    startKey: '2025M03',
                    endKey: '2025M12',
                    color: 'rgba(180, 210, 235, 0.35)',
                    zIndex: 0
                }
            ]
        };
    }
}
</script>

<style scoped>
</style>