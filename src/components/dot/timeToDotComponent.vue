<template>
    <div class="input-group input-group-sm mb-3 col-lg-3 col-12">
        <div class="input-group-prepend">
            <span class="input-group-text form__prepend">
                <b class="form__prepend__icon">до</b>
            </span>
        </div>
        <select v-model="timeTo" class="custom-select">
            <option v-for="time in allTimes" :value="time.value">
                {{ time.label }}
            </option>
        </select>
    </div>
</template>

<script>
    import {mapMutations, mapState} from 'vuex'
    import Dot from "../../models/Dot";

    export default {
        name: "timeToDotComponent",

        props: {
            dot: Dot,
        },

        computed: {
            ...mapState('base', [
                'allTimes',
            ]),

            timeTo: {
                get() {
                    return this.dot.timeTo;
                },
                set(value) {
                    this.updateDot({dot: this.dot, key: 'timeTo', value})
                }
            },
        },

        methods: {
            ...mapMutations('order', [
                'updateDot'
            ]),
        }
    }
</script>

<style scoped>

</style>