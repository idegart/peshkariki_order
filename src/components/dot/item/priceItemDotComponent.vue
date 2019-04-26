<template>
    <div class="mb-3 col-lg-4 col-12">
        <div class="input-group input-group-sm">
            <input type="number" class="form-control" placeholder="Стоимость">
            <div class="input-group-append form__prepend--unstretchable">
                                <span class="input-group-text">
                                    <div class="fa fa-ruble-sign inline-icon form__prepend__icon"></div>
                                </span>
            </div>
        </div>
        <div class="invalid-feedback">Обязательное поле</div>
    </div>
</template>

<script>
    export default {
        name: "priceItemDotComponent"
    }
</script>

<style scoped>

</style>