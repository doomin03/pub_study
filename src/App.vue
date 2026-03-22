<template>
    <chart-default-component></chart-default-component>
    <chart1-component></chart1-component>
    <chart2-component></chart2-component>
    <chart3-component></chart3-component>
</template>

<script>

import ChartDefaultComponent from "@/component/ChartDefaultComponent.vue";
import Chart1Component from "@/component/Chart1Component.vue";
import Chart2Component from "@/component/Chart2Component.vue";
import Chart3Component from "@/component/Chart3Component.vue";


export default {
    name: "App",
    components: {
        ChartDefaultComponent,
        Chart1Component,
        Chart2Component,
        Chart3Component
    }
}
</script>

<style scoped>
</style>
