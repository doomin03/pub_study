
/**
 * yAxis 기본 옵션 생성
 * @param {Array} title - y축 제목
 * @param {number} min - 최소값
 * @param {number} max - 최대값
 * @param {number[]} tickPositions - 눈금 값 배열
 * @returns []
 */
function DefaultYChart(title, min, max, tickPositions) {
    return [
        {
            title: {
                text: title[0],
                rotation: 0,
                align: 'high',
                offset: 0,
                y: -10,
                x: 55,
                margin: 10
            },
            //y 축에서 노출되는 최소
            min: -10,
            //y 축에서 노출되는 최대
            max: 15,
            tickPositions: tickPositions,
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
                text: title[1],
                rotation: 0,
                align: 'high',
                offset: 0,
                y: -10,
                x: -55,
                margin: 10
            },
            min: -10,
            max: 15,
            tickPositions: tickPositions,
            offset: 0,
            lineWidth: 1,
            lineColor: '#000',
            opposite: true,
        }
    ]
}