


export function depositXAxis(categories= [], ){
    const startIndex = categories.findIndex(item => item.key === '2025M03');
    const endIndex = categories.findIndex(item => item.key === '2025M12');

    return {
        xAxis: {
            categories: categories,
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
        }
    };
}

export function testXAxis(categories= [], ){
    const startIndex = categories.findIndex(item => item === '25.1');
    return {
        xAxis: {
            categories: categories,
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
        }
    };
}