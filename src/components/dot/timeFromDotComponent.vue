<template>
    <div class="input-group input-group-sm mb-3 col-lg-3 col-12">
        <div class="input-group-prepend">
            <span class="input-group-text form__prepend">
                <b class="form__prepend__icon">c</b>
            </span>
        </div>
        <select v-model="timeFrom" class="custom-select">
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
        name: "timeFromDotComponent",
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
                let times = this.allTimes.filter(time => time.value < this.dot.timeTo);

                if (this.getDotIndex(this.dot) === 0) {
                    return times;
                }

                if (this.dot.date !== this.firstDot.date) {
                    return  times;
                }

                return times.filter(time => time.value >= this.firstDot.timeFrom)
            },

            timeFrom: {
                get() {
                    return this.dot.timeFrom;
                },
                set(value) {
                    this.updateDot({dot: this.dot, key: 'timeFrom', value})
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
                            if (this.timeFrom < this.firstDot.timeFrom) {
                                this.updateDot({dot: this.dot, key: 'timeFrom', value: this.firstDot.timeFrom})
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