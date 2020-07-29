<template>
    <v-card class="grid-view">
        <div class="custom-table-header">
            <h3 class="custom-grid-title">
                {{ title | ucwords }}
            </h3>
            <v-spacer />
            <slot name="header-toolbar" />
        </div>
        <v-row v-if="items.length > 0">
            <v-col md="3" sm="4" xs="12" v-for="item in items" :key="item.user_id">
                <v-card class="member-card">
                    <v-card-text>
                        <v-layout class="card-header align-center">
                            <v-icon small class="active-status" v-if="is_online(item)" title="Online" color="success">
                                mdi-check-circle
                            </v-icon>
                            <v-icon small class="active-status" v-else title="Offline">mdi-circle</v-icon>
                            <span>{{ item.job_title | ucwords }}</span>
                            <v-menu bottom>
                                <template v-slot:activator="{ on }">
                                    <v-icon fab class="settings" v-on="on">mdi-dots-horizontal-circle-outline</v-icon>
                                </template>
                                <v-list dense>
                                    <v-list-item v-if="can_edit(item)" @click="$emit('edit', item)">
                                        <v-list-item-subtitle>
                                            <v-icon left>mdi-circle-edit-outline</v-icon>
                                            Edit
                                        </v-list-item-subtitle>
                                    </v-list-item>
                                    <v-list-item v-if="can_delete(item)" @click="$emit('delete', item)">
                                        <v-list-item-subtitle>
                                            <v-icon left>mdi-delete-circle-outline</v-icon>
                                            Delete
                                        </v-list-item-subtitle>
                                    </v-list-item>
                                    <v-list-item v-if="not_self(item)" @click="chatMe(item)">
                                        <v-list-item-subtitle>
                                            <v-icon left>mdi-wechat</v-icon>
                                            Message
                                        </v-list-item-subtitle>
                                    </v-list-item>
                                </v-list>
                            </v-menu>
                        </v-layout>
                        <v-layout class="align-center">
                            <v-spacer />
                            <v-avatar size="80" class="cursor-pointer" color="#fff"
                                      @click="navigate_to_view_profile(item)"
                            >
                                <v-img :src="item.image_url" :alt="item.first_name" />
                            </v-avatar>
                            <v-spacer />
                        </v-layout>
                        <div class="text-center mb-3 cursor-pointer" @click="navigate_to_view_profile(item)">
                            <strong>{{
                                item.fullname | ucwords }}</strong>
                        </div>
                        <div class="card-actions">
                            <div class="fullwidth" v-if="item.is_client && item.company">
                                <v-icon small left>mdi-office-building</v-icon>
                                {{ item.company.name | ucwords }}
                            </div>
                            <div class="fullwidth">
                                <v-icon small left>mdi-email</v-icon>
                                {{ item.email }}
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions class="card-footer">
                        <div class="text-center" v-if="showTaskCount">
                            <h5>Tasks</h5>
                            <h4>{{ count(item.tasks) }}</h4>
                        </div>
                        <div class="text-center" v-if="showProjectCount">
                            <h5>Projects</h5>
                            <h4>{{ count(item.projects) }}</h4>
                        </div>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <Empty v-else :headline="emptyText" class="my-3" :icon="icon" />
        <v-card-actions class="py-2" v-if="hasFooter && items.length > 0">
            <v-spacer />
            <v-btn tile text v-if="noMoreData === true" disabled>NO MORE DATA</v-btn>
            <v-btn tile text :loading="btnloading" v-else @click="handleLoadMore">LOAD MORE</v-btn>
            <v-spacer />
        </v-card-actions>
    </v-card>
</template>
<style lang="scss" src="./VueGrid.scss"></style>
<script src="./VueGrid.js"></script>