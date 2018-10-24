<template>
    <div class="content teams">

        <div class="row">

            <breadcrumb :paths="paths" />

            <teams-dialog
                ref="add_dialog"
                title="Add New Member"
                :dialog.sync="add_dialog"
                @new-member-added="add_new_member"
            />
            <teams-dialog
                ref="edit_dialog"
                title="Edit Member"
                :dialog.sync="edit_dialog"
                :edit-item="edit_item"
                :is-edit-dialog="edit_dialog"
                @member-updated="update_member"
            />

            <delete-dialog
                :open-dialog.sync="delete_dialog"
                title="Delete Member"
                text-content="Are you sure you want to delete this member?"
                @delete="delete_member"
            />

            <div class="page__options">
                  <div class='newAdd__btn' @click="add_dialog = true">
                    <v-icon class="addIcon__btn">add_icon</v-icon>
                    <div class="addText__btn"><span>Add New</span></div>
                  </div>
            </div>

        </div>

        <div class="content__wrapper">
            <div class="row buzz__tables">
                <div class="buzz__tablesTwo">

                <v-toolbar flat class="table__toolbar">

                    <v-toolbar-title class="table__toolbar-title" padding="0">Members</v-toolbar-title>

                    <v-spacer></v-spacer>

                </v-toolbar>
                <custom-table
                        :headers="headers"
                        :items="members"
                        :has-checkbox="true"
                        :has-header-icon="true"
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

                        <td class="text-xs-center team__position">{{ item.item.job_title }}</td>
                        <td class="text-xs-center team__tasks">{{ tasks_text(item.item) }}</td>
                        <td class="text-xs-center team__projects">{{ projects_text(item.item) }}</td>

                        <td class="team__option">
                            <v-icon class="mr-2" @click="edit_member(item.item)">
                                edit
                            </v-icon>

                            <v-icon @click="open_delete_dialog(item.item)">
                                delete
                            </v-icon>
                        </td>
                    </template>

                </custom-table>

                </div>
            </div>
        </div>
        
    </div>
</template>
<style lang="scss" src="./Teams.scss"></style>
<script src="./Teams.js"></script>