<template>
    <div class="form-group pt-2">
        <label for="storeItemsName" class="font-weight-bold">Возврат выручки:</label>
        <input type="text" class="form-control" placeholder="Номер карты, ФИО владельца">
        <div class="row pl-3 mt-2 d-flex justify-content-between">
            <div class="form-check col-md-4 col-12 form__payment-return__item">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optradio">Карта Сбербанка
                </label>
            </div>
            <div class="form-check col-md-4 col-12 form__payment-return__item">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optradio">Яндекс.деньги
                </label>
            </div>
            <div class="form-check col-md-4 col-12 form__payment-return__item">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optradio">Qiwi
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "returnDetailsComponent"
    }
</script>

<style scoped>

</style>