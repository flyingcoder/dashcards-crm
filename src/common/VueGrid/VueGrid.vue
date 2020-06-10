<template>
    <v-card class="grid-view">
        <div class="grid-wrapper">            
            <v-toolbar flat>
                <v-toolbar-title class="custom-grid-title">
                    Members
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <slot name="header-toolbar"></slot>
            </v-toolbar>
            <v-row>
                <v-col md="3" sm="6" xs="12" v-for="item in items" :key="item.user_id">
                    <v-card class="member-card">
                        <v-card-text class="px-5">
                            <v-layout class="card-header align-center">
                                <v-icon class="active-status" v-if="is_online(item)" title="Online" color="success">mdi-check-circle</v-icon>
                                <v-icon class="active-status" v-else title="Offline">mdi-circle</v-icon>
                                <span>{{ item.job_title | ucwords }}</span>
                                <v-menu bottom>
                                    <template v-slot:activator="{ on }">
                                        <v-btn class="settings" icon v-on="on">
                                            <v-icon>settings</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-list dense>
                                        <v-list-item v-if="can_edit(item)" @click="$emit('edit', item)">
                                            <v-list-item-subtitle>
                                                <v-icon small>edit</v-icon> Edit
                                            </v-list-item-subtitle>
                                        </v-list-item>
                                        <v-list-item v-if="can_delete(item)" @click="$emit('delete', item)">
                                            <v-list-item-subtitle>
                                                <v-icon small>delete</v-icon>
                                                Delete
                                            </v-list-item-subtitle>
                                        </v-list-item>
                                        <v-list-item v-if="not_self(item)" @click="chatMe(item)">
                                            <v-list-item-subtitle>
                                                <v-icon small>mail</v-icon> Message
                                            </v-list-item-subtitle>
                                        </v-list-item>
                                    </v-list>
                                </v-menu>
                            </v-layout>
                            <v-layout class="align-center">
                                <v-spacer></v-spacer>
                                <v-avatar size="80" color="#fff">
                                    <v-img :src="item.image_url" :alt="item.first_name"></v-img>
                                </v-avatar>
                                <v-spacer></v-spacer>
                            </v-layout>
                            <div class="text-center mb-3"><strong>{{ item.fullname | ucwords }}</strong></div>
                            <div class="card-actions">
                                <div class="" @click="navigate_to_view_profile(item)">
                                    <v-icon>account_circle</v-icon>
                                    Profile
                                </div>
                                <div>
                                    <v-icon>mdi-email</v-icon>
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
            <v-card-actions class="py-2" v-if="hasFooter">
                <v-spacer></v-spacer>
                <v-btn tile text v-if="noMoreData === true" disabled>NO MORE DATA</v-btn>
                <v-btn tile text :loading="btnloading" v-else @click="handleLoadMore">LOAD MORE</v-btn>
                <v-spacer></v-spacer>
            </v-card-actions>
        </div>
    </v-card>
</template>
<style lang="scss" src="./VueGrid.scss"></style>
<script src="./VueGrid.js"></script>