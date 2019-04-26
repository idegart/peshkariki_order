<template>
    <div class="app">
        <div v-if="order">
            <div class="content-body container-fluid form__container px-0">
                <div class="jumbotron row form mb-0 pt-1 form__delivery pb-3">

                    <auto-component/>

                </div>

                <div>
                    <dot-component v-for="(dot, index) in getDots" :key="index" :dot="dot" />
                </div>

                <div v-if="totalDots < maxOrderDots" class="row">
                    <button @click="addDot" class="btn btn-link col-12 form__delivery__add">
                        Добавить адрес
                    </button>
                </div>

                <div class="row justify-content-center mt-4 details">
                    <div class="col-md-6 col-12 mr-1">

                        <details-component/>

                    </div>

                </div>
                <div class="map__container mt-10">
                    <div class="row">
                        <div class="btn btn-link form__delivery__add col-12 mt-2" data-toggle="collapse" data-target="#map">
                            Раскрыть карту
                            <div id="map">

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid form__footer row justify-content-center m-0">

                <bottom-component/>

            </div>


            <checkprint-modal-component />

            <template-modal-component />

            <favorites-modal-component />
        </div>
    </div>
</template>

<script>

    import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

    import AutoComponent from "./components/autoComponent";
    import DotComponent from "./components/dotComponent";
    import DetailsComponent from "./components/detailsComponent";
    import BottomComponent from "./components/bottomComponent";
    import TemplateModalComponent from "./components/modals/templateModalComponent";
    import FavoritesModalComponent from "./components/modals/favoritesModalComponent";
    import CheckprintModalComponent from "./components/modals/checkprintModalComponent";

    export default {
        name: 'app',
        components: {
            CheckprintModalComponent,
            FavoritesModalComponent,
            TemplateModalComponent, BottomComponent, DetailsComponent, DotComponent, AutoComponent
        },

        data: () => ({
            maxDots: window.MAX_DOTS
        }),

        methods: {
            ...mapActions('base', [
                'loadInitialInfo',
            ]),

            ...mapMutations('order', [
                'addDot'
            ]),
        },

        computed: {
            ...mapState('base', [
                'maxOrderDots',
            ]),
            ...mapState('order', [
                'order',
            ]),

            ...mapGetters('order', [
                'getDots',
                'totalDots',
            ]),
        },

        mounted() {
            this.loadInitialInfo()
        }
    }
</script>

<style>
</style>
