<template>
    <div class="mb-3 col-lg-4 col-12">
        <div class="input-group input-group-sm">
            <input v-model="price" type="number" class="form-control" placeholder="Стоимость">
            <div class="input-group-append form__prepend--unstretchable">
                <span class="input-group-text">
                    <div class="fa fa-ruble-sign inline-icon form__prepend__icon"></div>
                </span>
            </div>
        </div>
        <div class="invalid-feedback">Обязательное поле</div>
    </div>
</template>

<script>
    import Dot from "../../../models/Dot";
    import Item from "../../../models/Item";
    import {mapMutations} from "vuex";

    export default {
        name: "priceItemDotComponent",

        props: {
            dot: Dot,
            item: Item,
        },

        methods: {
            ...mapMutations('order', [
                'updateDotItem'
            ]),
        },

        computed: {
            price: {
                get() {
                    return this.item.price
                },
                set(value) {
                    this.updateDotItem({item: this.item, key: 'price', value})
                }
            }
        },
    }
</script>

<style scoped>

</style>