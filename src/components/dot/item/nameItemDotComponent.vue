<template>
    <div class="mb-3 col-11" data-validation>
        <div class="input-group input-group-sm">
            <div class="input-group-prepend">
                <span class="input-group-text form__prepend">
                    <b class=" form__prepend__icon">№{{getDotItemIndex({dot, item}) + 1}}</b>
                </span>
            </div>
            <input v-model="name"
                   type="text"
                   class="form-control"
                   :class="$v.name.$dirty && $v.name.$invalid ? 'is-invalid' : ''"
                   placeholder="Укажите груз или услугу">
<!--            <div class="invalid-feedback">Обязательное поле</div>-->
        </div>

    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import Dot from "../../../models/Dot";
    import Item from "../../../models/Item";
    import { required, } from 'vuelidate/lib/validators'

    export default {
        name: "nameItemDotComponent",
        props: {
            dot: Dot,
            item: Item,
        },

        validations: {
            name: {required,},
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

            isInvalidForm() {
                this.$v.$touch();
                return this.$v.$invalid;
            },
        }
    }
</script>

<style scoped>

</style>