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
        data: [],
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

export const testSeries = [
    {
        type: 'column',
        stack: 'testSeries',
        name: '주거용 (좌축)',
        data: [],
        color: '#004884',
        states: {
            hover: {
                enabled: false
            }
        }
    },

    {
        type: 'column',
        stack: 'testSeries',
        name: '비주거용 (좌축)',
        color: '#FFB937',
        data: [],
        states: {
            hover: {
                enabled: false
            }
        }
    },

    {
        type: 'column',
        stack: 'testSeries',
        data: [],
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