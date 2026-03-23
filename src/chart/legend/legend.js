export const defaultLegend = {
    align: 'center',
        verticalAlign: 'top',
        margin: 40,
        events: {
        itemClick: function (event) {
            event.preventDefault();
            return false;
        }
    }
};

export const testLegend = {
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
}