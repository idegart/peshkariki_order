<template>
    <div>
        <label for="storeItemsName" class="font-weight-bold">Промокод</label>
        <div class="row">
            <div class="input-group col-12 promo__textfield position-relative">
                <input v-model="promo" type="text" class="form-control" placeholder="Введите код">
                <div class="input-group-append">
                    <div class="input-group-append promo__is-correct position-absolute"
                         title="Промокод не найден">
                        <div v-if="order.promoValid"
                             class="fas fa-check-circle" style="color: green"></div>

                        <div v-else
                             class="fas fa-exclamation-triangle promo__warning-icon"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapActions } from 'vuex'
    import { debounce } from 'lodash'

    export default {
        name: "promoDetailsComponent",

        computed: {
            ...mapState('base', [
                'deliveryPaymentMethods',
            ]),
            ...mapState('order', [
                'order',
            ]),

            promo: {
                get() { return this.order.promo },
                set (value) {
                    this.updateOrder({key: 'promo', value});
                    this.emitCheckPromo();
                }
            }
        },

        methods: {
            ...mapMutations('order', [
                'updateOrder',
            ]),

            ...mapActions('order', [
                'checkPromo'
            ]),

            updateMethod (value) {
                this.updateOrder({
                    key: 'deliveryPaymentMethod',
                    value
                })
            },

            emitCheckPromo: debounce(function () {
                this.checkPromo();
            }, 300)
        }
    }
</script>

<style scoped>

</style>