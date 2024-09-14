import { format, isToday, isYesterday, formatRelative } from 'date-fns';

/**
 * @param {Date} date - 
 * @param {Boolean} onlyTime - **'H:mm'** Format if true. **'d MMMM H:mm'** if false.
 * @param {Boolean} usingWords - Returns in "Today", "Yesterday" format
*/
export default function dateFilter(date, onlyTime = false, usingWords = false) {
    const currentDate = Date.now();

    if (usingWords) {
        if (isToday(date)) {
            return `Today at ${format(date, 'kk:mm')}`;
          }
        
        if (isYesterday(date)) {
            return `Yesterday at ${format(date, 'kk:mm')}`;
        }

        // in case if it's not today or yesterday:
        const now = new Date();
        const formattedDate = formatRelative(date, now);

        return formattedDate;
    }

    if (onlyTime == false) {
        if (new Date(currentDate).getFullYear() != new Date(date).getFullYear()) {
            return format(new Date(date), 'd MMMM yyyy H:mm');
        } else {
            
            return format(new Date(date), 'd MMMM H:mm');
        }
    }

    return format(new Date(date), 'H:mm');
}