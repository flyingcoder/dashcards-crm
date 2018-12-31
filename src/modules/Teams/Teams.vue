<template>
    <div class="teams-page">

        <div class="row">

            <teams-dialog
                ref="add_dialog"
                title="Add New Member"
                :dialog.sync="add_dialog"
                @save="add_item('add_new_team', $event)"
            />

            <teams-dialog
                ref="edit_dialog"
                title="Edit Member"
                :dialog.sync="edit_dialog"
                :fields-to-edit="edit_item"
                :is-edit-dialog="edit_dialog"
                @save="update_item('update_team', $event)"
            />

            <delete-dialog
                :open-dialog.sync="delete_dialog"
                title="Delete Member"
                text-content="Are you sure you want to delete this member?"
                @delete="delete_item('delete_team', $event)"
            />

            <table-header :paths="paths" @click="add_dialog = true" />

        </div>

        <custom-table
                    :headers="headers"
                    :items="items"
                    :loading="loading"
                    :sort="sort"
                    :has-checkbox="true"
                    hide-actions
                    @items-selected="selected_ids = $event"
                    @sorted="changeSort"
                    class="custom__table"
                >
                <template slot="toolbar">
                    <v-layout row wrap justify-space-between align-center flat class="table__toolbar">
                        
                        <div class="table__toolbar-title">Members</div>

                        <div class="member__option">

                            <v-btn class="groups" dark small color="#3b589e" @click="go_to_groups_page">Groups</v-btn>
                
                            <v-btn fab flat small class="list__view">
                                <v-icon>list</v-icon>
                            </v-btn>
                            <v-btn fab flat small class="grid__view">
                                <v-icon>grid_on</v-icon>
                            </v-btn>
                            
                            <v-menu class="sort__dropdown"
                                transition="slide-y-transition"
                                :nudge-left="135"
                                :nudge-bottom="2"
                                flat
                                offset-y>
                                <v-btn fab flat small class="sort__option" slot="activator">
                                    <v-icon>more_horiz</v-icon>
                                </v-btn>
                                <v-list class="sort__list" flat>
                                    <v-list-tile class="sort__list_tile" v-for="(sortLists, index) in sortList" :key="index">
                                        <v-list-tile-title class="sort__list_item">{{ sortLists.title }}</v-list-tile-title>
                                    </v-list-tile>
                                </v-list>
                            </v-menu>
                        
                        </div>
                    </v-layout>
                </template>

                    <template slot="custom-item" slot-scope="item" class="template-table">
                        <td class="text-xs-left team__member"> <!--TODO fill image with dynamic data from backend-->
                            <div class="member__image">
                                <img :src="require('@/assets/temp/user.png')" /> &nbsp;
                            </div>
                            <div class="member__name">
                                {{ item.item.first_name }}
                            </div>
                        </td>

                        <td class="team__position">{{ item.item.job_title }}</td>
                        <td class="team__tasks">{{ tasks_text(item.item) }}</td>
                        <td class="team__projects">{{ projects_text(item.item) }}</td>

                        <td class="team__option">
                            <v-icon class="mr-2" @click="open_edit_dialog(item.item)">
                                edit
                            </v-icon>

                            <v-icon @click="open_delete_dialog(item.item)">
                                delete
                            </v-icon>
                        </td>
                    </template>

                    <template slot="table-actions">

                        <div class="actions-wrapper">

                            <div class="bulk-delete">
                                <v-btn color="indigo" dark outline :disabled="!show_delete_selected">
                                    Delete Selected
                                </v-btn>
                            </div>

                            <div class="rows-per-page-dropdown">
                                Rows per page: <v-select :items="rows_per_page_items" menu-props="auto" v-model="rows_per_page"></v-select>
                            </div>

                            <div class="pagination" v-show="should_show_pagination">
                                <div class="text-xs-center pt-2">
                                    <v-pagination :length="total_items" :total-visible="5" v-model="page"></v-pagination>
                                </div>
                            </div>

                        </div>
                    </template>

                </custom-table>
        
    </div>
</template>
<style lang="scss" src="./Teams.scss">
</style>
<script src="./Teams.js">
</script>
