<template>
    <div class="container form__footer__container">
        <button class="form__footer__button form__footer__button--first btn btn-primary" data-toggle="modal"
                data-target="#template-modal">
            <span class="form__footer__span">Выбрать шаблон</span><i
                class="fas fa-paste form__footer__icon"></i>
        </button>
        <button class="form__footer__button form__footer__button--first btn btn-primary" data-toggle="modal"
                data-target="#courier-modal">
            ({{ totalSelectedCouriers }})
            <span class="form__footer__span">Выбрать курьеров</span><i
                class="fas fa-user form__footer__icon"></i>
        </button>
        <button class="form__footer__button form__footer__button--price btn btn-primary">
            <i class="fas fa-info-circle form__footer__icon--left"></i>
            <span class="form__footer__span">Цена доставки</span><span class="ml-1"><span>249</span>
                        <i class="fas fa-ruble-sign form__footer__icon"></i></span>
        </button>
        <button @click="tryCreateOrder" class="form__footer__button form__footer__button--start btn btn-primary">
            <span>Запустить заказ</span>
        </button>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: "bottomComponent",

        computed: {
            ...mapState('base', [
                'couriers',
            ]),

            totalSelectedCouriers() {
                return this.couriers.filter(courier => courier.selected).length;
            }
        },

        methods: {
            ...mapActions('order', [
                'tryCreateOrder',
            ]),
        },
    }
</script>

<style scoped>

</style>