<template>
    <div id="chart-container-3"></div>
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
            msciWorldData: [
                100, 98, 95, 92, 88, 84, 79, 81, 86, 83, 74, 73,
                77, 83, 80, 87, 82, 85, 87, 86, 92, 94, 90, 91,
                88, 84, 89, 95, 98, 101, 103, 106, 99, 104, 106, 110,
                112, 113, 114, 111, 116, 112, 103, 112, 116, 120, 124, 127
            ],

            dxyData: [
                96, 94, 97, 99, 101, 104, 103, 106, 109, 108, 111, 112,
                106, 104, 103, 105, 104, 102, 103, 104, 100, 102, 103, 105,
                106, 105, 103, 104, 104, 105, 106, 105, 103, 102, 101, 103,
                106, 107, 109, 110, 108, 104, 99, 100, 98, 97, 99, 98
            ],

            us10yData: [
                1.7, 1.8, 2.0, 2.4, 2.8, 3.1, 3.0, 2.7, 3.0, 3.5, 4.2, 4.1,
                3.8, 3.6, 3.4, 4.0, 4.1, 3.7, 3.5, 3.8, 4.1, 4.3, 4.6, 5.0,
                4.4, 3.9, 4.2, 4.3, 4.4, 4.7, 4.5, 4.6, 4.4, 4.3, 4.0, 4.2,
                4.4, 4.5, 4.6, 4.8, 4.4, 4.0, 4.3, 4.2, 4.1, 4.2, 4.1, 4.0
            ],
        };
    },
    methods: {
        init() {
            const startIndex = this.monthData.findIndex(item => item.key === '2025M04');

            Highcharts.chart('chart-container-3', {
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
                            text: null,
                            rotation: 0,
                            align: 'high',
                            offset: 0,
                            y: -10,
                            x: 0,
                            margin: 10
                        },
                        min: 70,
                        max: 130,
                        tickPositions: [70, 80, 90, 100, 110, 120, 130],
                        offset: 0,
                        plotLines: [
                            {
                                value: 100,
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
                            text: '(연%)',
                            rotation: 0,
                            align: 'high',
                            offset: 0,
                            y: -10,
                            x: -55,
                            margin: 10
                        },
                        min: 0,
                        max: 6,
                        tickPositions: [0, 1, 2, 3, 4, 5, 6],
                        offset: 0,
                        lineWidth: 1,
                        lineColor: '#000',
                        opposite: true
                    }
                ],
                xAxis: {
                    categories: this.monthData.map(item => item.key),
                    lineColor: '#000',
                    plotLines: [
                        {
                            value: 12,
                            color: '#000',
                            width: 1,
                            dashStyle: 'ShortDash',
                            zIndex: 6
                        },
                        {
                            value: 24,
                            color: '#000',
                            width: 1,
                            dashStyle: 'ShortDash',
                            zIndex: 6
                        },
                        {
                            value: 36,
                            color: '#000',
                            width: 1,
                            dashStyle: 'ShortDash',
                            zIndex: 6
                        }
                    ],
                    plotBands: [
                        {
                            from: startIndex - 0.5,
                            to: this.monthData.length - 0.5,
                            color: 'rgba(180, 210, 235, 0.35)',
                            zIndex: 0
                        }
                    ],
                    labels: {
                        formatter: function () {
                            const category = this.axis.categories?.[this.pos];
                            if (!category) return '';

                            const [year, month] = category.split('M');

                            if (month === '01') {
                                return `${year.slice(2)}.1`;
                            }

                            if (month === '07') {
                                return '7';
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
                    series: {
                        animation: false,
                        enableMouseTracking: true,
                        stickyTracking: true,
                        states: {
                            hover: {
                                enabled: false,
                                halo: {
                                    size: 0
                                }
                            },
                            inactive: {
                                opacity: 1
                            }
                        }
                    },
                    line: {
                        lineWidth: 2,
                        lineWidthPlus: 0,
                        states: {
                            hover: {
                                lineWidthPlus: 0
                            }
                        },
                        marker: {
                            enabled: false,
                            states: {
                                hover: {
                                    enabled: false
                                }
                            }
                        }
                    }
                },
                series: [
                    {
                        type: 'line',
                        name: '전세계 MSCI 지수 (좌축)',
                        data: this.msciWorldData,
                        color: '#004884',
                        marker: {
                            enabled: false
                        }
                    },
                    {
                        type: 'line',
                        name: 'DXY 지수 (좌축)',
                        data: this.dxyData,
                        color: '#BCA888',
                        marker: {
                            enabled: false
                        }
                    },
                    {
                        type: 'line',
                        name: '미 국채 (10년) 금리 (우축)',
                        data: this.us10yData,
                        yAxis: 1,
                        color: '#0093D3',
                        marker: {
                            enabled: false
                        }
                    }
                ],
                tooltip: {
                    shared: false,
                    formatter: function () {
                        const category = this.series.chart.xAxis[0].categories[this.point.x];
                        const [year, month] = category.split('M');

                        return `
                            <b>${year}.${Number(month)}</b><br/>
                            <span style="color:${this.color}">●</span>
                            ${this.series.name}: <b>${this.y}</b>
                        `;
                    }
                }
            });
        },

        createDate() {
            this.monthData = [];

            for (let year = 2022; year <= 2025; year++) {
                for (let month = 1; month <= 12; month++) {
                    this.monthData.push({
                        year,
                        month,
                        key: `${year}M${String(month).padStart(2, '0')}`,
                        label: `${String(year).slice(2)}.${month}`
                    });
                }
            }

            console.log(this.monthData);
        }
    }
};
</script>

<style scoped lang="scss">
#chart-container-3 {
    width: 900px;
    height: 400px;
}
</style>