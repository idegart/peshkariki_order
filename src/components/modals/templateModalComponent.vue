<template>
    <div class="modal fade" id="template-modal" role="dialog">
        <div class="modal-dialog template-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Выбор шаблона доставки</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>

                <!-- Modal body -->
                <div class="modal-body">
                    У Вас ещё нет сохраненных шаблонов. Вы можете создать шаблон на основе выполненной доставки.
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
    export default {
        name: "templateModalComponent"
    }
</script>

<style scoped>

</style>