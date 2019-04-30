<template>
    <div class="modal fade" id="courier-modal" role="dialog">
        <div class="modal-dialog template-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Избранные Курьеры</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div v-if="!couriers.length" class="modal-body">
                    У Вас пока нет избранных курьеров. Вы можете добавить курьера в избранные после выполнения им
                    Вашей
                    доставки!
                </div>

                <!-- Modal body -->
                <div v-else class="modal-body">
                    <ul style="list-style: none;margin: 0;padding: 0">
                        <li v-for="courier in couriers">
                            <label>
                                <input :checked="courier.selected"
                                       @input="toggleCourier(courier)"
                                       type="checkbox">
                                {{ courier.fio }}
                            </label>
                        </li>
                    </ul>
                </div>

                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger modal__btn" data-dismiss="modal">Вернуться к
                        заказу</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    export default {
        name: "favoritesModelComponent",

        computed: {
            ...mapState('base', [
                'couriers',
            ]),
        },

        methods: {
            ...mapMutations('base', [
                'toggleCourier'
            ]),
        },
    }
</script>

<style scoped>

</style>