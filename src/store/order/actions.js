import axios from "axios";
import { toInteger } from 'lodash'

const disabledWhenDifferentCities = [
    'd_uncomfortable_cargo', 'd_from_transport_company', 'd_mailing_by_post',
    'r_cour_with_medical_book', 'r_behind_road_circle', 'r_cour_with_car',
    'd_cour_surcharge', 'd_cour_with_car', 'd_need_item_photo',
    'd_need_cheque_photo', 'd_need_work_act_photo', 'd_to_airport',
    'r_to_airport', 'p_need_dressroom', 'd_need_buyout',
    'd_other_day', 'c_need_intercom_keys', 'c_need_evidence_photo',
    'd_confirm_delivery_to_customer', 'd_safe_envelope',
];

const onlyWhenEdit = [
    'd_handing_sms',
    'd_confirm_delivery_to_customer',
    'd_accentuate_in_list',
    'd_high_priority_display'
];

function findService(state, value, param = 'alias') {
    return state.services.find(service => service[param] === value)
}

export default {
    setOrderDefaults: ({state, rootState, commit, dispatch, rootGetters, getters}) => {
        const itemsPaymentMethods = rootState.base.itemsPaymentMethods,
            walletMethods = rootState.base.walletMethods,
            deliveryPaymentMethods = rootState.base.deliveryPaymentMethods,

            defaultItemsPaymentMethod = itemsPaymentMethods.find(method => method.isDefaultChecked),
            defaultWalletMethod = walletMethods.find(method => method.isDefaultChecked),
            defaultDeliveryPaymentMethod = deliveryPaymentMethods.find(method => method.isDefaultChecked)

        state.order.itemsPaymentMethod = defaultItemsPaymentMethod.value
        state.order.walletMethod = defaultWalletMethod.value
        state.order.deliveryPaymentMethod = defaultDeliveryPaymentMethod.value
    },


    // Only on start
    initialManageServices: ({state, rootState, commit, dispatch, rootGetters, getters}) => {
        const isEdit = rootState.base.isEdit,
            isAdmin = rootState.base.isAdmin,
            isLegal = rootState.base.isLegal,
            createdByPhone = rootState.base.createdByPhone,
            isLastOrderCanceled = rootState.base.lastOrderCanceled

        let autofinishing = findService(state, 'd_auto_finishing'),
            lateEdit = findService(state, 'd_late_edit'),
            byPhone = findService(state, 'd_order_by_phone'),
            lastOrderCanceled = findService(state, 'd_canceled_previous_order'),
            chequeService = findService(state, 'd_need_cheque_service')

        if (!isEdit) {
            onlyWhenEdit.forEach(alias => {
                let service = findService(state, alias)

                if (service) {
                    service.isChecked = false;
                    service.isVisible = false;
                    service.isAvailable = false;
                }
            })
        }

        if (!isEdit) {
            autofinishing.isChecked = true
        }

        // Позднее редактирование
        lateEdit.isAvailable = isAdmin
        lateEdit.isVisible = isAdmin || isEdit

        // кассовое обслуживание
        chequeService.isAvailable = isLegal;

        // Заказ по телефону
        if (createdByPhone) {
            byPhone.isVisible = true
            byPhone.isAvailable = isAdmin
        } else {
            byPhone.isAvailable = false
            byPhone.isVisible = false
            byPhone.isChecked = false
        }

        if (isLastOrderCanceled) {
            if (!isEdit) {
                lastOrderCanceled.isChecked = true;
            }
            lastOrderCanceled.isVisible = true;
            lastOrderCanceled.isAvailable = false;
        } else {
            if (!isEdit) {
                lastOrderCanceled.isChecked = false;
            }
            lastOrderCanceled.isVisible = false;
            lastOrderCanceled.isAvailable = false;
        }
    },

    // When something is changed
    manageServices: ({state, rootState, commit, dispatch, rootGetters, getters}) => {
        disabledWhenDifferentCities.forEach(alias => {
            let service = findService(state, alias)

            if (service) {
                if (isDifferentCities) {
                    service.isChecked = false;
                    service.isVisible = false;
                    service.isAvailable = false;
                } else {
                    service.isVisible = true;
                    service.isAvailable = true;
                }
            }
        })

        const firstDot = getters['firstDot'],
            isDifferentCities = !state.order.dots.every(dot => dot.city === firstDot.city),
            getPaymentMethod = 0,
            isDifferentDays = rootGetters['order/checkDifferentDays'],
            getTotalWeight = rootGetters['order/totalWeight'],
            isSmallIntervals = rootGetters['order/smallIntervals']

        let chequeService = findService(state, 'd_need_cheque_service'),
            buyout = findService(state, 'd_need_buyout'),
            narrowIntervalService = findService(state, 'd_narrow_interval'),
            otherDay = findService(state,'d_other_day'),
            carService = findService(state, 'd_cour_with_car')


        // кассовое обслуживание
        chequeService.isVisible = getPaymentMethod === 1;

        // выкуп товара
        if (getPaymentMethod === 2) {
            buyout.isChecked = true;
            buyout.isVisible = true;
            buyout.isAvailable = false;
        } else {
            buyout.isChecked = false;
            buyout.isVisible = false;
            buyout.isAvailable = false;
        }

        // узкие интервалы
        if (isSmallIntervals > 0) {
            narrowIntervalService.isChecked = true;
            narrowIntervalService.isVisible = true;
            narrowIntervalService.isAvailable = false;
        } else {
            narrowIntervalService.isChecked = false;
            narrowIntervalService.isVisible = false;
            narrowIntervalService.isAvailable = false;
        }

        // доставка не в день забора
        if (isDifferentDays) {
            otherDay.isChecked = true;
            otherDay.isVisible = true;
            otherDay.isAvailable = false;
        } else {
            otherDay.isChecked = false;
            otherDay.isVisible = false;
            otherDay.isAvailable = false;
        }

        if (getTotalWeight >= rootState.base.weightForNeedCar) {
            carService.isChecked = true;
            carService.isVisible = true;
            carService.isAvailable = false;
        } else {
            carService.isAvailable = true;
        }
    },

    checkPromo: ({state, rootState}) => {
        let url = 'https://alt6.peshkariki.ru/ajax/orderForm/checkPromoCode'
        axios.get(url, {
            params: {
                user: rootState.base.userId || 5,
                edit: rootState.base.isEdit ? 1 : 0,
                promo_code: state.order.promo
            }
        })
            .then(({data}) => {
                state.order.promoValid = toInteger(data) === 0
            })
    },
}