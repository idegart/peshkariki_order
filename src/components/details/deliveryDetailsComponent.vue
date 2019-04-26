<template>
    <div class="form-group">
        <label for="storeItemsName" class="font-weight-bold form__prepend__req form__what-deliver">Что
            везем
            (коротко):</label>
        <input type="text" class="form-control" placeholder="Например, документы">
        <div class="d-flex justify-content-between mt-0">
            <button class="btn btn-link btn-sm px-0 d-block text-danger">Документы</button>
            <button class="btn btn-link btn-sm px-0 d-block text-danger">Коробка</button>
            <button class="btn btn-link btn-sm px-0 d-block text-danger">Товар</button>
            <button class="btn btn-link btn-sm px-0 d-block text-danger">Запчасти</button>
            <button class="btn btn-link btn-sm px-0 d-block text-danger">Другое</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "deliveryDetailsComponent"
    }
</script>

<style scoped>

</style>