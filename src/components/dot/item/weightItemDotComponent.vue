<template>
    <div class="mb-3 col-lg-4 col-12" data-validation>
        <div class="input-group input-group-sm">
            <input v-model="weight"
                   type="number"
                   class="form-control"
                   :class="$v.weight.$dirty && $v.weight.$invalid ? 'is-invalid' : ''"
                   placeholder="Масса">
            <div class="input-group-append">
                <span class="input-group-text form__prepend form__prepend--unstretchable">
                    <b class=" form__prepend__icon">гр</b>
                </span>
            </div>
<!--            <div class="invalid-feedback">Обязательное поле</div>-->
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import Dot from "../../../models/Dot";
    import Item from "../../../models/Item";
    import { required, } from 'vuelidate/lib/validators'

    export default {
        name: "weightItemDotComponent",

        props: {
            dot: Dot,
            item: Item,
        },

        validations: {
            weight: {required,},
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
            weight: {
                get() {
                    return this.item.weight
                },
                set(value) {
                    this.updateDotItem({item: this.item, key: 'weight', value})
                }
            }
        },
    }
</script>

<style scoped>

</style>