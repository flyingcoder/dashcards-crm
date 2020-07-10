<template>
    <div class="dynamic-card">
        <delete-dialog :open-dialog.sync="delete_dialog" title="Delete Task" text-content="Are you sure you want to delete this task?" @delete="delete_task(item_to_delete)" />
        <dash-card :title="validate_title(box.title)" :dashboard="true">
            <template slot="actions">
                <v-flex xs4 class="actions text-xs-right">
                    {{
                    box.tasks.filter(i => i.status === 'completed').length +
                    '/' +
                    box.tasks.length
                    }}
                    <v-icon class="action" @click="$emit('edit', box)">edit</v-icon>
                    <v-icon class="action" @click="$emit('delete', box.id)">close</v-icon>
                </v-flex>
            </template>
            <div class="content" slot="content">
                <v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
                <div class="tasks-progress">
                    <div class="fill" :style="{ width: tasksProgress + '%' }"></div>
                </div>
                <div class="task-custom-table">
                    <v-layout class="header">
                        <v-flex xs6 class="task__tableHead">Task</v-flex>
                        <v-flex xs3 class="task__tableHead">Status</v-flex>
                    </v-layout>
                    <div class="body">
                        <v-layout align-center class="task__tableBody" v-for="(task, index) in box.tasks" :key="task.id">
                            <v-flex xs6 class="project__col">
                                <v-tooltip left>
                                    <template v-slot:activator="{ on }">
                                        <span dark v-on="on">{{ task.title | truncate(30) }}</span>
                                    </template>
                                    <span>{{ task.title }}</span>
                                </v-tooltip>
                            </v-flex>
                            <v-flex xs3 class="status__col">
                                <div v-if="task.status === 'completed'">
                                    <div class="status__completed">{{ task.status }}</div>
                                </div>
                                <div v-if="task.status === 'pending'">
                                    <div class="status__pending">{{ task.status }}</div>
                                </div>
                                <div v-if="task.status === 'behind'">
                                    <div class="status__behind">{{ task.status }}</div>
                                </div>
                                <div v-if="task.status === 'open'">
                                    <div class="status__open">{{ task.status }}</div>
                                </div>
                            </v-flex>
                            <v-tooltip left>
                                <template v-slot:activator="{ on }">
                                    <v-icon v-on="on" class="task-icon" @click="edit_task_clicked(task, index)">edit</v-icon>
                                </template>
                                <span>Edit Task</span>
                            </v-tooltip>
                            <v-tooltip left>
                                <template v-slot:activator="{ on }">
                                    <v-icon v-on="on" class="task-icon" @click="openDeleteDialog({ task_index: index, task_id: task.id })">close</v-icon>
                                </template>
                                <span>Remove Task</span>
                            </v-tooltip>
                        </v-layout>
                    </div>
                </div>
            </div>
            <v-btn slot="footer" rounded class="add__new_btn mt-2" color="#3b589e" dark @click="$emit('add-task', box.id)">
                ADD NEW
            </v-btn>
        </dash-card>
    </div>
</template>
<script src="./DynamicBox.js"></script>
<style lang="scss" scoped src="./DynamicBox.scss"></style>