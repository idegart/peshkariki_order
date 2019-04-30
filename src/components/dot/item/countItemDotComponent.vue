<template>
    <div class="input-group input-group-sm mb-3 col-lg-4 col-12" data-validation>
        <input v-model="count"
               type="number"
               class="form-control"
               :class="$v.count.$dirty && $v.count.$invalid ? 'is-invalid' : ''"
               placeholder="Введите кол-во">
        <div class="input-group-append">
            <span class="input-group-text form__prepend form__prepend--unstretchable">
                <b class=" form__prepend__icon">шт</b>
            </span>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import Dot from "../../../models/Dot";
    import Item from "../../../models/Item";
    import { required, } from 'vuelidate/lib/validators'

    export default {
        name: "countItemDotComponent",
        props: {
            dot: Dot,
            item: Item,
        },

        validations: {
            count: {required,},
        },

        methods: {
            ...mapMutations('order', [
                'updateDotItem'
            ]),

            isInvalidForm() {
                this.$v.$touch();
                return this.$v.$invalid;
            },
        },

        computed: {
            count: {
                get() {
                    return this.item.count
                },
                set(value) {
                    this.updateDotItem({item: this.item, key: 'count', value})
                }
            }
        },

    }
</script>

<style scoped>

</style>