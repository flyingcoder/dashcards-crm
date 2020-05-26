<template>
    <div class="users-table">
        <table-header :paths="paths" noButton />
        <v-card flat>
            <v-toolbar flat>
                <v-toolbar-title>Users and Roles</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn disabled icon>
                    <v-icon>mdi-settings</v-icon>
                </v-btn>
            </v-toolbar>
            <v-divider class="pa-0 ma-0"></v-divider>
            <v-progress-linear height="5" indeterminate v-if="loading"></v-progress-linear>
            <v-row no-gutters>
                <v-col md="3">
                    <v-list dense>
                        <!-- <v-subheader class="pa-2"> -->
                        <!-- <v-text-field v-model="search" placeholder="Search user..." @keyup="filterSearch" flat dense outlined append-icon="search" clearable></v-text-field> -->
                        <!-- </v-subheader> -->
                        <v-select v-model="filter" :value="filter" solo dense flat class="px-2" item-text="name" item-value="slug" outlined :items="roles" label="Filter Roles"></v-select>
                        <v-divider class="pa-0 ma-0"></v-divider>
                        <template v-for="(item, index) in filteredUsers">
                            <v-list-item :key="item.id" @click="setActiveUser(item)">
                                <v-list-item-avatar>
                                    <v-img :src="item.image_url"></v-img>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title>{{item.fullname}}</v-list-item-title>
                                    <v-list-item-subtitle v-html="item.job_title"></v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-icon v-if="item.deleted_at">
                                    <v-tooltip left >
                                            <template v-slot:activator="{ on } ">
                                                <v-icon small right v-on="on">mdi-account-lock</v-icon>
                                            </template>
                                            <span>Account Deleted</span>
                                        </v-tooltip>
                                </v-list-item-icon>
                            </v-list-item>
                        </template>
                    </v-list>
                </v-col>
                <v-divider vertical></v-divider>
                <v-col class="pa-2">
                    <v-card flat v-if="activeUser">
                        <v-card-text>
                            <v-row no-gutters class="mx-auto">
                                <v-spacer></v-spacer>
                                <v-avatar size="100" class="mb-3">
                                    <v-img :src="activeUser.image_url"></v-img>
                                </v-avatar>
                                <v-spacer></v-spacer>
                                <v-col md="12"></v-col>
                                <v-col md="4">Name :</v-col>
                                <v-col md="8" class="subtitle-1">{{activeUser.fullname}}</v-col>
                                <v-col md="4">Job Title :</v-col>
                                <v-col md="8" class="subtitle-1">{{activeUser.job_title}}</v-col>
                                <v-col md="4">Email :</v-col>
                                <v-col md="8" class="subtitle-1">{{activeUser.email}}</v-col>
                                <v-col md="4">Contact Number :</v-col>
                                <v-col md="8" class="subtitle-1">{{activeUser.telephone ? activeUser.telephone.formatInternational : 'none'}}</v-col>
                                <v-col md="4">Is company owner :</v-col>
                                <v-col md="8" class="subtitle-1">{{activeUser.is_company_owner ? 'Yes' : 'No'}}</v-col>
                                <v-col md="4">Is account disabled :</v-col>
                                <v-col md="8" class="subtitle-1" style="display:flex;justify-content: space-between;">
                                    <span>{{activeUser.deleted_at ? 'Yes' : 'No'}}</span>
                                    <v-btn right outlined v-if="can_update_user_roles" :loading="restoring" text @click="controlAccount()">
                                        <v-icon left small>{{activeUser.deleted_at ? 'mdi-account-convert' : 'mdi-account-lock'}}</v-icon>
                                        {{activeUser.deleted_at ? 'Restore Account?' : 'Disable Account?'}}
                                    </v-btn>
                                </v-col>
                                <v-col md="4">Roles :</v-col>
                                <v-col md="8">
                                    <v-alert v-if="!can_update_user_roles" dense outlined class="ma-0" type="error">
                                        You dont have permission to update this user roles!
                                    </v-alert>
                                    <v-autocomplete :disabled="!can_update_user_roles" append-icon="add" flat item-text="name" v-model="tobeAddedRoles" :items="selectRoles" outlined class="my-2" return-object chips small-chips multiple solo>
                                        <template v-slot:append-outer>
                                            <v-tooltip left>
                                                <template v-slot:activator="{ on } ">
                                                    <v-btn :loading="btnloading" v-on="on" icon large @click="updateRoles">
                                                        <v-icon>save</v-icon>
                                                    </v-btn>
                                                </template>
                                                <span>Update Roles</span>
                                            </v-tooltip>
                                        </template>
                                    </v-autocomplete>
                                </v-col>
                                <v-col md="4" class="mt-2">Permissions</v-col>
                                <v-col md="8" class="mt-2" v-if="!activeUser.deleted_at">
                                    <v-divider></v-divider>
                                    <v-simple-table fixed-header>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Create</th>
                                                    <th>Delete</th>
                                                    <th>Update</th>
                                                    <th>View</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(perm,index) in permissions">
                                                    <td>{{index}}</td>
                                                    <td>
                                                        <v-icon left color="success" v-if="perm.create">mdi-check-circle</v-icon>
                                                        <v-icon left color="red" v-else>mdi-close-circle</v-icon>
                                                    </td>
                                                    <td>
                                                        <v-icon left color="success" v-if="perm.delete">mdi-check-circle</v-icon>
                                                        <v-icon left color="red" v-else>mdi-close-circle</v-icon>
                                                    </td>
                                                    <td>
                                                        <v-icon left color="success" v-if="perm.update">mdi-check-circle</v-icon>
                                                        <v-icon left color="red" v-else>mdi-close-circle</v-icon>
                                                    </td>
                                                    <td>
                                                        <v-icon left color="success" v-if="perm.view">mdi-check-circle</v-icon>
                                                        <v-icon left color="red" v-else>mdi-close-circle</v-icon>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                    <v-divider></v-divider>
                                </v-col>
                                <v-col md="8" class="mt-2" v-else>
                                    <v-alert>No permission granted for disabled accounts.</v-alert>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <!-- <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text outlined>
                                <v-icon left small>save</v-icon> Update
                            </v-btn>
                        </v-card-actions> -->
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>
<script src="./Users.js"></script>
<style lang="scss" scoped src="./Users.scss"></style>