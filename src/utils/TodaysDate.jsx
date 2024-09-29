import { format } from 'date-fns'

function getTodaysDate() {
    const today = new Date();
    return format(today, 'EEEE');
}

export default getTodaysDate