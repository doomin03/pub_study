<template>
    <div id="chart-container"></div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
    name: "ChartDefaultComponent",
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
            const startIndex = this.monthData.findIndex(item => item.key === '2025M03');
            const endIndex = this.monthData.findIndex(item => item.key === '2025M12');

            Highcharts.chart('chart-container', {
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
                // 한글데이터 있으면 무조건 넣기
                lang: {
                    locale: 'ko-KR'
                },
                title: {
                    text: null
                },
                // 만약에 y축 표시가 2개인 경우 배열로 기입 하나면 객체로 기입
                yAxis: [
                    {
                        title: {
                            text: '(전월대비, 조원)',
                            rotation: 0,
                            align: 'high',
                            offset: 0,
                            y: -10,
                            x: 55,
                            margin: 10
                        },
                        min: -10,
                        max: 15,
                        tickPositions: [-10, -5, 0, 5, 10, 15],
                        offset: 0,
                        // 특정 y축 선을 강조할때 씀
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
                            text: '(전월대비, 조원)',
                            rotation: 0,
                            align: 'high',
                            offset: 0,
                            y: -10,
                            x: -55,
                            margin: 10
                        },
                        min: -10,
                        max: 15,
                        tickPositions: [-10, -5, 0, 5, 10, 15],
                        offset: 0,
                        lineWidth: 1,
                        lineColor: '#000',
                        opposite: true,
                    }
                ],
                xAxis: {
                    categories: this.monthData.map(item => item.key),
                    plotBands: [
                        {
                            from: startIndex - 0.5,
                            to: endIndex + 0.5,
                            color: 'rgba(180, 210, 235, 0.35)',
                            zIndex: 0
                        }
                    ],
                    lineColor: '#000',
                    labels: {
                        formatter: function () {
                            const category = this.axis.categories?.[this.pos];

                            if (!category) {
                                return '';
                            }

                            const parts = category.split('M');
                            const year = parts[0];
                            const month = parts[1];

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
                // 그래프의 스타일 및 노출 설정하는 옵션
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
                // 데이터 기입, 및 그래프 다중 설정
                series: [
                    // {
                    //     type: 'spline',
                    //     data: [],
                    // },
                    {
                        type: 'column',
                        name: '예금은행 주택관련 대출',
                        data: [1.7, 1.7, 2.0, 2, 0.8, 1.3, 1.9, 1.6, 0.8, 1.2, 1.0, 3.1, 0.0, -0.3, 2.3, 2.8, 4.3, 7.0, 5.9, 7.0, 6.1, 5.7, 5.7, 5.1, 4.8, 4.6, 0.5, 4.5, 5.6, 6.2, 5.5, 8.1, 6.1, 3.5, 1.4, 0.8, 1.7, 3.4, 2.5, 3.7, 4.1, 5.0, 3.4, 3.9],
                        color: '#0093D3',
                        stack: 'deposit',
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },
                    {
                        type: 'column',
                        name: '예급은행 기타 대출',
                        data: [-2.2, -1.9, -3.1, -0.8, -0.4, 1.1, -2.2, -1.3, -2.1, -2.0, -2.0, -2.9, -4.6, -2.4, -3.0, -0.5, -0.1, -1.2, -0.1, -0.1, -1.3, 1.0, -0.4, -2.0, -1.5, -2.7, -2.1, 0.6, 0.3, -0.3, -0.1, 1.1, -0.5, 0.3, 0.5, -1.1, -2.2, -0.2, -0.8, 1.1, 1.1, 1.1],
                        color: '#FFAE00',
                        stack: 'deposit',
                        states: {
                            hover: {
                                enabled: false
                            }
                        }
                    },
                    {
                        type: 'column',
                        name: '비은행예금 취급 기간 가계대출',
                        data: [-0.8, -0.1, -1.5, -0.4, 0.4, 0.9, -0.6, 0.2, -0.1, 0.0, 1.4, -2.3, -2.9, -2.6, -4.3, -2.7, -2.3, -2.0, -1.5, -1.6, -1.8, -1.5, -2.1, -2.3, -2.5, -3.0, -2.5, -1.4, -1.4, -1.1, -0.9, -0.4, -0.4, 1.4, 2.2, 2.4, 0.0, 0.9, 0.1, 0.6, 1.1, 1.1, -0.6, 0.3],
                        color: '#95C13B',
                        stack: 'deposit',
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
                            -1.3,
                            -0.3,
                            -2.6,
                            0.8,
                            0.7,
                            1.1,
                            -0.9,
                            0.4,
                            -1.4,
                            -0.8,
                            -2.5,
                            -2.1,
                            -7.5,
                            -5.3,
                            -5.0,
                            -0.4,
                            1.9,
                            3.7,
                            4.4,
                            5.3,
                            3.0,
                            5.4,
                            3.3,
                            0.9,
                            0.9,
                            -1.1,
                            -4.2,
                            3.6,
                            4.6,
                            4.7,
                            4.5,
                            8.8,
                            5.2,
                            5.2,
                            4.1,
                            2.1,
                            -0.5,
                            4.2,
                            1.8,
                            5.4,
                            6.4,
                            7.3,


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
        ${point.series.name}: <b>${point.y}</b><br/>
      `;
                        });

                        return html;
                    }
                }
            });
        },

        createDate() {
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
        },
    }
}
</script>

<style scoped lang="scss">

#chart-container {
    width: 900px;
    height: 400px;
}
</style>