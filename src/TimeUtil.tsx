export const getFirstDay = (year: string, month: string): string => {
    const parsedYear = parseInt(year, 10);
    const parsedMonth = parseInt(month, 10);
    const firstDay: string = new Date(parsedYear, parsedMonth - 1, 1)
        .toLocaleString('ja-JP', {
            timeZone: 'Asia/Tokyo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .replace(/\//g, '-');
    return firstDay;
};

export const getLastDay = (year: string, month: string): string => {
    const parsedYear = parseInt(year, 10);
    const parsedMonth = parseInt(month, 10);
    const lastDay: string = new Date(parsedYear, parsedMonth, 0)
        .toLocaleString('ja-JP', {
            timeZone: 'Asia/Tokyo',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .replace(/\//g, '-');
    return lastDay;
};
