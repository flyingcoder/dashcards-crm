<template>
    <div class="table-header">
        <slot name="prepends" />
        <v-text-field dense v-if="hasSearch" outlined clearable clear-icon="mdi-close-circle-outline" solo flat
                      append-icon="search" v-model="keyword" hide-details
        />
        <v-tooltip top v-if="!noButton">
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" class="add__btn ml-2" @click="$emit('click')">
                    mdi-plus-circle-outline
                </v-icon>
            </template>
            <span>Create new</span>
        </v-tooltip>
        <slot name="center" />
        <v-tooltip top v-if="!noSortButton">
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" class="view-btn add__btn ml-2" @click="$emit('click-sort-by')">
                    sort
                </v-icon>
            </template>
            <span>Sort</span>
        </v-tooltip>
        <v-tooltip top v-if="!noListButton">
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" :color="activeView === 'list' ? 'primary' : ''"
                        class="view-btn add__btn ml-2" @click="$emit('click-list-view')"
                >
                    mdi-view-list
                </v-icon>
            </template>
            <span>List view</span>
        </v-tooltip>
        <v-tooltip top v-if="!noGridButton">
            <template v-slot:activator="{ on, attrs }">
                <v-icon v-bind="attrs" v-on="on" :color="activeView === 'grid' ? 'primary' : ''"
                        class="add__btn ml-2" @click="$emit('click-grid-view')"
                >
                    mdi-view-grid
                </v-icon>
            </template>
            <span>Grid view</span>
        </v-tooltip>
        <slot name="form-btn" />
    </div>
</template>
<script>

    export default {
        name: 'TableHeader',
        props: {
            // paths: { type: Array, default: [] },
            hasSearch: {type: Boolean, default: false},
            noButton: {type: Boolean, default: false},
            noListButton: {type: Boolean, default: true},
            noGridButton: {type: Boolean, default: true},
            noSortButton: {type: Boolean, default: true}
        },
        data() {
            return {
                fab: true,
                keyword: '',
                debounce: null
            }
        },
        watch: {
            keyword(val) {
                clearTimeout(this.debounce)
                this.debounce = setTimeout(() => {
                    this.$emit('search', val)
                }, 600)
            }
        },
        computed: {
            activeView() {
                return window.localStorage.getItem('bzk_prefer_view') || 'list'
            }
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

</style>