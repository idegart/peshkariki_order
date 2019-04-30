<template>
    <div v-if="cityMetro.length" class="input-group input-group-sm mb-3 col-12">
        <div class="input-group-prepend">
            <span class="input-group-text form__prepend">
                <i class="fa fa-subway inline-icon form__prepend__icon"></i>
            </span>
        </div>
        <select v-model="metro" class="custom-select">
            <option v-for="(metro, index) in cityMetro"
                    :key="index"
                    :value="metro.id">
                {{ metro.name }}
            </option>
        </select>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'
    import Dot from "../../models/Dot";
    export default {
        name: "metroDotComponent",
        props: {
            dot: Dot
        },

        computed: {
            ...mapGetters('base', [
                'getCityMetro',
            ]),

            metro: {
                get () { return this.dot.metro },
                set (value) { this.updateDot({dot: this.dot, key: 'metro', value}) }
            },

            cityMetro () {
                return this.getCityMetro(this.dot.city)
            },
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