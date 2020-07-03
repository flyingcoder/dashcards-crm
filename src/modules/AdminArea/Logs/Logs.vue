<template>
    <div class="api-logs">
        <div class="api-logs-wrapper">
            <div class="api-logs-content">
                <v-row no-gutters>
                    <div class="page-title">Logs</div>
                    <v-spacer></v-spacer>
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon class="mx-1" v-bind="attrs" v-on="on" @click="all">
                                <v-icon>mdi-arrow-collapse-down</v-icon>
                            </v-btn>
                        </template>
                        <span>Show All</span>
                    </v-tooltip>
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon class="mx-1" v-bind="attrs" v-on="on" @click="none">
                                <v-icon>mdi-arrow-collapse-up</v-icon>
                            </v-btn>
                        </template>
                        <span>Hide All</span>
                    </v-tooltip>
                </v-row>
                <div class="api-logs-body mt-2">
                    <template>
                        <v-expansion-panels focusable v-model="panel" multiple flat>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <div>
                                        <v-icon left>mdi-server</v-icon>
                                        <span class="subtitle-1">Server Logs</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card flat class="mt-1 col-md-12">
                                        <v-card-text class="subtitle-2">
                                            <v-row>
                                                <h2 class="subtitle-2">Telescope</h2> :
                                                <v-chip class="mx-2">
                                                    {{ statistics.telescope.count }}
                                                </v-chip>
                                                <v-spacer></v-spacer>
                                                <v-btn text outlined class="ml-1" :loading="telescope_btn" :disabled="telescope_btn" @click="clear_telescope" small>Prune</v-btn>
                                                <v-btn text outlined class="ml-1" target="_blank" :href="telescope_view_url" small>View Logs</v-btn>
                                            </v-row>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                        <v-card-text class="subtitle-2">
                                            <v-row>
                                                <h2 class="subtitle-2">App</h2>
                                                <v-spacer></v-spacer>
                                                <v-btn text outlined class="ml-1" target="_blank" :href="server_logs_view_url" small>View Logs</v-btn>
                                            </v-row>
                                        </v-card-text>
                                        <v-divider></v-divider>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>
                                    <div>
                                        <v-icon left>mdi-chart-timeline</v-icon>
                                        <span class="subtitle-1">Activity Logs</span>
                                    </div>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <VueTable :items="items" :headers="headers" :showRowActions="true" @load-more="load_more" :loading="loading" icon="mdi-chart-timeline" title="App Activities" :noMoreData="noMoreData" :showSelect="false">
                                        <template v-slot:row-slot="{ item }">
                                            <td>{{ item.id }}</td>
                                            <td>
                                                <v-tooltip left>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <span color="primary" dark v-bind="attrs" v-on="on">{{ item.description }}</span>
                                                    </template>
                                                    <span><pre>{{item.properties}}</pre></span>
                                                </v-tooltip>
                                            </td>
                                            <td>{{ item.subject_type }}</td>
                                            <td>
                                                <Avatar :user="item.causer_user" iconOnly></Avatar>
                                            </td>
                                            <td>{{ item.created_at }}</td>
                                            <!-- <Actions :item="item" :permissions="$_permissions.get('hq_members')" :hasEdit="can_edit(item)" :hasDelete="can_delete(item)" @delete="open_delete_dialog(item)" @edit="open_edit_dialog(item)" @view="navigate_to_view_profile(item)"></Actions> -->
                                        </template>
                                    </VueTable>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                </div>
            </div> <!-- .api-logs-content -->
        </div> <!-- .api-logs-wrapper -->
    </div> <!-- .api-logs -->
</template>
<script src="./Logs.js"></script>
<style lang="scss" scoped src="./Logs.scss"></style>