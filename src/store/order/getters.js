import { get, indexOf } from 'lodash'

export default {
    getDots: state => get(state, 'order.dots', []),

    getDotIndex: state => dot => indexOf(state.order.dots, dot),

    totalDots: state => state.order.dots.length,

    getDotItemIndex: state => ({dot, item}) => indexOf(dot.items, item),
}