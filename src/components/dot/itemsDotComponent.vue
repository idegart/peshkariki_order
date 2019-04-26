<template>
    <div>
        <div class="row">
            <h4 class="col-12 form__heading-secondary">Что везем?</h4>
        </div>

        <div>
            <item-dot-component v-for="(item, index) in dot.items" :key="index" :item="item" :dot="dot" />
        </div>

        <div v-if="maxOrderDotItems > dot.items.length" class="row">
            <button @click="addDotItem(dot)" class="btn btn-link col-12 form__delivery__add">Добавить груз</button>
        </div>
    </div>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import ItemDotComponent from "./itemDotComponent";
    import Dot from "../../models/Dot";

    export default {
        name: "itemsDotComponent",

        props: {
            dot: Dot,
        },

        components: {ItemDotComponent},

        computed: {
            ...mapState('base', [
                'maxOrderDotItems',
            ]),
        },

        methods: {
            ...mapMutations('order', [
                'addDotItem',
            ]),
        }

    }
</script>

<style scoped>

</style>