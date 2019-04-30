<template>
    <div class="form-group" data-validation>
        <label class="font-weight-bold form__prepend__req form__what-deliver">
            Что везем (коротко):</label>
        <input v-model="comment"
               type="text"
               class="form-control"
               :class="$v.comment.$dirty && $v.comment.$invalid ? 'is-invalid' : ''"
               placeholder="Например, документы">

        <div class="d-flex justify-content-between mt-0">
            <button @click="setComment('Документы')" class="btn btn-link btn-sm px-0 d-block text-danger">Документы</button>
            <button @click="setComment('Коробка')" class="btn btn-link btn-sm px-0 d-block text-danger">Коробка</button>
            <button @click="setComment('Товар')" class="btn btn-link btn-sm px-0 d-block text-danger">Товар</button>
            <button @click="setComment('Запчасти')" class="btn btn-link btn-sm px-0 d-block text-danger">Запчасти</button>
            <button @click="setComment('Другое')" class="btn btn-link btn-sm px-0 d-block text-danger">Другое</button>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from "vuex";
    import { required, } from 'vuelidate/lib/validators'

    export default {
        name: "deliveryDetailsComponent",

        validations: {
            comment: {required,},
        },

        computed: {
            ...mapState('order', [
                'order',
            ]),

            comment: {
                get () { return this.order.comment },
                set (value) { this.updateOrder({key: 'comment', value}) }
            }
        },

        methods: {
            ...mapMutations('order', [
                'updateOrder',
            ]),

            setComment (value) {
                this.comment = value
            },

            isInvalidForm() {
                this.$v.$touch();
                return this.$v.$invalid;
            },
        },
    }
</script>

<style scoped>

</style>