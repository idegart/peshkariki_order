<template>
    <div class="input-group input-group-sm mb-3 col-lg-6 col-12">
        <div class="input-group-prepend">
                                    <span class="input-group-text form__prepend">
                                        <i class="fa fa-calendar-alt form__prepend__icon"></i>
                                    </span>
        </div>
        <select v-model="date" class="custom-select">
            <option v-for="date in allDates" :value="date.value">{{date.label}}</option>
        </select>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import Dot from "../../models/Dot";

    export default {
        name: "dateDotComponent",

        props: {
            dot: Dot,
        },

        computed: {
            ...mapState('base', [
                'allDates',
            ]),

            date: {
                get() {
                    return this.dot.date
                },
                set(value) {
                    this.updateDot({dot: this.dot, key: 'date', value})
                }
            }
        },

        methods: {
            ...mapMutations('order', [
                'updateDot',
            ]),
        }

    }
</script>

<style scoped>

</style>