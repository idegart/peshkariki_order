<template>
    <div class="mb-3 col-lg-4 col-12">
        <div class="input-group input-group-sm">
            <input type="number" class="form-control is-invalid" placeholder="Масса">
            <div class="input-group-append">
                                <span class="input-group-text form__prepend form__prepend--unstretchable">
                                    <b class=" form__prepend__icon">гр</b>
                                </span>
            </div>
            <div class="invalid-feedback">Обязательное поле</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "weightItemDotComponent"
    }
</script>

<style scoped>

</style>