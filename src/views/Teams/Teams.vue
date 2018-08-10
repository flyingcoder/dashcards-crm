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
                <v-dialog v-model="dialog" max-width="500px">
                    <v-btn slot="activator" class="add__btn">New Member</v-btn>
                    <v-card>

                    <v-card-title>
                        <span class="headline">{{ formTitle }}</span>
                    </v-card-title>

                    <v-card-text>
                        <v-container grid-list-md>
                            <v-layout wrap>

                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="editedMember.first_name" label="First Name"></v-text-field>
                                </v-flex>

                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="editedMember.last_name" label="Last Name"></v-text-field>
                                </v-flex>

                                <v-flex xs12 sm6 md6>
                                    <v-select v-model="editedMember.group_name" :group="groups" label="Standard"></v-select>
                                </v-flex>

                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="editedMember.job_title" label="Job Title"></v-text-field>
                                </v-flex>

                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="editedMember.email" label="Email Address"></v-text-field>
                                </v-flex>

                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="editedMember.telephone" label="Contact No."></v-text-field>
                                </v-flex>

                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="editedMember.password" label="Password"></v-text-field>
                                </v-flex>

                                <v-flex xs12 sm6 md6>
                                    <v-text-field v-model="editedMember.check_pass" label="Confirm Password"></v-text-field>
                                </v-flex>

                            </v-layout>
                        </v-container>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="cancel__btn" flat @click.native="close">Cancel</v-btn>
                        <v-btn class="save__btn" flat @click.native="save">Save</v-btn>
                    </v-card-actions>
                    </v-card>
                </v-dialog>
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

                <div class="table__pagination text-xs-center">
                    <v-pagination
                    class="buzz__pagination"
                    v-model="page"
                    :length="4"
                    circle
                    ></v-pagination>
                </div>

            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./Teams.scss"></style>
<script src="./Teams.js"></script>