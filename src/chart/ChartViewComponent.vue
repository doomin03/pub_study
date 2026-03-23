<template>
    <div :id="chartId" ref="chartRef" class="chart-view-component"></div>
</template>

<script>
import Highcharts from 'highcharts';
import { createChartOptions } from '@/chart/factory/createChartOptions';

export default {
    name: "ChartViewComponent",
    props: {
        styleType: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            default: () => []
        },
        dataList: {
            type: Array,
            default: () => []
        },
        chartKey: {
            type: [String, Number],
            default: ''
        },
        title: {
            type: String,
            default: ''
        },
        height: {
            type: Number,
            default: 400
        },
        customOptions: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            chart: null
        };
    },
    computed: {
        chartId() {
            const suffix = this.chartKey !== '' ? this.chartKey : 'default';
            return `chart-${this.styleType}-${suffix}`;
        },
        chartOptions() {
            return createChartOptions({
                styleType: this.styleType,
                categories: this.categories,
                dataList: this.dataList,
                title: this.title,
                height: this.height,
                customOptions: this.customOptions
            });
        }
    },
    mounted() {
        this.renderChart();
    },
    watch: {
        chartOptions: {
            deep: true,
            handler() {
                this.renderChart();
            }
        }
    },
    methods: {
        renderChart() {
            if (this.chart) {
                this.chart.destroy();
                this.chart = null;
            }

            this.chart = Highcharts.chart(this.$refs.chartRef, this.chartOptions);
        }
    },
    beforeUnmount() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}
</script>

<style scoped>
.chart-view-component {
    width: 900px;
    height: 400px;
}
</style>