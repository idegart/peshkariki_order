<template>
    <div class="input-group input-group-sm mb-3 col-12">
        <div class="input-group-prepend">
            <span class="input-group-text form__prepend">
                <div class="fa fa-home inline-icon form__prepend__icon form__prepend__req"></div>
            </span>
        </div>
        <ul class="form__prepend__list">
            <li>
                <input v-model="address" class="form-control" placeholder="Начните вводить адрес">
            </li>
            <li>
                <input v-model="apartment" class="form-control form__adress__office" placeholder="кв./офис">
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import Dot from "../../models/Dot";

    export default {
        name: "locationDotComponent",
        props: {
            dot: Dot,
        },

        computed: {
            address: {
                get () { return this.dot.address },
                set (value) { this.updateDot({dot: this.dot, key: 'address', value}) }
            },
            apartment: {
                get () { return this.dot.apartment },
                set (value) { this.updateDot({dot: this.dot, key: 'apartment', value}) }
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