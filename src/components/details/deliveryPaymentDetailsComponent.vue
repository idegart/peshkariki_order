<template>
    <div class="form-group pt-2">
        <label class="font-weight-bold mt-2">
            Принять выручку за груз получателя?
        </label>
        <div class="row pl-3">
            <div v-for="method in itemsPaymentMethods"
                 class="form-check-inline col-12 col-md-3">

                <label class="form-check-label">
                    <input :checked="order.itemsPaymentMethod === method.value"
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
        name: "deliveryPaymentDetailsComponent",

        computed: {
            ...mapState('base', [
                'itemsPaymentMethods',
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
                    key: 'itemsPaymentMethod',
                    value
                })
            },
        }
    }
</script>

<style scoped>

</style>