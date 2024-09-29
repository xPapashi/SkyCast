import { format } from 'date-fns'

function getTodaysDate() {
    const today = new Date();
    return format(today, 'EEEE');
}

function formatDateToDayAndMonth(date) {
    return format(new Date(date), "dd/MM");
}

export {getTodaysDate, formatDateToDayAndMonth}