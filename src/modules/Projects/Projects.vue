<template>
    <div class="projects">
        <ProjectModal :dialog.sync="add_dialog" ref="add_dialog" title="Add New Project" @save="handleSaveProject"></ProjectModal>
        <ProjectModal :dialog.sync="edit_dialog" ref="edit_dialog" title="Edit Project" :is-edit-dialog="edit_dialog" :fields-to-edit="edit_item" @save="update_item('update_project', $event)"></ProjectModal>
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Project" text-content="Are you sure you want to delete this project? " @delete="delete_item('delete_project')" />
        <delete-dialog :open-dialog.sync="bulk_delete_dialog" title="Delete Projects" text-content="Are you sure you want to delete these projects? This can't be undone." @delete="bulk_delete('bulk_delete_project')" />
        <clients-dialog :dialog.sync="add_new_client_dialog" ref="add_client_dialog" dialogTitle="Add New Client" @save="save_new_client($event)" />
        <teams-dialog ref="add_member_dialog" title="Add New Member" :dialog.sync="add_new_member_dialog" @save="save_new_member($event)" @add-new-group="show_add_group_dialog" />
        <groups-dialog ref="add_group_dialog" title="Add New Group" @save="save_new_user_group" />
        <v-card class="grid-view" v-if="view === `grid`">   
            <div class="custom-table-header">
                <h3 class="custom-grid-title">
                    Projects
                </h3>
                <v-spacer></v-spacer>
                <table-header :noListButton="false" :noGridButton="false" @click="add_dialog = true" @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')" />
            </div>
            <v-progress-linear v-show="loading" :indeterminate="true"></v-progress-linear>
            <v-container class="pa-0">
                <v-row>
                    <v-col md="3" sm="4" xs="12" v-for="item in items" :key="item.id">
                        <v-card class="mx-auto project-card">
                            <v-card-title class="card-header">
                                <Avatar :user="item.client[0]" iconOnly>
                                    <template>
                                        <span :title='item.client[0].fullname' class="client-name">{{ item.client[0].fullname | truncate(15) }}</span>
                                    </template>
                                </Avatar>
                                <v-spacer></v-spacer>
                                <v-menu bottom offset-y>
                                    <template v-slot:activator="{ on }">
                                            <v-icon small fab icon v-on="on">settings</v-icon>
                                    </template>
                                    <v-list dense>
                                        <v-list-item v-if="can_edit(item)" @click="open_edit_dialog(item)">
                                            <v-list-item-title>
                                                <v-icon small left>edit</v-icon> Edit
                                            </v-list-item-title>
                                        </v-list-item>
                                        <v-list-item v-if="can_delete(item)" @click="open_delete_dialog(item)">
                                            <v-list-item-title>
                                                <v-icon small left>delete</v-icon>
                                                Delete
                                            </v-list-item-title>
                                        </v-list-item>
                                        <v-list-item @click="navigate_to_view_project(item.id)">
                                            <v-list-item-title>
                                                <v-icon small left>pageview</v-icon>
                                                View
                                            </v-list-item-title>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text class="text-center card-body">
                                <h4 class="project-title cursor-pointer mb-2" @click="navigate_to_view_project(item.id)">
                                    {{ item.title | ucwords }}
                                </h4>
                                <p class="caption">
                                    {{ item.started_at | format }} - {{ item.end_at | format }}
                                </p>
                                <v-row no-gutters>
                                    <v-col>
                                        <h6 class="text-center caption">Managers</h6>
                                        <Avatars :items="item.manager" :count="1"></Avatars>
                                    </v-col>
                                    <v-col>
                                        <h6 class="text-center caption">Members</h6>
                                        <Avatars :items="item.members" :count="1"></Avatars>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions class="card-footer">
                                <v-btn class="goto" text small @click="navigate_to_view_project(item.id)">
                                    Go to Project
                                </v-btn>
                                <v-spacer></v-spacer>
                                <v-tooltip left>
                                    <template v-slot:activator="{ on }">
                                            <v-icon icon @click="item.expand = !item.expand" v-on="on">{{ item.expand ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                    </template>
                                    <span>{{ item.expand ? 'Hide Details' : 'Show Details' }}</span>
                                </v-tooltip>
                            </v-card-actions>
                            <v-expand-transition>
                                <div v-show="item.expand" class="description-wrapper">
                                    <v-divider></v-divider>
                                    <v-card-text v-html="item.description"> </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn tile text v-if="noMoreData === true" disabled>NO MORE DATA</v-btn>
                <v-btn tile text :loading="btnloading" v-else @click="load_more">LOAD MORE</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </v-card>
        <VueTable v-else :items="items" :headers="headers" :showRowActions="true" @load-more="load_more" @delete-selected="open_bulk_delete_dialog($event)" icon="widgets" title="Projects" :key="componentKey" :noMoreData="noMoreData" :showSelect="false" :loading="loading">
            <template slot="header-toolbar">
                <table-header :noListButton="false" :noGridButton="false" @click="add_dialog = true" @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')" />
            </template>
            <template v-slot:row-slot="{ item }">
                <td class="clickable-td" @click="navigate_to_view_project(item.id)">
                    {{ item.title | ucwords }}
                </td>
                <td>
                    <Avatar :user="item.client[0]" iconOnly :count="1"></Avatar>
                </td>
                <td>{{ item.company_name }}</td>
                <td>
                    <Avatars deep :items="item.manager" :count="1"></Avatars>
                </td>
                <td>
                    <Avatars deep :items="item.members" :count="1"></Avatars>
                </td>
                <td>{{ item.started_at | format }}</td>
                <td v-if="item.end_at">{{ item.end_at | format }}</td>
                <td v-else>Ongoing</td>
                <td>{{ item.status | ucwords }}</td>
                <Actions :item="item" :hasEdit="can_edit(item)" :hasDelete="can_delete(item)" @delete="open_delete_dialog(item)" @edit="open_edit_dialog(item)" @view="navigate_to_view_project(item.id)"></Actions>
            </template>
            <template v-slot:empty-slot>
                <v-btn dark color="#3b589e" @click="add_dialog = true">Add Project</v-btn>
            </template>
        </VueTable>
    </div>
</template>
<script src="./Projects.js"></script>
<style lang="scss" scoped src="./Projects.scss"></style>