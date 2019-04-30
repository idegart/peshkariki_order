<template>
    <div>
        <div class="row pt-2" data-toggle="collapse" data-target="#extra-options">
            <div class=" col-12 justify-content-center d-flex">
                <i class="fas fa-angle-right d-flex align-items-center"></i>
                <button class="btn btn-link col-6 form__delivery__add">Дополнительные опции</button>
                <i class="fas fa-angle-left d-flex align-items-center"></i>
            </div>
        </div>
        <div id="extra-options" class="collapse mt-2">
            <div class="row mb-2 form__overpay__wrap">
                <label class="col-lg-6 col-12 font-weight-bold form__help__label">
                    Доплата от заказчика
                    <i class="fas fa-info-circle inline-icon form__help__icon" data-toggle="tooltip"
                       title="Если цена вам кажется недостаточной, вы можете её увеличить.
                        Заказ возьмут в работу намного быстрее!" data-placement="bottom">
                    </i>
                </label>
                <div class="input-group input-group-sm mb-3 col-lg-6 col-12 form__options__wrapper">
                    <input v-model="courierAddition"
                           type="text"
                           class="form-control-sm form-control form-control options__input">
                    <div class="input-group-append options__append">
                        <span class="input-group-text fas fa-ruble-sign"></span></div>
                </div>
            </div>

            <div class="row mb-2">
                <label class="col-lg-4 col-12 font-weight-bold">
                    Организация
                </label>

                <div class="input-group input-group-sm mb-3 col-lg-8 col-12">
                    <input v-model="shopName"
                           type="text"
                           class="form-control-sm form-control options__input--2"
                           placeholder="Н.р. Юлмарт">
                </div>
            </div>

            <div class="row mb-2">
                <label class="col-lg-4 col-12 font-weight-bold">
                    Номер заказа
                </label>
                <div class="input-group input-group-sm mb-3 col-lg-8 col-12">
                    <input v-model="shopInnerId"
                           type="text"
                           class="form-control-sm form-control options__input--2"
                           placeholder="Внутренний номер">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "extraDetailsComponent",

        computed: {
            ...mapState('order', [
                'order',
            ]),

            courierAddition: {
                get () { return this.order.courierAddition },
                set (value) { this.updateOrder({key: 'courierAddition', value}) }
            },

            shopName: {
                get () { return this.order.shopName },
                set (value) { this.updateOrder({key: 'shopName', value}) }
            },

            shopInnerId: {
                get () { return this.order.shopInnerId },
                set (value) { this.updateOrder({key: 'shopInnerId', value}) }
            },
        },

        methods: {
            ...mapMutations('order', [
                'updateOrder',
            ]),
        },
    }
</script>

<style scoped>

</style>