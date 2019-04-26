<template>
    <div class="input-group input-group-sm mb-3 col-12">
        <div class="input-group-prepend">
                                    <span class="input-group-text form__prepend">
                                        <div class="fa fa-subway inline-icon form__prepend__icon"></div>
                                    </span>
        </div>
        <select class="custom-select">
            <option selected>Ближайшее метро</option>
            <option value="1">Площадь ленина</option>
            <option value="2">Удельная</option>
            <option value="3">ЗВенигородская</option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "metroDotComponent"
    }
</script>

<style scoped>

</style>