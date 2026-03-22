<template>
    <div id="chart-container-2"></div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
    name: "Chart2Component",
    mounted() {
        this.createDate();
        this.init();
    },
    data() {
        return {
            monthData: [],
        };
    },
    methods: {
        init() {
            const startIndex = this.monthData.findIndex(item => item === '25.1');

            Highcharts.chart('chart-container-2', {
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
                            text: '(%p)',
                            rotation: 0,
                            align: 'high',
                            offset: 0,
                            y: -10,
                            x: 0,
                            margin: 10
                        },
                        min: -16,
                        max: 8,
                        tickPositions: [-16, -12, -8, -4, 0, 4, 8],
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
                            text: '(전년동기대비, %)',
                            rotation: 0,
                            align: 'high',
                            offset: 0,
                            y: -10,
                            x: -55,
                            margin: 10
                        },
                        min: -16,
                        max: 8,
                        tickPositions: [-16, -12, -8, -4, 0, 4, 8],
                        offset: 0,
                        lineWidth: 1,
                        lineColor: '#000',
                        opposite: true,
                    }
                ],
                xAxis: {
                    categories: this.monthData,
                    lineColor: '#000',
                    plotLines: [
                        {
                            value: startIndex - 0.5, // 25.1 앞 경계선
                            color: '#000',
                            width: 1,
                            dashStyle: 'ShortDash',
                            zIndex: 6,
                        }
                    ],
                    labels: {
                        formatter: function () {
                            const category = this.axis.categories?.[this.pos];
                            if (!category) return '';

                            const [year, month] = category.split('.');

                            if (month === '1') {
                                return `${year}.1`;
                            }

                            return month;
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
                        borderRadius: 5,
                        groupPadding: 0.1,
                    }
                },
                series: [

                    {
                        type: 'column',
                        stack: 'data',
                        name: '주거용 (좌축)',
                        data: [-0.4, -2.0, -3.0,-2.5, -7.5],
                        color: '#004884',
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },

                    {
                        type: 'column',
                        stack: 'data',
                        name: '비주거용 (좌축)',
                        color: '#FFB937',
                        data: [0.0, -0.9, -3.5, -1.9,-3.5],
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },

                    {
                        type: 'column',
                        stack: 'data',
                        data: [2.0, 1.6, 0.3, -2.1, -2.3],
                        name: '토목 (좌축)',
                        color: '#0093D3',
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },

                    {
                        type: 'line',
                        name: '전체',
                        data: [
                           1.6, -1.2, -6.2, -6.4, -13.3
                        ],
                        color: '#FF5541',
                        lineWidth: 2,
                        marker: {
                            enabled: true,
                            symbol: 'circle',
                            radius: 3,
                            fillColor: '#ffffff',
                            lineColor: '#FF5541',
                            lineWidth: 2
                        },
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    }
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
            this.monthData = [];
            for (let year = 2024; year <= 2025; year++) {
                for (let month = 1; month <= 4; month++) {
                    this.monthData.push(`${String(year).slice(2)}.${month}`);
                }
            }

            console.log(this.monthData);
        },
    }
};
</script>

<style scoped lang="scss">
#chart-container-2 {
    width: 900px;
    height: 400px;
}
</style>