<template>
    <div class="form-group pt-2">
        <label for="storeItemsName" class="font-weight-bold mt-2">Принять выручку за груз
            получателя?</label>
        <div class="row pl-3">
            <div class="form-check-inline col-12 col-md-3">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optradio">Да
                </label>
            </div>
            <div class="form-check-inline col-12 col-md-3">
                <label class="form-check-label">
                    <input type="radio" class="form-check-input" name="optradio">Нет
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "deliveryPaymentDetailsComponent"
    }
</script>

<style scoped>

</style>