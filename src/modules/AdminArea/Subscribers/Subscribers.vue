<template>
    <div class="subscribers">
        <v-row no-gutters class="mb-3">
            <v-card flat outlined tile class="col-md-3">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon class="mdi-36px" tile>mdi-network</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="text-center">
                            <h1>{{statistics.active_companies}}</h1>
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-center">Companies (Active)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            <v-card flat outlined tile class="col-md-3">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon class="mdi-36px" tile>mdi-network-off</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="text-center">
                            <h1>{{statistics.inactive_companies}}</h1>
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-center">Companies (Inactive)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            <v-card flat outlined tile class="col-md-3">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon class="mdi-36px" tile>mdi-account-multiple-check-outline</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="text-center">
                            <h1>{{statistics.active_users}}</h1>
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-center">Users (Active)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
            <v-card flat outlined tile class="col-md-3">
                <v-list-item>
                    <v-list-item-avatar>
                        <v-icon class="mdi-36px" tile>mdi-account-multiple-remove-outline</v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="text-center">
                            <h1>{{statistics.inactive_users}}</h1>
                        </v-list-item-title>
                        <v-list-item-subtitle class="text-center">Users (Inactive)</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-card>
        </v-row>
        <div class="subscribers-wrapper">
            <div class="subscribers-content">
                <v-row no-gutters>
                    <div class="page-title">Subscribers</div>
                    <v-spacer></v-spacer>
                    <v-text-field append-icon="search" dense filled placeholder="Search for..." class="mx-2"></v-text-field>
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon class="mx-1" v-bind="attrs" v-on="on" @click="all">
                                <v-icon small>mdi-arrow-collapse-down</v-icon>
                            </v-btn>
                        </template>
                        <span>Show All</span>
                    </v-tooltip>
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon class="mx-1" v-bind="attrs" v-on="on" @click="none">
                                <v-icon small>mdi-arrow-collapse-up</v-icon>
                            </v-btn>
                        </template>
                        <span>Hide All</span>
                    </v-tooltip>
                </v-row>
                <div class="subscribers-body mt-2">
                    <v-row>
                        <v-col md="4">Company</v-col>
                        <v-col md="3">Owner</v-col>
                        <v-col>Members</v-col>
                    </v-row>
                    <template>
                        <v-expansion-panels focusable v-model="panel" multiple flat>
                            <v-expansion-panel v-for="item in items" :key="item.id">
                                <v-expansion-panel-header>
                                    <v-row no-gutters>
                                        <v-col md="4">
                                            <v-avatar tile>
                                                <v-img v-if="item.company_logo" :src="item.company_logo"></v-img>
                                                <v-icon v-else left>mdi-office-building</v-icon>
                                            </v-avatar>
                                            <v-badge v-if="item.deleted_at" color="deep-orange accent-4" small icon="mdi-exclamation">
                                                <span class="subtitle-1 mx-2">{{ item.name | ucwords}}</span>
                                            </v-badge>
                                            <span v-else class="subtitle-1 mx-2">{{ item.name | ucwords}}</span>
                                        </v-col>
                                        <v-col md="3">
                                            <Avatar :user="item.owner"></Avatar>
                                        </v-col>
                                        <v-col>
                                            <Avatars style="display:inline-block" :count="7" :items="item.members" :deep="false"></Avatars>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                    </v-row>
                                </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    <v-card flat class="mt-1 col-md-12">
                                        <v-card-text class="subtitle-2">
                                            <v-row>
                                                <v-img v-if="item.company_logo"></v-img>
                                                <v-banner single-line icon="mdi-office-building">
                                                    <p>
                                                        Name: {{item.name}}<br>
                                                        Date registered: {{ item.created_at | format }}<br>
                                                        <span v-if="item.deleted_at">Disabled on: {{ item.deleted_at | format }}</span>
                                                    </p>
                                                    <template v-slot:actions>
                                                        <v-btn color="primary" text v-if="item.deleted_at" @click="enable_disable_company(item)">
                                                            <v-icon left>mdi-lan-check</v-icon> Restore Company
                                                        </v-btn>
                                                        <v-btn color="warning" text v-else @click="enable_disable_company(item)">
                                                            <v-icon left>mdi-lan-disconnect</v-icon> Disabled Company
                                                        </v-btn>
                                                    </template>
                                                </v-banner>
                                            </v-row>
                                        </v-card-text>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                    <v-row class="mt-3" v-if="!noMoreData">
                        <v-spacer></v-spacer>
                        <v-btn text :loading="btnloading" @click="load_more_companies">Load more</v-btn>
                        <v-spacer></v-spacer>
                    </v-row>
                </div>
            </div> <!-- .subscribers-content -->
        </div> <!-- .subscribers-wrapper -->
    </div> <!-- .subscribers -->
</template>
<script src="./Subscribers.js"></script>
<style lang="scss" scoped src="./Subscribers.scss"></style>