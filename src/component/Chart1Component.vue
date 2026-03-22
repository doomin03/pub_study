<template>
    <div id="chart-container-1"></div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
    name: "Chart1Component",
    mounted() {
        this.createDate();
        this.init();
    },
    data() {
        return {
            monthData: [],
        }
    },
    methods: {
        init() {
            const startIndex = this.monthData.findIndex(item => item === '25.2');
            const endIndex = this.monthData.findIndex(item => item === '26.2');

            const columnRawData = [0.4, 0.9, 0.5, -0.4, 0.4, 0.7, 0.8, 0.5, 1.2, -0.2, 0.1, 0.1, -0.2, 0.6, 1.1, 0.2, 0.3, 0.3];
            const lineRawData = [3.4, 3.0, 3.4, 1.3, 1.2, 1.5, 2.2, 3.4, 2.2, 1.4, 1.1, 0.0, 1.6, 1.5, 2.1, 1.9, 1.7, 1.6];

            const styledColumnData = columnRawData.map((value, index) => ({
                y: value,
                color: index >= startIndex + 1 ? '#0093D3' : '#004884'
            }));

            Highcharts.chart('chart-container-1', {
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
                title: {
                    text: null
                },
                yAxis: [
                    {
                        title: {
                            text: '(%)',
                            rotation: 0,
                            align: 'high',
                            offset: 0,
                            y: -10,
                            x: 0,
                            margin: 10
                        },
                        min: -1,
                        max: 4,
                        tickPositions: [-1, -0, 1, 2, 3, 4],
                        offset: 0,
                        plotLines: [
                            {
                                value: 0,
                                color: '#000',
                                width: 1,
                                zIndex: 5
                            }
                        ],
                        lineWidth: 1,
                        lineColor: '#000'
                    },
                    {
                        title: {
                            text: '(%)',
                            rotation: 0,
                            align: 'high',
                            offset: 0,
                            y: -10,
                            x: 0,
                            margin: 10
                        },
                        min: -1,
                        max: 4,
                        tickPositions: [-1, -0, 1, 2, 3, 4],
                        offset: 0,
                        lineWidth: 1,
                        lineColor: '#000',
                        opposite: true,
                    }
                ],
                xAxis: {
                    categories: this.monthData,
                    plotBands: [
                        {
                            from: startIndex + 0.5,
                            to: endIndex + 0.5,
                            color: 'rgba(180, 210, 235, 0.35)',
                            zIndex: 0
                        }
                    ],
                    lineColor: '#000',
                    labels: {
                        formatter: function () {
                            const category = this.axis.categories?.[this.pos];

                            const parts = category.split('.');
                            const year = parts[0];
                            const month = parts[1];

                            if (month === '1') {
                                return `${year}.1`;
                            }

                            if (month === '3') {
                                return '|||';
                            }

                            return '';
                        }
                    }
                },
                legend: {
                    align: 'center',
                    verticalAlign: 'top',
                    margin: 40,
                    events: {
                        itemClick: function (event) {
                            event.preventDefault();
                            return false;
                        }
                    }
                },
                plotOptions: {
                    column: {
                        stacking: 'normal',
                        borderRadius: 3,
                        groupPadding: 0.3,
                    }
                },
                series: [
                    {
                        type: 'column',
                        name: '전기 대비',
                        data: styledColumnData,
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },
                    {
                        type: 'line',
                        name: '전년동기대비',
                        data: lineRawData,
                        color: '#BCA888',
                        zoneAxis: 'x',
                        zones: [
                            {
                                value: startIndex,
                                color: '#BCA888',
                                dashStyle: 'Solid'
                            },
                            {
                                color: '#BCA888',
                                dashStyle: 'ShortDash'
                            }
                        ],
                        states: {
                            hover: {
                                enabled: false
                            }
                        },
                        marker: {
                            enabled: false
                        }
                    },
                ],
                tooltip: {
                    shared: true,
                    formatter: function () {
                        const points = this.points || [this];
                        const rawCategory = this.points
                            ? this.points[0].series.chart.xAxis[0].categories[this.x]
                            : this.series.chart.xAxis[0].categories[this.x];

                        let html = `<b>${rawCategory}</b><br/>`;

                        points.forEach(point => {
                            html += `
                        <span style="color:${point.color}">●</span>
                        ${point.series.name}: <b>${point.y}%</b><br/>
                            `;
                        });

                        return html;
                    }
                }
            });
        },

        createDate() {
            for (let year = 2022; year <= 2025; year++) {
                for (let month = 1; month <= 4; month++) {
                    this.monthData.push(`${String(year).slice(2)}.${month}`);
                }
            }

            for (let month = 1; month <= 2; month++) {
                this.monthData.push(`26.${month}`);
            }

            console.log(this.monthData);
        },
    }
}
</script>

<style scoped lang="scss">

#chart-container-1 {
    width: 900px;
    height: 400px;
}
</style>