<template>
    <div class="dynamic-card">
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Task"
                       text-content="Are you sure you want to delete this task?" @delete="delete_task(item_to_delete)"
        />
        <dash-card :title="validate_title(box.title)" :dashboard="true">
            <template slot="actions">
                <v-flex xs4 class="actions text-xs-right">
                    {{ box.tasks.filter(i => i.status === 'completed').length + '/' + box.tasks.length }}
                    <v-icon class="action" @click="$emit('edit', box)">mdi-circle-edit-outline</v-icon>
                    <v-icon class="action" @click="$emit('delete', box.id)">mdi-close-circle-outline</v-icon>
                </v-flex>
            </template>
            <div class="content" slot="content">
                <v-progress-linear v-if="loading" :indeterminate="true"/>
                <div class="tasks-progress">
                    <div class="fill" :style="{ width: tasksProgress + '%' }"/>
                </div>
                <div class="task-custom-table">
                    <v-layout class="header">
                        <v-flex xs7 class="task__tableHead">Task</v-flex>
                        <v-flex xs3 class="task__tableHead">Status</v-flex>
                    </v-layout>
                    <div class="body">
                        <v-layout align-center class="task__tableBody" v-for="(task, index) in box.tasks"
                                  :key="task.id"
                        >
                            <v-flex xs7 class="project__col">
                                <v-tooltip left>
                                    <template v-slot:activator="{ on }">
                                        <span dark v-on="on">{{ task.title | truncate(30) }}</span>
                                    </template>
                                    <span>{{ task.title }}</span>
                                </v-tooltip>
                            </v-flex>
                            <v-flex xs3 class="status__col">
                                <v-chip label small class="text-left fullwidth" outlined>
                                    <v-icon small left color="success" v-if="task.status.toLowerCase() === 'completed'">
                                        mdi-clipboard-check-outline
                                    </v-icon>
                                    <v-icon small left color="warning"
                                            v-else-if="task.status.toLowerCase() === 'pending'"
                                    >
                                        mdi-clipboard-pulse-outline
                                    </v-icon>
                                    <v-icon small left color="danger"
                                            v-else-if="task.status.toLowerCase() === 'behind'"
                                    >
                                        mdi-clipboard-alert-outline
                                    </v-icon>
                                    <v-icon small left color="red"
                                            v-else-if="task.status.toLowerCase() === 'urgent'"
                                    >
                                        mdi-clipboard-alert-outline
                                    </v-icon>
                                    <v-icon small left color="info" v-else-if="task.status.toLowerCase() === 'open'">
                                        mdi-clipboard-text-play-outline
                                    </v-icon>
                                    <span class="caption text--grey">{{ task.status | ucwords }}</span>
                                </v-chip>
                            </v-flex>
                            <v-flex xs2>
                                <v-tooltip left>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on" class="task-icon" @click="edit_task_clicked(task, index)">
                                            mdi-circle-edit-outline
                                        </v-icon>
                                    </template>
                                    <span>Edit Task</span>
                                </v-tooltip>
                                <v-tooltip left>
                                    <template v-slot:activator="{ on }">
                                        <v-icon v-on="on" class="task-icon"
                                                @click="openDeleteDialog({ task_index: index, task_id: task.id })"
                                        >
                                            mdi-delete-circle-outline
                                        </v-icon>
                                    </template>
                                    <span>Remove Task</span>
                                </v-tooltip>
                            </v-flex>
                        </v-layout>
                    </div>
                </div>
            </div>
            <v-btn slot="footer" rounded class="add__new_btn mt-2" color="#3b589e" dark
                   @click="$emit('add-task', box.id)"
            >
                <v-icon left>mdi-plus-circle-outline</v-icon> ADD NEW
            </v-btn>
        </dash-card>
    </div>
</template>
<script src="./DynamicBox.js"></script>
<style lang="scss" scoped src="./DynamicBox.scss"></style>