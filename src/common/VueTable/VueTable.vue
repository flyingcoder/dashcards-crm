<template>
    <v-card flat class="custom-table-wrapper">
        <v-data-table v-model="selected" :headers="headers" :items="items" :disable-sort="sortingEnable"
                      :show-select="showSelect" class="custom-table" v-bind="$attrs" shaped hide-default-footer
                      :items-per-page="itemsPerPage" :loading="loading"
        >
            <template v-slot:top v-if="showTopHeader">
                <div class="custom-table-header">
                    <h3 class="custom-table-title">
                        {{ title | ucwords }}
                    </h3>
                    <v-spacer />
                    <v-col sm="12" md="3" v-if="hasSearch">
                        <v-text-field width="100" v-model="search" append-icon="mdi-magnify" label="Search" dense
                                      hide-details solo
                        />
                    </v-col>
                    <slot name="header-toolbar" />
                </div>
                <slot name="header" />
                <v-divider />
            </template>
            <template slot="header.action">
                <v-icon>mdi-menu</v-icon>
            </template>
            <template v-slot:item="{ item }">
                <tr>
                    <td v-if="showSelect && !noRowDelete">
                        <v-checkbox v-model="selected" class="pa-0 ma-0" :value="item" hide-details />
                    </td>
                    <slot name="row-slot" :item="item" />
                </tr>
            </template>
            <template v-slot:loading>
                <v-skeleton-loader ref="skeleton" :boilerplate="false" type="table-tbody" class="mx-auto mt-3" />
            </template>
            <template v-slot:no-data>
                <Empty :icon="icon" :headline="emptyText">
                    <slot slot="extra" name="empty-slot" />
                </Empty>
            </template>
            <template v-slot:footer v-if="hasFooter">
                <v-divider />
                <v-row class="py-3 px-2" no-gutters>
                    <v-col>
                        <v-btn v-if="showSelect && !noRowDelete && selected.length > 0" dark color="red"
                               @click="$emit('delete-selected', selected)" v-show="selected.length > 0"
                        >
                            <v-icon left>mdi-delete-alert-outline</v-icon>
                            DELETE SELECTED
                        </v-btn>
                        <slot name="extra-bulk-buttons" />
                    </v-col>
                    <v-col class="d-flex align-content-center">
                        <v-spacer />
                        <v-btn tile text v-if="noMoreData === true" disabled>NO MORE DATA</v-btn>
                        <v-btn tile text :loading="btnloading" v-else @click="handleLoadMore">LOAD MORE</v-btn>
                        <v-spacer />
                    </v-col>
                    <v-col />
                </v-row>
            </template>
        </v-data-table>
    </v-card>
</template>
<script src="./VueTable.js"></script>
<style lang="scss" src="./VueTable.scss"></style>