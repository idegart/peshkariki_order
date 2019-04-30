import axios from 'axios'
import Service from "../../models/Service";
import {toInteger, get} from "lodash";
import Order from "../../models/Order";
import Dot from "../../models/Dot";

export default {
    loadInitialInfo: ({state, rootState, getters, rootGetters, dispatch, commit}) => {
        commit('setInitialDates');
        commit('setInitialTimes');

        dispatch('loadMetroList');
        dispatch('loadServicesList');
        dispatch('loadCitiesList');
        dispatch('loadTemplates');

        commit('order/setInitialOrder', null, {root: true});
        dispatch('order/setOrderDefaults', null, {root: true});
    },

    loadMetroList: ({commit}) => {
        let url = BASE_URL + 'ajax/orderForm/getMetroList'
        axios.get(url)
            .then(({data}) => {
                commit('setMetroList', data)
            })
    },

    loadServicesList: ({state, dispatch, commit}) => {
        let url = BASE_URL + 'ajax/orderForm/getServices'

        axios.get(url, {
            params: {
                type: 0,
                cityId: 1,
                isLegal: '',
            }
        })
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
        let url = BASE_URL + 'ajax/orderForm/getAvailableCities'
        axios.get(url)
            .then(({data}) => {
                commit('setCitiesList', data)
            })
    },

    dispatchUpdater: ({state, rootState, commit, dispatch, rootGetters, getters}) => {
        dispatch('order/manageServices', null, {root: true})
    },

    loadTemplates: ({state}) => {
        let url = BASE_URL + 'ajax/orderForm/loadTemplatesAndCouriers'

        axios.get(url, {
            params: {
                userId: state.userId || 5,
            }
        })
            .then(({data}) => {
                if (data.success) {
                    state.templates = data.templates
                    state.couriers = data.favourites
                }
            })
    },

    loadTemplate: ({state, rootState}, {orderId, templateType}) => {
        let url = BASE_URL + 'ajax/orderForm/getTemplate'

        axios.get(url, {
            params: {
                orderId: orderId,
                templateType: templateType,
            }
        })
            .then(({data}) => {
                if (data.success) {
                    const template = data.template,
                        info = template.info

                    rootState.order.order = formOrder(template)

                    info.payServices.forEach(alias => {
                        let service = rootState.order.services.find(service => service.alias === alias)

                        if (service) {
                            service.isChecked = true
                        }
                    })
                }
            })
    }
}

function formOrder(template) {
    const pickupDot = template.pickupDot,
        info = template.info,
        deliveryDots = template.deliveryDots

    let dots = [];
    dots.push(formatDot(pickupDot));

    deliveryDots.forEach(dot => {
        dots.push(formatDot(dot))
    })

    return new Order({
        dots:                   dots,
        comment:                get(info, 'itemShortName'),
        itemsPaymentMethod:     toInteger(get(info, 'selectedItemsPaymentMethod')),
        deliveryPaymentMethod:  toInteger(get(info, 'selectedDeliveryPaymentMethod')),
        walletMethod:           toInteger(get(info, 'selectedEwalletType')),
        walletValue:            get(info, 'ewallet'),
        courierAddition:        toInteger(get(info, 'courierAddition')),
        shopName:               get(info, 'shopName'),
        shopInnerId:            get(info, 'shopInnerId'),
    })
}


function formatDot(dot) {

    let items = get(dot, 'items', []);

    if (items.length) {
        items = items.map(item => {
            return {
                count:  get(item, 'quant'),
                price:  get(item, 'price'),
                weight: get(item, 'weight'),
                name:   get(item, 'name'),
            }
        })
    }

    return new Dot({
        items:      items,

        city:       toInteger(dot.cityId),
        address:    get(dot, 'addressStreet'),
        building:   get(dot, 'addressBuilding'),
        apartment:  get(dot, 'addressApartment'),
        metro:      get(dot, 'metroId'),
        contact:    get(dot, 'contactName'),
        phone:      get(dot, 'contactPhone'),
        data:       get(dot, 'visitDate'),
        timeFrom:   toInteger(dot.visitTimeFrom.text.split(':')[0]),
        timeTo:     toInteger(dot.visitTimeTo.text.split(':')[0]),
    })
}