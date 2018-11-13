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
                    :has-header-icon="true"
                    hide-actions
                    @items-selected="selected_ids = $event"
				    toolbar-title="Members"
                    @sorted="changeSort"
                    class="custom__table"
                >

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

                            <div class="pagination">
                                <div class="text-xs-center pt-2">
                                    <v-pagination :length="total_items" :total-visible="5" v-model="page"></v-pagination>
                                </div>
                            </div>

                        </div>
                    </template>

                </custom-table>
        
    </div>
</template>
<style lang="scss" src="./Teams.scss"></style>
<script src="./Teams.js"></script>