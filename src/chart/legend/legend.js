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