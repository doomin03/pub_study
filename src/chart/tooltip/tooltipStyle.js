export const defaultTooltip = {
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

export const depositTooltip = {
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