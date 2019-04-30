<template>
    <div class="form-group pt-2">
        <label class="font-weight-bold mt-2">
            Выберите вариант оплаты доставки:
        </label>
        <div class="row pl-3">
            <div v-for="method in deliveryPaymentMethods"
                 class="form-check-inline col-12 col-md-3">

                <label class="form-check-label">
                    <input :checked="order.deliveryPaymentMethod === method.value"
                           @input="updateMethod(method.value)"
                           type="radio"
                           class="form-check-input">
                    {{ method.text }}
                </label>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'

    export default {
        name: "paymentDetailsComponent",

        computed: {
            ...mapState('base', [
                'deliveryPaymentMethods',
            ]),
            ...mapState('order', [
                'order',
            ]),
        },

        methods: {
            ...mapMutations('order', [
                'updateOrder',
            ]),

            updateMethod (value) {
                this.updateOrder({
                    key: 'deliveryPaymentMethod',
                    value
                })
            },
        }
    }
</script>

<style scoped>

</style>