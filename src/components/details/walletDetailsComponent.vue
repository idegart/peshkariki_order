<template>
    <div class="form-group pt-2">
        <label class="font-weight-bold">
            Возврат выручки:
        </label>

        <input v-model="walletValue" type="text" class="form-control" placeholder="Номер карты, ФИО владельца">

        <div v-for="method in walletMethods"
             class="row pl-3 mt-2 d-flex justify-content-between">
            <div class="form-check col-md-4 col-12 form__payment-return__item">
                <label class="form-check-label">
                    <input :checked="order.walletMethod === method.value"
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
        name: "walletDetailsComponent",

        computed: {
            ...mapState('base', [
                'walletMethods',
            ]),
            ...mapState('order', [
                'order',
            ]),

            walletValue: {
                get () { return this.order.walletValue },
                set (value) { this.updateOrder({ key: 'walletValue', value }) }
            }
        },

        methods: {
            ...mapMutations('order', [
                'updateOrder',
            ]),

            updateMethod (value) {
                this.updateOrder({
                    key: 'walletMethod',
                    value
                })
            },
        }
    }
</script>

<style scoped>

</style>