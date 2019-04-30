<template>
    <div class="input-group input-group-sm mb-3 col-12">
        <div class="input-group-prepend">
            <span class="input-group-text form__prepend">
                <div class="fa fa-home inline-icon form__prepend__icon form__prepend__req"></div>
            </span>
        </div>
        <ul class="form__prepend__list">
            <li>
                <input v-model="address"
                       @input="searchAddress"
                       @focus="focusAddress"
                       @blur="blurAddress"
                       class="form-control"
                       placeholder="Начните вводить адрес">
                <div class="dropdown-menu"
                     :class="suggestionsVisible ? 'show' : ''"
                     style="left: 0; right: 0; top: 35px">
                    <a v-for="suggestion in suggestions"
                       @click.prevent="setAddress(suggestion)"
                       class="dropdown-item"
                       href="#">
                        {{ suggestion.unrestricted_value }}
                    </a>
                </div>
            </li>
            <li>
                <input v-model="apartment" class="form-control form__adress__office" placeholder="кв./офис">
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapMutations, mapGetters, mapState } from 'vuex'
    import axios from 'axios'
    import Dot from "../../models/Dot";
    import { debounce } from 'lodash'

    export default {
        name: "locationDotComponent",
        props: {
            dot: Dot,
        },

        data: () => ({
            suggestions: [],
            suggestionsVisible: false,
            isSelected: false,
            houseSet: false,
        }),

        computed: {
            ...mapState('base', [
                'allCities',
            ]),

            ...mapGetters('base', [
                'getCityLocations'
            ]),

            address: {
                get () { return this.dot.address },
                set (value) { this.updateDot({dot: this.dot, key: 'address', value}) }
            },
            apartment: {
                get () { return this.dot.apartment },
                set (value) { this.updateDot({dot: this.dot, key: 'apartment', value}) }
            },
            metro: {
                get () { return this.dot.metro },
                set (value) { this.updateDot({dot: this.dot, key: 'metro', value}) }
            },
        },

        methods: {
            ...mapMutations('order', [
                'updateDot',
            ]),

            searchAddress: debounce(function () {
                if (this.address) {
                    axios.post('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address', {
                        query: this.address,
                        locations: this.getCityLocations
                    }, {
                        headers: {
                            Authorization: 'Token 5726aba2abbc339d71d73f6b665ec80fc14910c7'
                        }
                    })
                        .then(({data}) => {
                            this.suggestions = data.suggestions
                        })
                }
            }, 300),

            setAddress(suggestion) {
                this.address = suggestion.unrestricted_value

                let city = this.allCities.find(city => city.name === suggestion.data.city || city.region === suggestion.data.region);

                if (city) {
                    this.updateDot({
                        dot: this.dot,
                        key: 'city',
                        value: city.id
                    })
                }

                this.isSelected = true;
                if (suggestion.data.house) {
                    this.houseSet = true;
                    this.getClosestMetro()
                }
            },

            focusAddress() {
                this.isSelected = false;
                this.houseSet = false;
                this.suggestionsVisible = true
            },

            blurAddress() {
                if (!this.isSelected && this.suggestions.length) {
                    this.setAddress(this.suggestions[0])
                }

                setTimeout(() => {
                    this.suggestionsVisible = false
                }, 100)
            },

            getClosestMetro() {
                axios.post('https://alt6.peshkariki.ru/ajax/orderForm/getClosestMetro', {
                    address_street: this.address,
                    city_id: 1
                }, {
                    headers: {
                        'Content-Type':'application/x-www-form-urlencoded; charset=utf-8'
                    },
                })
                    .then(({data}) => {
                        if (data.success) {
                            this.metro = data.metroId
                        }
                    })
            },
        }
    }
</script>

<style scoped>

</style>