<template>
    <div class="mb-3 col-11">
        <div class="input-group input-group-sm">
            <div class="input-group-prepend">
                <span class="input-group-text form__prepend">
                    <b class=" form__prepend__icon">№{{getDotItemIndex({dot, item}) + 1}}</b>
                </span>
            </div>
            <input v-model="name" type="text" class="form-control is-invalid"
                   placeholder="Укажите груз или услугу">
            <div class="invalid-feedback">Обязательное поле</div>
        </div>

    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import Dot from "../../../models/Dot";
    import Item from "../../../models/Item";

    export default {
        name: "nameItemDotComponent",
        props: {
            dot: Dot,
            item: Item,
        },

        computed: {
            ...mapGetters('order', [
                'getDotItemIndex',
            ]),

            name: {
                get() {
                    return this.item.name
                },
                set(value) {
                    this.updateDotItem({item: this.item, key: 'name', value})
                }
            }
        },

        methods: {
            ...mapMutations('order', [
                'updateDotItem',
            ]),
        }
    }
</script>

<style scoped>

</style>