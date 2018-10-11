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
                        {{ path.text }}
                    </v-breadcrumbs-item>
                </v-breadcrumbs>
            </div>

            <div class="page__options">
                <!--<v-dialog v-model="dialog" max-width="500px">-->
                    <!--<v-btn slot="activator" class="add__btn">New Member</v-btn>-->
                    <!--<v-card>-->

                    <!--<v-card-title>-->
                        <!--<span class="headline">{{ formTitle }}</span>-->
                    <!--</v-card-title>-->

                    <!--<v-container grid-list-md>-->
                        <!--<v-layout wrap>     -->
      <!---->
                            <!--<custom-field-->
                                <!--className="newMember_field"-->
                                <!--v-model.trim="first_name.text"-->
                                <!--:valid="first_name.is_valid"-->
                                <!--input-type="text"-->
                                <!--placeholder="First Name"-->
                                <!--@blur="validate_field('first_name')"-->
                                <!--@focus="first_name.is_valid = true"-->
                            <!--&gt;</custom-field>-->

                            <!--<custom-field-->
                                <!--className="newMember_field"-->
                                <!--v-model.trim="last_name.text"-->
                                <!--:valid="last_name.is_valid"-->
                                <!--input-type="text"-->
                                <!--placeholder="Last Name"-->
                                <!--@blur="validate_field('last_name')"-->
                                <!--@focus="last_name.is_valid = true"-->
                            <!--&gt;</custom-field>-->

                            <!--<custom-field-->
                                <!--className="newMember_field"-->
                                <!--v-model.trim="group_name.text"-->
                                <!--:items="group_name.items"-->
                                <!--:valid="group_name.is_valid"-->
                                <!--input-type="select"-->
                                <!--placeholder="Groups"-->
                                <!--@blur="validate_field('group_name')"-->
                                <!--@focus="group_name.is_valid = true"-->
                            <!--&gt;</custom-field>-->

                            <!--<custom-field-->
                                <!--className="newMember_field"-->
                                <!--v-model.trim="job_title.text"-->
                                <!--:valid="job_title.is_valid"-->
                                <!--input-type="text"-->
                                <!--placeholder="Job Title"-->
                                <!--@blur="validate_field('job_title')"-->
                                <!--@focus="job_title.is_valid = true"-->
                            <!--&gt;</custom-field>-->

                            <!--<custom-field-->
                                <!--className="newMember_field"-->
                                <!--v-model.trim="email.text"-->
                                <!--:valid="email.is_valid"-->
                                <!--input-type="email"-->
                                <!--placeholder="Email"-->
                                <!--@blur="validate_field('email')"-->
                                <!--@focus="email.is_valid = true"-->
                            <!--&gt;</custom-field>-->

                            <!--<custom-field-->
                                <!--className="newMember_field"-->
                                <!--v-model.trim="telephone.text"-->
                                <!--:valid="telephone.is_valid"-->
                                <!--input-type="text"-->
                                <!--placeholder="Contact Number"-->
                                <!--@blur="validate_field('telephone')"-->
                                <!--@focus="telephone.is_valid = true"-->
                            <!--&gt;</custom-field>-->

                            <!--<custom-field-->
                                <!--className="newMember_field"-->
                                <!--v-model.trim="password.text"-->
                                <!--:valid="password.is_valid"-->
                                <!--:input-type="input_type"-->
                                <!--placeholder="Password"-->
                                <!--@blur="validate_field('password')"-->
                                <!--@focus="password.is_valid = true"-->
                            <!--&gt;</custom-field>-->

                            <!--<custom-field-->
                                <!--className="newMember_field"-->
                                <!--v-model.trim="repeat_password.text"-->
                                <!--:valid="repeat_password.is_valid"-->
                                <!--:input-type="input_type"-->
                                <!--placeholder="Repeat Password"-->
                                <!--@blur="validate_field('repeat_password')"-->
                                <!--@focus="repeat_password.is_valid = true"-->
                            <!--&gt;</custom-field>-->

                            <!--<v-card-actions>-->
                                <!--<v-spacer></v-spacer>-->
                                <!--<v-btn class="cancel__btn" flat @click.native="close">Cancel</v-btn>-->
                                <!--<v-btn class="save__btn" flat @click.native="save">Save</v-btn>-->
                            <!--</v-card-actions>-->

                        <!--</v-layout>     -->
                    <!--</v-container>-->

                    <!--</v-card>-->
                <!--</v-dialog>-->
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
                @member-updated="update_member"
            />

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

                    <v-btn @click="add_dialog = true">New Member</v-btn>

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
                        <td class="text-xs-center">{{ item.item.tasks.length == 0 ? 'no tasks assigned' : item.item.tasks.length  }}</td>
                        <td class="text-xs-center">{{ item.item.projects.length == 0 ? 'no projects assigned' : item.item.projects.length }}</td>

                        <td>
                            <v-icon class="mr-2" @click="editItem(item.item)">
                                edit
                            </v-icon>

                            <v-icon @click="deleteItem(item.item)">
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