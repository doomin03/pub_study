export const depositSeries = [
    {
        type: 'column',
        name: '예금은행 주택관련 대출',
        data: [],
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
        data: [],
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
        data: [],
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
]


export function buildSeries(styleSet = [], dataList = []) {
    return styleSet.map((style, index) => ({
        ...style,
        data: dataList[index] ?? style.data ?? []
    }));
}