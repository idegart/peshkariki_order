import { get, indexOf, toInteger } from 'lodash'

export default {
    getDots: state => get(state, 'order.dots', []),

    firstDot: state => get(state, 'order.dots.0'),

    getDotIndex: state => dot => indexOf(state.order.dots, dot),

    totalDots: state => state.order.dots.length,

    getDotItemIndex: state => ({dot, item}) => indexOf(dot.items, item),

    sortedServices: state => {
        return state.services.filter(service => {
            return service.isVisible
        })
            .sort((a, b) => {
                return (a.isImportant === b.isImportant)
                    ? 0
                    : a.isImportant
                        ? -1 : 1;
            })
    },

    checkDifferentDays: state => {
        const firstDot = get(state, 'order.dots.0')

        return !state.order.dots.every(dot => dot.date === firstDot.date)
    },

    totalWeight: state => {
        return state.order.dots
            .reduce((total, dot) => {
                return total + dot.items
                    .reduce((totalItemsWeight, item) => {
                        return totalItemsWeight + toInteger(item.weight)
                    }, 0)
            }, 0)
    },

    smallIntervals: state => {
        let narrowIntervalsCount = 0,
            narrowIntervalMinTime = 2*60*60;

        return state.order.dots
            .forEach(dot => {
                const timeTo = dot.timeTo,
                    timeFrom = dot.timeFrom,
                    visitTimeTo = timeTo * 60 * 60,
                    visitTimeFrom = timeFrom * 60 * 60


                if ((visitTimeTo - visitTimeFrom) < narrowIntervalMinTime) {
                    narrowIntervalsCount++
                }
            })
    }
}