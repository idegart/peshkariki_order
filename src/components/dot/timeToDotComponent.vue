<template>
    <div class="input-group input-group-sm mb-3 col-lg-3 col-12">
        <div class="input-group-prepend">
            <span class="input-group-text form__prepend">
                <b class="form__prepend__icon">до</b>
            </span>
        </div>
        <select v-model="timeTo" class="custom-select">
            <option v-for="time in availableTimes" :value="time.value">
                {{ time.label }}
            </option>
        </select>
    </div>
</template>

<script>
    import {mapMutations, mapState, mapGetters} from 'vuex'
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

            ...mapGetters('order', [
                'getDotIndex',
                'firstDot',
            ]),

            availableTimes () {
                let times = this.allTimes.filter(time => time.value > this.dot.timeFrom);

                if (this.getDotIndex(this.dot) === 0) {
                    return times;
                }

                if (this.dot.date !== this.firstDot.date) {
                    return  times;
                }

                return  times.filter(time => time.value >= this.firstDot.timeTo)
            },

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
        },

        mounted() {
            this.$store.subscribe(mutation => {
                if (this.getDotIndex(this.dot)) {
                    if (mutation.type === 'order/updateDot') {
                        if (this.getDotIndex(mutation.payload.dot) === 0 && this.dot.date === this.firstDot.date) {
                            if (this.timeTo < this.firstDot.timeTo) {
                                this.updateDot({dot: this.dot, key: 'timeTo', value: this.firstDot.timeTo})
                            }
                        }
                    }
                }
            })
        }
    }
</script>

<style scoped>

</style>