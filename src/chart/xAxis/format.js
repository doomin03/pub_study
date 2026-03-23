export function depositFormatter()  {
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