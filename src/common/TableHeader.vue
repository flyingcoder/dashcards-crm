<template>
    <div class="table-header">
        <v-tooltip top v-if="!noButton">
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" fab class="add__btn ml-2" @click="$emit('click')">
                    add_circle_outline
                </v-icon>
            </template>
            <span>Create new</span>
        </v-tooltip>
        <v-tooltip top v-if="!noSortButton">
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" fab class="add__btn ml-2" @click="$emit('click-sort-by')">sort</v-icon>
            </template>
            <span>Sort</span>
        </v-tooltip>
        <v-tooltip top v-if="!noListButton">
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" fab class="add__btn ml-2" @click="$emit('click-list-view')">
                    mdi-view-sequential
                </v-icon>
            </template>
            <span>List view</span>
        </v-tooltip>
        <v-tooltip top v-if="!noGridButton">
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" fab class="add__btn ml-2" @click="$emit('click-grid-view')">
                    mdi-view-module
                </v-icon>
            </template>
            <span>Grid view</span>
        </v-tooltip>
        <slot name="form-btn" />
    </div>
</template>
<script>
    import Breadcrumb from '@/common/Breadcrumb.vue'

    export default {
        name: 'TableHeader',
        props: {
            // paths: { type: Array, default: [] },
            noButton: {type: Boolean, default: false},
            noListButton: {type: Boolean, default: true},
            noGridButton: {type: Boolean, default: true},
            noSortButton: {type: Boolean, default: true}
        },
        data() {
            return {
                fab: true
            }
        },
        components: {
            Breadcrumb
        }
    }
</script>
<style lang="scss" scoped>
    @import '~@/sass/variables';

    .table-header {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .add__btn.v-icon {
        color: $btnGray;

        &:hover {
            color: $textDark;
        }
    }

    @media only screen and (max-width: 480px) {
    }
</style>