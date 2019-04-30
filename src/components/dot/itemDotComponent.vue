<template>
    <div class="row  form__group">
        <div class="row col-12 pr-0">


            <name-item-dot-component :dot="dot" :item="item" />


            <div v-if="dot.items.length > 1" class="col-1 pr-0 mb-3 d-flex justify-content-end form__delivery__delete">
                <button @click="removeDotItem({dot, item})" class="btn btn-primary btn-circle ">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>


        <count-item-dot-component :dot="dot" :item="item" />

        <weight-item-dot-component :dot="dot" :item="item" />

        <price-item-dot-component :dot="dot" :item="item" />

    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import NameItemDotComponent from "./item/nameItemDotComponent";
    import CountItemDotComponent from "./item/countItemDotComponent";
    import WeightItemDotComponent from "./item/weightItemDotComponent";
    import PriceItemDotComponent from "./item/priceItemDotComponent";
    import Dot from "../../models/Dot";
    import Item from "../../models/Item";
    export default {
        name: "itemDotComponent",
        props: {
            dot: Dot,
            item: Item,
        },
        components: {PriceItemDotComponent, WeightItemDotComponent, CountItemDotComponent, NameItemDotComponent},

        methods: {
            ...mapMutations('order', [
                'removeDotItem',
            ]),
        }
    }
</script>

<style scoped>

</style>