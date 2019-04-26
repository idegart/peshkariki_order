<template>
    <div>
        <div class="row col-12 ">
            <h4 class="col-12 form__heading-secondary text-left mt-1"><small>Выберите тип доставки</small></h4>
        </div>
        <div class="row col-12 mt-2">
            <div class="btn-group btn-group-justified col-12 form__delivery__button-group">
                <a href="#"
                   class="btn btn-primary form__delivery__button form__delivery__button--active">Пешком</a>
                <a href="#" class="btn btn-primary form__delivery__button">На легковом авто</a>
                <a href="#" class="btn btn-primary form__delivery__button">На универсале</a>
                <a href="#" class="btn btn-primary form__delivery__button">На грузовом авто</a>
            </div>
        </div>
        <div class="row col-12 mt-2">
            <p class="col-12 text-left">Вес груза от <span>0</span> до <span>10</span> кг</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "autoComponent"
    }
</script>

<style scoped>

</style>