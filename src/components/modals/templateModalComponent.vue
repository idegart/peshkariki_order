<template>
    <div class="modal fade" id="template-modal" role="dialog">
        <div class="modal-dialog template-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Выбор шаблона доставки</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div v-if="!templates.length" class="modal-body">
                    У Вас ещё нет сохраненных шаблонов. Вы можете создать шаблон на основе выполненной доставки.
                </div>

                <div v-else class="modal-body">

                    <ul style="list-style: none">
                        <li v-for="template in templates">
                            <a @click="selectTemplate(template.tid, template.oid, template.type)" href="#">
                                {{ template.alias }}
                            </a>
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
    import { mapState, mapActions } from 'vuex'

    export default {
        name: "templateModalComponent",

        computed: {
            ...mapState('base', [
                'templates'
            ]),
        },

        methods: {
            ...mapActions('base', [
                'loadTemplate'
            ]),

            selectTemplate (templateId, orderId, templateType) {
                $('#template-modal').modal('hide')

                this.loadTemplate({orderId, templateType});
            }
        }
    }
</script>

<style scoped>

</style>