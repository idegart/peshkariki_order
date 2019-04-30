<template>
    <div class="input-group input-group-sm mb-3 col-lg-6 col-12">
        <div class="input-group-prepend">
            <span class="input-group-text form__prepend">
                <i class="fa fa-calendar-alt form__prepend__icon"></i>
            </span>
        </div>
        <select v-model="date" class="custom-select">
            <option v-for="date in availableDates" :value="date.value">{{date.label}}</option>
        </select>
    </div>
</template>

<script>
    import { mapState, mapMutations, mapGetters } from 'vuex'
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

            ...mapGetters('order', [
                'getDotIndex',
                'firstDot',
            ]),

            availableDates () {
                if (!this.getDotIndex(this.dot)) {
                    return  this.allDates;
                }

                return this.allDates.filter(date => date.value >= this.firstDot.date)
            },

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
        },

        mounted() {
            this.$store.subscribe(mutation => {
                if (this.getDotIndex(this.dot)) {
                    if (mutation.type === 'order/updateDot' && mutation.payload.key === 'date') {
                        if (this.getDotIndex(mutation.payload.dot) === 0) {
                            if (this.dot.date < this.firstDot.date) {
                                this.updateDot({dot: this.dot, key: 'date', value: this.firstDot.date})
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