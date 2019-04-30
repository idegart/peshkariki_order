<template>
    <div>
        <div class="row col-12 ">
            <h4 class="col-12 form__heading-secondary text-left mt-1">
                <small>Выберите тип доставки</small>
            </h4>
        </div>
        <div class="row col-12 mt-2">
            <div class="btn-group btn-group-justified col-12 form__delivery__button-group">
                <a v-for="type in typesAuto"
                   @click.prevent="totalWeight <= type.weight ? updateTypeAuto(type) : null"
                   href="#"
                   class="btn btn-primary form__delivery__button"
                   :class="order.typeAuto === type.id ? 'form__delivery__button--active' : ''"
                >
                    {{ type.name }}
                </a>
            </div>
        </div>
        <div class="row col-12 mt-2">
            <p class="col-12 text-left">Вес груза до <span>{{ typesAuto[order.typeAuto].weight / 1000 }}</span> кг</p>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters } from 'vuex'

    export default {
        name: "autoComponent",

        computed: {
            ...mapState('base', [
                'typesAuto',
            ]),

            ...mapState('order', [
                'order',
            ]),

            ...mapGetters('order', [
                'totalWeight',
            ]),
        },

        methods: {
            ...mapMutations('order', [
                'updateOrder',
            ]),

            updateTypeAuto (type) {
                this.updateOrder({
                    key: 'typeAuto',
                    value: type.id
                })
            }
        }
    }
</script>

<style scoped>

</style>