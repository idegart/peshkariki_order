import {getMonthString} from "../../plugins/toolkit";

export default {
    setInitialDates: state => {
        let now = new Date()
        now.setHours(0, 0, 0, 0)

        let allDates = [],
            firstDay = now.getTime(), // в мс
            oneDayOffset = (24*60*60)*1000 // одни сутки (мс)

        for (let daysGone = 0; daysGone < 7; daysGone++) {
            let dText = "";
            if (daysGone === 0 || daysGone === 1) {
                dText += (daysGone === 0 ? 'Сегодня (' : 'Завтра (') + new Date(firstDay).getDate() + ' ' + getMonthString(new Date(firstDay).getMonth()) + ")";
            } else {
                dText += new Date((firstDay + oneDayOffset * daysGone)).getDate() + ' ' + getMonthString(new Date(firstDay + oneDayOffset * daysGone).getMonth());
            }

            let dayObj = {
                value: firstDay + oneDayOffset * daysGone,
                label: dText,
            }

            allDates.push(dayObj);
        }

        state.allDates = allDates;
    },

    setInitialTimes: state => {
        state.allTimes = _.times(24, time => {
            return {
                label: `${time}:00`,
                value: time,
            }
        })
    }
}