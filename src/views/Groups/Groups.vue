<template>
    <div class="content groups">
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
                <v-btn slot="activator" color="primary" dark class="mb-2">New Group</v-btn>
                <v-card>
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12 sm12 md12>
                        <v-text-field v-model="editedGroup.group_name" label="Group Name"></v-text-field>
                        </v-flex>
                    </v-layout>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>
            </div>
        </div>
        <div class="content__wrapper">
            <div class="row buzz__tables">
                <v-toolbar flat color="white">
                    <v-toolbar-title>Groups</v-toolbar-title>
                    <v-divider
                        class="mx-2"
                        inset
                        vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                </v-toolbar>
                <v-data-table
                    :headers="headers"
                    :items="groups"
                    hide-actions
                    select-all
                    class="elevation-1"
                    >
                    <template slot="headers" slot-scope="props">
                        <tr>
                            <th>
                                <v-checkbox
                                    :input-value="props.all"
                                    :indeterminate="props.indeterminate"
                                    primary
                                    hide-details
                                    @click.native="toggleAll"
                                ></v-checkbox>
                            </th>
                            <th
                                v-for="header in props.headers"
                                :key="header.text"
                                >
                                {{ header.text }}
                            </th>
                            <th>
                                <img src="@/assets/icons/table/menu.svg" />
                            </th>
                        </tr>
                    </template>
                    <template slot="items" slot-scope="props">
                        <tr :active="props.selected" @click="props.selected = !props.selected">
                            <td>
                                <v-checkbox
                                    :input-value="props.selected"
                                    primary
                                    hide-details
                                ></v-checkbox>
                            </td>
                            <td class="text-xs-center">{{ props.item.id }}</td>
                            <td class="text-xs-left">{{ props.item.name }}</td>
                            <td class="text-xs-center">{{ props.item.team }}</td>
                            <td class="actions">
                                <div class="btn permissions___btn"
                                    @click="permissionsItem(props.item)">
                                    <div class="btn__img">
                                        <img src="@/assets/icons/groups/permissions.svg" />
                                    </div>
                                    <div class="btn__name">
                                        <span>Permissions</span>
                                    </div>
                                </div>
                                <div class="btn migrate__btn"
                                    @click="editItem(props.item)">
                                    <div class="btn__img">
                                        <img src="@/assets/icons/groups/migrate.svg" />
                                    </div>
                                    <div class="btn__name">
                                        <span>Migrate Members</span>
                                    </div>
                                </div>
                                <div class="btn members__btn"
                                    @click="editItem(props.item)">
                                    <div class="btn__img">
                                        <img src="@/assets/icons/groups/members.svg" />
                                    </div>
                                    <div class="btn__name">
                                        <span>Group Members</span>
                                    </div>
                                </div>
                                <div class="btn edit__btn"
                                    @click="editItem(props.item)">
                                    <div class="btn__img">
                                        <img src="@/assets/icons/groups/edit.svg" />
                                    </div>
                                    <div class="btn__name">
                                        <span>Edit Group</span>  
                                    </div>
                                </div>
                                <div class="btn delete__btn"
                                    @click="deleteItem(props.item)">
                                    <div class="btn__img">
                                        <img src="@/assets/icons/groups/delete.svg" />
                                    </div>
                                    <div class="btn__name">
                                        <span>Delete Group</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </template>
                    <template slot="no-data">
                        <v-alert :value="true" color="error" icon="warning">
                            Sorry, nothing to display here :(
                    </v-alert>
                    </template>
                </v-data-table>
                <div class="table__pagination text-xs-center">
                    <v-pagination
                    v-model="page"
                    :length="4"
                    circle
                    ></v-pagination>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" src="./Groups.scss"></style>
<script src="./Groups.js"></script>