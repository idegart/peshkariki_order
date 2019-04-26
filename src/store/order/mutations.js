import {set, indexOf} from 'lodash'

import Order from "../../models/Order";
import Dot from "../../models/Dot";
import Item from "../../models/Item";

export default {
    setInitialOrder: state => {
        state.order = new Order({
            dots: [
                new Dot(),
                new Dot({
                    items: [
                        new Item(),
                    ]
                }),
            ]
        })
    },

    updateDot: (state, {dot, key, value}) => {
        set(dot, key, value)
    },

    addDot: state => {
        state.order.dots.push(new Dot({
            items: [
                new Item()
            ]
        }))
    },

    removeDot: (state, dot) => {
        const index = indexOf(state.order.dots, dot)
        state.order.dots.splice(index, 1)
    },

    addDotItem: (state, dot) => {
        dot.items.push(new Item());
    },

    removeDotItem: (state, {dot, item}) => {
        const index = indexOf(dot.items, item)
        dot.items.splice(index, 1)
    },

    updateDotItem: (state, {item, key, value}) => {
        set(item, key, value)
    },
}