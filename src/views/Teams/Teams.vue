<template>
    <div class="content teams">

        <div class="row">
            <div class="breadcrumbs">
                <v-breadcrumbs>
                    <v-icon slot="divider">chevron_right</v-icon>

                    <v-breadcrumbs-item class="page__title"
                        v-for="path in paths"
                        :disabled="path.disabled"
                        :key="path.text"
                    >
                        <span @click="navigate_from_breadcrumb(path.router_name)">
                            {{ path.text }}
                        </span>
                    </v-breadcrumbs-item>
                </v-breadcrumbs>
            </div>

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
                is-edit-dialog
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
                    <i class="addIcon__btn material-icons">add_icon</i>
                    <span class="addText__btn">Add New</span>
                  </div>
            </div>

        </div>

        <div class="content__wrapper">
            <div class="row buzz__tables">

                <v-toolbar flat color="white">

                    <v-toolbar-title>Members</v-toolbar-title>

                    <v-divider
                        class="mx-2"
                        inset
                        vertical
                    ></v-divider>

                    <v-spacer></v-spacer>

                </v-toolbar>

                <custom-table
                        :headers="headers"
                        :items="members"
                        :has-checkbox="true"
                        :has-header-icon="true"
                >

                    <template slot="custom-item" slot-scope="item">
                        <td class="text-xs-left"> <!--TODO fill image with dynamic data from backend-->
                            <div class="member__image">
                                <img :src="require('@/assets/temp/user.png')" /> &nbsp;
                            </div>
                            <div class="member__name">
                                {{ item.item.first_name }}
                            </div>
                        </td>

                        <td class="text-xs-center">{{ item.item.job_title }}</td>
                        <td class="text-xs-center">{{ tasks_text(item.item) }}</td>
                        <td class="text-xs-center">{{ projects_text(item.item) }}</td>

                        <td>
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
</template>
<style lang="scss" src="./Teams.scss"></style>
<script src="./Teams.js"></script>