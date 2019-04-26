<template>
    <div>
        <label for="storeItemsName" class="font-weight-bold">Промокод</label>
        <div class="row">
            <div class="input-group col-12 promo__textfield position-relative">
                <input type="text" class="form-control" placeholder="Введите код">
                <div class="input-group-append">
                    <div class="input-group-append promo__is-correct position-absolute"
                         title="Промокод не найден">
                        <div class="fas fa-exclamation-triangle promo__warning-icon"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "promoDetailsComponent"
    }
</script>

<style scoped>

</style>