<template>
    <div class="tasks-tab">
        <v-progress-linear v-show="loading" :indeterminate="true"></v-progress-linear>
        <v-layout justify-between class="actions">
            <v-autocomplete class="col-md-3 mx-1" hide-details dense solo flat :items="searchResult" :loading="isFetching" v-model="searchbox" :search-input.sync="search" clearable cache-items item-text="title" placeholder="Start typing to Search" prepend-inner-icon="search" outlined>
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
                            <v-img v-if="item.assignee.length > 0" :src="item.assignee[0].image_url"></v-img>
                            <v-icon v-else>mdi-account</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title :inner-html.prop="item.title | truncate(25)"></v-list-item-title>
                            <v-list-item-subtitle :inner-html.prop="item.description | truncate(25)"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-autocomplete>
            <v-spacer></v-spacer>
            <v-btn color="#3b589e" dark fab small title="Add New Task" @click="open_new_task_dialog">
                <v-icon>add</v-icon>
            </v-btn>
        </v-layout>
        <div class="cards">
            <tasks-card :id="id" :page="page"></tasks-card>
            <preview-card v-if="active_task_id" :id="id" :activeId="active_task_id"></preview-card>
            <Empty headline="Add more task..." v-else>
                <template v-slot:extra>
                    <v-btn large dark color="#3b589e" @click="open_new_task_dialog">Add Task </v-btn>
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