import axios from 'axios'
import Service from "../../models/Service";
import {toInteger} from "lodash";

export default {
    loadInitialInfo: ({state, rootState, getters, rootGetters, dispatch, commit}) => {
        commit('setInitialDates');
        commit('setInitialTimes');

        dispatch('loadMetroList');
        dispatch('loadServicesList');
        dispatch('loadCitiesList');

        commit('order/setInitialOrder', null, {root: true});
        dispatch('order/setOrderDefaults', null, {root: true});
    },

    loadMetroList: ({commit}) => {
        let url = 'https://alt6.peshkariki.ru/ajax/orderForm/getMetroList'
        axios.get(url)
            .then(({data}) => {
                commit('setMetroList', data)
            })
    },

    loadServicesList: ({state, dispatch, commit}) => {
        let url = 'https://alt6.peshkariki.ru/ajax/orderForm/getServices?type=0&cityId=1&isLegal='

        axios.get(url)
            .then(({data}) => {
                let services = []
                Object.keys(data).forEach(i => {
                    let service = data[i];

                    services.push(new Service({
                        id: toInteger(service.id),
                        alias: service.alias,
                        name: service.name,
                        description: service.description,
                        price: toInteger(service.price),
                        isImportant: !!toInteger(service.priority),
                    }))
                })

                commit('order/setServices', services, { root: true })
                dispatch('order/initialManageServices', null, {root: true})
            })
    },

    loadCitiesList: ({commit}) => {
        let url = 'https://alt6.peshkariki.ru/ajax/orderForm/getAvailableCities'
        axios.get(url)
            .then(({data}) => {
                commit('setCitiesList', data)
            })
    },

    dispatchUpdater: ({state, rootState, commit, dispatch, rootGetters, getters}) => {
        dispatch('order/manageServices', null, {root: true})
    },
}