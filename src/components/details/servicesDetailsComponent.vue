<template>
    <div class="jumbotron form row pt-3 mx-0">
        <h4 class="col-12 form__service__heading">Выберите необходимые услуги</h4>
        <div class="pt-2 w-100">

            <div v-for="service in sortedServices"
                 v-if="service.isVisible && (service.isImportant || service.isChecked || toggleVisible)"
                 class="row form__service__block col-12 row px-0"
                 :class="service.isChecked ? 'form__service__block--active' : ''">

                <label class="col-9 col-lg-7 col-md-6 col-xs-5 col-xl-8 display-block form__service__label  px-1 mb-0"
                       :title="service.description"
                       data-toggle="tooltip">
                    <input :checked="service.isChecked"
                           :disabled="!service.isAvailable"
                           @input="toggleServiceChecked(service)"
                           type="checkbox"
                           class="form__service__checkbox">
                    {{ service.name }}
                </label>

                <div class="col-2 col-lg-3 col-md-4 col-xs-4 col-xl-2 px-0"
                     :class="service.isChecked ? 'form__service__price--active' : ''" >
                    <strong class="form__service__price-item">{{ service.price }}</strong>
                    <i class="fas fa-ruble-sign"></i>
                </div>

                <div :title="service.description"
                     data-toggle="tooltip"
                     class="col-1 col-lg-2 col-md-2 col-xs-3 col-xl-2 form__service__icon px-0"
                     :class="service.isChecked ? 'form__service__icon--active' : ''" >
                    <i class="fas fa-info-circle form__service__circle mt-1"></i>
                </div>

            </div>

            <div class="row">
                <div @click="toggleVisible = !toggleVisible"
                     class="btn btn-link form__delivery__add col-12 mt-2" data-toggle="collapse"
                     data-target="#extra-sevices">Раскрыть полный список</div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    export default {
        name: "servicesDetailsComponent",

        data: () => ({
            toggleVisible: false,
        }),

        computed: {
            ...mapGetters('order', [
                'sortedServices',
            ]),
        },

        methods: {
            ...mapMutations('order', [
                'toggleServiceChecked',
            ]),
        },
    }
</script>

<style scoped>

</style>