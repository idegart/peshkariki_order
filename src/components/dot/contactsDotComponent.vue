<template>
    <div class="row form__group">

        <div class="input-group input-group-sm mb-3 col-lg-6 col-12">
            <div class="input-group-prepend--unstretchable">
                <span class="input-group-text form__prepend">
                    <div class="fa fa-user form__prepend__icon form__prepend__req"></div>
                </span>
            </div>
            <input v-model="contact" type="text" class="form-control is-invalid" placeholder="Контактное лицо">
            <div class="invalid-feedback">
                Обязательное поле.
            </div>
        </div>

        <div class="mb-3 col-lg-6 col-12">
            <div class="input-group input-group-sm">
                <div class="input-group-prepend form__prepend--unstretchable">
                    <span class="input-group-text form__prepend">
                        <div class="fa fa-mobile form__prepend__icon form__prepend__req"></div>
                    </span>
                </div>
                <input v-model="phone" v-mask="phoneMask" type="tel" class="form-control is-invalid" placeholder="+7(***)***-**-**">
                <div class="invalid-feedback">
                    Обязательное поле.
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapMutations} from 'vuex'
    import Dot from "../../models/Dot";

    export default {
        name: "contactsDotComponent",

        props: {
            dot: Dot,
        },

        data: () => ({
            phoneMask: window.PHONE_MASK
        }),

        computed: {
            phone: {
                get () { return this.dot.phone; },
                set (value) { this.updateDot({dot: this.dot, key: 'phone', value}) }
            },
            contact: {
                get () { return this.dot.contact; },
                set (value) { this.updateDot({dot: this.dot, key: 'contact', value}) }
            },
        },

        methods: {
            ...mapMutations('order', [
                'updateDot',
            ]),
        }
    }
</script>

<style scoped>

</style>