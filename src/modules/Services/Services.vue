<template>
    <div class="services">
        <ServiceModal ref="add_dialog" @save="handleSaveCampaign" />
        <ServiceModal ref="edit_dialog" @save="handleUpdateCampaign" />
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Campaign"
                       text-content="Are you sure you want to delete this campaign? "
                       @delete="handleDeleteCampaign"
        />
        <!-- <delete-dialog :open-dialog.sync="bulk_delete_dialog" title="Delete Services" text-content="Are you sure you want to delete these services? This can't be undone." @delete="bulk_delete('bulk_delete_service')" /> -->
        <clients-dialog :dialog.sync="add_new_client_dialog" ref="add_client_dialog" dialogTitle="Add New Client"
                        @save="save_new_client($event)"
        />
        <teams-dialog ref="add_member_dialog" title="Add New Member" :dialog.sync="add_new_member_dialog"
                      @save="save_new_member($event)" @add-new-group="show_add_group_dialog"
        />
        <groups-dialog ref="add_group_dialog" title="Add New Group" @save="save_new_user_group" />
        <ServiceListDialog :dialog.sync="add_new_service_list_dialog" ref="add_new_service_list_dialog"
                           title="Add New Service(s)" @save="save_new_services_list($event)"
        />
        <v-card class="grid-view" v-if="view === `grid`">
            <div class="custom-table-header">
                <h3 class="custom-grid-title">Campaigns</h3>
                <v-spacer />
                <table-header :noListButton="false" :noButton="!can_add" :noGridButton="false" @click="open_add_dialog"
                              @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')"
                >
                    <template v-slot:prepends>
                        <v-menu bottom offset-y left>
                            <template v-slot:activator="{ on: menu, attrs }">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on: tooltip }">
                                        <v-btn class="ml-3 text-none" text dense
                                               v-bind="attrs"
                                               v-on="{ ...tooltip, ...menu }"
                                        >
                                            <div class="subtitle-2">{{ activeService.name | ucwords }}</div>
                                            <v-icon right>mdi-menu-swap</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Filter</span>
                                </v-tooltip>
                            </template>
                            <v-list dense max-height="400" style="overflow-y: auto;">
                                <v-list-item
                                        v-for="(item, index) in serviceList"
                                        :key="index"
                                        @click="filterByService(item)"
                                >
                                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </template>
                </table-header>
            </div>
            <v-progress-linear v-show="loading" :indeterminate="true" />
            <v-container class="pa-0">
                <v-row v-if="items.length > 0">
                    <v-col md="3" sm="4" xs="12" v-for="item in items" :key="item.id">
                        <v-card class="mx-auto service-card">
                            <v-img :src="item.props.icon" :height="150">
                                <v-card-title class="card-header">
                                    <Avatar :user="item.client[0]" iconOnly>
                                        <template>
                                            <span class="client-name subtitle-2">{{ item.title  | truncate(15) }}</span>
                                        </template>
                                    </Avatar>
                                    <v-spacer />
                                    <v-menu bottom left offset-y>
                                        <template v-slot:activator="{ on }">
                                            <v-icon v-on="on">mdi-dots-horizontal-circle-outline</v-icon>
                                        </template>
                                        <v-list dense>
                                            <v-list-item v-if="can_edit(item)" @click="open_edit_dialog(item)">
                                                <v-list-item-title>
                                                    <v-icon left>mdi-circle-edit-outline</v-icon>
                                                    Edit
                                                </v-list-item-title>
                                            </v-list-item>
                                            <v-list-item v-if="can_delete(item)" @click="open_delete_dialog(item)">
                                                <v-list-item-title>
                                                    <v-icon left>mdi-delete-circle-outline</v-icon>
                                                    Delete
                                                </v-list-item-title>
                                            </v-list-item>
                                            <v-list-item @click="navigate_to_view_service(item.id)">
                                                <v-list-item-title>
                                                    <v-icon left>mdi-eye-circle-outline</v-icon>
                                                    View
                                                </v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                    </v-menu>
                                </v-card-title>
                            </v-img>
                            <v-divider />
                            <v-card-text class="text-center card-body">
                                <div class="title cursor-pointer mb-2" @click="navigate_to_view_service(item.id)">
                                    {{ item.props.business_name | ucwords }}
                                </div>
                                <div class="subtitle-2">
                                    <p class="caption">
                                        {{ item.started_at | format }} - {{ item.end_at | format }}
                                    </p>
                                </div>
                                <v-row no-gutters>
                                    <v-col>
                                        <h6 class="text-center caption">Managers</h6>
                                        <Avatars deep :items="item.managers" :count="1" />
                                    </v-col>
                                    <v-col>
                                        <h6 class="text-center caption">Members</h6>
                                        <Avatars deep :items="item.members" :count="1" />
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            <v-divider />
                            <v-card-actions class="card-footer">
                                <v-btn class="goto" text @click="navigate_to_view_service(item.id)">
                                    Go to Campaign
                                </v-btn>
                                <v-spacer />
                                <v-tooltip left>
                                    <template v-slot:activator="{ on }">
                                        <v-btn icon @click="item.expand = !item.expand" v-on="on">
                                            <v-icon>{{ item.expand ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>{{ item.expand ? 'Hide Details' : 'Show Details' }}</span>
                                </v-tooltip>
                            </v-card-actions>
                            <v-expand-transition>
                                <div v-show="item.expand" class="description-wrapper">
                                    <v-divider />
                                    <v-card-text>
                                        <p>
                                            Location: {{ item.props.location || '' }}<br>
                                            Tasks: {{ item.tasks_count || 0 }}
                                        </p>
                                        <p v-html="item.description" />
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-col>
                </v-row>
                <Empty icon="mdi-alpha-c-box-outline" v-else headline="No campaign yet" />
            </v-container>
            <v-card-actions>
                <v-spacer />
                <v-btn tile text v-if="noMoreData === true" disabled>NO MORE DATA</v-btn>
                <v-btn tile text :loading="btnloading" v-else @click="load_more">LOAD MORE</v-btn>
                <v-spacer />
            </v-card-actions>
        </v-card>
        <VueTable v-else :items="items" :headers="headers" :showRowActions="true" @load-more="load_more"
                  @delete-selected="open_bulk_delete_dialog($event)" icon="mdi-alpha-c-box-outline" title="Campaigns"
                  :key="componentKey" :noMoreData="noMoreData" emptyText="No campaign yet" :showSelect="false"
                  :loading="loading"
        >
            <template slot="header-toolbar">
                <v-col cols="3" />
                <v-spacer />
                <table-header :noListButton="false" :noButton="!can_add" :noGridButton="false" @click="open_add_dialog"
                              @click-list-view="setPreferredView('list')" @click-grid-view="setPreferredView('grid')"
                >
                    <template v-slot:prepends>
                        <v-menu bottom offset-y left>
                            <template v-slot:activator="{ on: menu, attrs }">
                                <v-tooltip top>
                                    <template v-slot:activator="{ on: tooltip }">
                                        <v-btn class="ml-3 text-none" text dense
                                               v-bind="attrs"
                                               v-on="{ ...tooltip, ...menu }"
                                        >
                                            <div class="subtitle-2">{{ activeService.name |ucwords }}</div>
                                            <v-icon right>mdi-menu-swap</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Filter</span>
                                </v-tooltip>
                            </template>
                            <v-list dense max-height="400" style="overflow-y: auto;">
                                <v-list-item
                                        v-for="(item, index) in serviceList"
                                        :key="index"
                                        @click="filterByService(item)"
                                >
                                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </template>
                </table-header>
            </template>
            <template v-slot:row-slot="{ item }">
                <td>
                    <v-avatar :size="40">
                        <v-img v-if="item.service.icon" :src="item.service.icon" />
                        <v-icon v-else large>mdi-alpha-s-circle-outline</v-icon>
                    </v-avatar>
                </td>
                <td class="clickable-td" @click="navigate_to_view_service(item.id)">
                    {{ item.title | ucwords }}
                </td>
                <td>
                    <Avatar v-if="item.client.length" :user="item.client[0]" iconOnly />
                </td>
                <td>{{ item.props.business_name | ucwords }}</td>
                <td>{{ item.props.location || '' | ucwords }}</td>
                <td>
                    <Avatars :items="item.managers" :count="1" />
                </td>
                <td>
                    <Avatars :items="item.members" :count="1" />
                </td>
                <td>{{ item.started_at | format }}</td>
                <td v-if="item.end_at">{{ item.end_at | format }}</td>
                <td v-else>Ongoing</td>
                <Actions :item="item" :permissions="$_permissions.get('projects')" :hasEdit="can_edit(item)"
                         :hasDelete="can_delete(item)"
                         @delete="open_delete_dialog(item)" @edit="open_edit_dialog(item)"
                         @view="navigate_to_view_service(item.id)"
                />
            </template>
            <template v-slot:empty-slot>
                <v-btn dark color="#3b589e" v-if="can_add" @click="open_add_dialog">Add Campaign</v-btn>
            </template>
        </VueTable>
    </div>
</template>
<script src="./Services.js"></script>
<style lang="scss" scoped src="./Services.scss"></style>