<template>
    <div class="jumbotron form">

        <button v-if="getDotIndex(dot) && totalDots > 2"
                @click="removeDot(dot)"
                class="btn btn-primary form__delete-button">
            <span>Удалить<i class="fas fa-times"></i></span>
        </button>

        <div class="row">
            <div class="col-lg-4 col-12 heading__first">
                <h2 class="form__heading">
                    {{ `Адрес ${getDotIndex(dot) ? 'доставки #' + getDotIndex(dot) : 'отправки'}` }}
                </h2>
            </div>
            <div class="col-lg-8 col-12">
                <div class="row form__group">

                    <location-dot-component :dot="dot" />

                    <metro-dot-component :dot="dot" />

                </div>

                <contacts-dot-component :dot="dot" />

                <div class="row form__group">

                    <date-dot-component :dot="dot" />

                    <time-from-dot-component :dot="dot" />

                    <time-to-dot-component :dot="dot" />

                </div>

                <comment-dot-component :dot="dot" />

            </div>
        </div>

        <div v-if="dot.items.length">
            <items-dot-component :dot="dot" />
        </div>

    </div>
</template>

<script>

    import { mapGetters, mapMutations } from 'vuex'

    import LocationDotComponent from "./dot/locationDotComponent";
    import MetroDotComponent from "./dot/metroDotComponent";
    import ContactsDotComponent from "./dot/contactsDotComponent";
    import DateDotComponent from "./dot/dateDotComponent";
    import TimeFromDotComponent from "./dot/timeFromDotComponent";
    import TimeToDotComponent from "./dot/timeToDotComponent";
    import CommentDotComponent from "./dot/commentDotComponent";
    import ItemsDotComponent from "./dot/itemsDotComponent";
    import Dot from "../models/Dot";

    export default {
        name: "dotComponent",
        props: {
            dot: Dot,
        },
        components: {
            ItemsDotComponent,
            CommentDotComponent,
            TimeToDotComponent,
            TimeFromDotComponent,
            DateDotComponent, ContactsDotComponent, MetroDotComponent, LocationDotComponent
        },

        computed: {
            ...mapGetters('order', [
                'getDotIndex',
                'totalDots',
            ]),
        },

        methods: {
            ...mapMutations('order', [
                'removeDot',
            ]),
        }
    }
</script>

<style scoped>

</style>