<template>
    <div class="row form__group">
        <div class="col-12">
            <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text form__prepend">
                        <div class="fa fa-comment-alt form__prepend__icon"></div>
                    </span>
                </div>
                <input v-model="comment" type="text" class="form-control" placeholder="Например: ООО Василек">
            </div>
        </div>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    import Dot from "../../models/Dot";

    export default {
        name: "commentDotComponent",
        props: {
            dot: Dot,
        },

        computed: {
            comment: {
                get () { return this.dot.comment },
                set (value) { this.updateDot({dot: this.dot, key: 'comment', value}) }
            }
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