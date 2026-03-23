import '@/chart/xAxis/format.js'

export const defaultXAxis = {
    categories: [],
    lineColor: '#000',
    labels: {}
};

export function findRangeIndex(categories = [], range = {}) {
    const {startKey, endKey} = range;

    const startIndex = categories.findIndex(item => item === startKey);
    const endIndex = categories.findIndex(item => item === endKey);

    if (startIndex === -1 || endIndex === -1) {
        return null;
    }

    return {
        startIndex,
        endIndex
    };
}

export function createPlot(categories = [], ranges = []) {
    return ranges
        .map((range) => {
            const indexRange = findRangeIndex(categories, range);

            if (!indexRange) {
                return null;
            }

            return {
                from: indexRange.startIndex - 0.5,
                to: indexRange.endIndex + 0.5,
                color: range.color ?? 'rgba(180, 210, 235, 0.35)',
                zIndex: range.zIndex ?? 0
            };
        })
        .filter(Boolean);
}

export function buildDepositXAxis({
                                      categories = [],
                                      ranges = [],
                                      style = {},
                                      format = () => {
                                      },
                                  } = {}) {
    return {
        ...defaultXAxis,
        ...style,
        categories,
        plotBands: createPlot(categories, ranges),
        labels: {
            ...(defaultXAxis.labels ?? {}),
            ...(style.labels ?? {}),
            formatter: format
        }
    };
}