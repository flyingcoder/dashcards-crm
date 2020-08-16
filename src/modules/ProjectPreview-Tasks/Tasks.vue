<template>
    <div class="tasks-tab">
        <v-progress-linear v-show="loading" :indeterminate="true" />

        <div class="cards">
            <!--            <tasks-card :id="id" :page="page" />-->
            <v-card flat>
                <v-row no-gutters justify-between class="actions">
                    <v-autocomplete class="col-md-6" hide-details dense solo flat :items="searchResult"
                                    :loading="isFetching" v-model="searchbox" :search-input.sync="search" clearable
                                    cache-items item-text="title" placeholder="Start typing to Search"
                                    prepend-inner-icon="search" outlined
                    >
                        <template v-slot:no-data>
                            <v-list-item>
                                <v-list-item-title>
                                    Search for <strong>Task</strong>
                                </v-list-item-title>
                            </v-list-item>
                        </template>
                        <template v-slot:item="{ item }">
                            <v-list-item @click="showTask(item)">
                                <v-list-item-avatar>
                                    <v-img v-if="item.assigned.length > 0" :src="item.assigned[0].image_url" />
                                    <v-icon v-else>mdi-account</v-icon>
                                </v-list-item-avatar>
                                <v-list-item-content>
                                    <v-list-item-title :inner-html.prop="item.title | truncate(25)" />
                                    <v-list-item-subtitle :inner-html.prop="item.description | truncate(25)" />
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-autocomplete>
                    <!--<v-autocomplete class="col-md-5" hide-details dense solo flat :items="searchResult"
                                    :loading="isFetching" v-model="filterMilestone" :search-input.sync="search" clearable
                                    cache-items item-text="title" placeholder="Start typing to Search"
                                    prepend-inner-icon="search" outlined
                    >
                        <template v-slot:no-data>
                            <v-list-item>
                                <v-list-item-title>
                                    No Milestone Yet
                                </v-list-item-title>
                            </v-list-item>
                        </template>
                        <template v-slot:item="{ item }">
                            <v-list-item @click="showTask(item)">
                                <v-list-item-content>
                                    <v-list-item-title :inner-html.prop="item.title | truncate(25)" />
                                    <v-list-item-subtitle :inner-html.prop="item.description | truncate(25)" />
                                </v-list-item-content>
                            </v-list-item>
                        </template>
                    </v-autocomplete>-->
                    <v-spacer />
                    <v-tooltip left>
                        <template v-slot:activator="{ on, attrs }">
                            <v-icon @click="open_new_task_dialog" v-bind="attrs" v-on="on">
                                mdi-plus-circle-outline
                            </v-icon>
                        </template>
                        <span>New Task</span>
                    </v-tooltip>
                </v-row>
                <v-card-text>
                    <tasks-content hasLoadMoreBtn :id="id" />
                </v-card-text>
            </v-card>
            <preview-card v-show="active_task_id" :id="id" :active-id="active_task_id" />
            <Empty headline="Add more task..." v-if="!active_task_id">
                <template v-slot:extra>
                    <v-btn large dark color="#3b589e" @click="open_new_task_dialog">
                        <v-icon left> mdi-plus-circle-outline</v-icon>
                        New Task
                    </v-btn>
                </template>
            </Empty>
        </div>
    </div>
</template>
<script src="./Tasks.js"></script>
<style lang="scss" scoped src="./Tasks.scss"></style>
<style type="text/css">
    .dash__card .card__content {
        min-height: 600px;
    }
</style>