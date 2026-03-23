export const depositYAxisStyle =  [
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
];

export const testYAxisStyle =  [
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
];