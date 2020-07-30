<template>
    <div class="tasks-content">
        <template v-if="hasTabs">
            <v-tabs class="task__tabs" height="45" centered grow hide-slider v-model="active_tab">
                <v-tab v-for="tab in tabs" :key="tab.name" :href="`#${tab.name}`">
                    <span>{{ tab.name }}</span>
                </v-tab>
            </v-tabs>
            <v-tabs-items v-model="active_tab">
                <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.name">
                    <v-card flat>
                        <tasks-tab :tab="active_tab" :showProject="showProject" v-if="active_tab === tab.name" />
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </template>
        <template v-else>
            <tasks-tab tab="My Tasks" :showProject="showProject" />
        </template>
        <v-card-actions v-if="hasLoadMoreBtn">
            <v-spacer />
            <v-btn text class="view__more_btn" :disabled="!has_see_more_url" @click="loadMore">
                VIEW MORE
            </v-btn>
            <v-spacer />
        </v-card-actions>
        <TaskDialog ref="add_task_dialog" dialog-title="Add Task" :id="project_id" @save="create_new_task($event)"
                    @close="closeAddDialog()"
        />
        <TaskDialog ref="edit_task_dialog" dialog-title="Edit Task" :id="project_id" @save="edit_task($event)"
                    @close="closeEditDialog()"
        />
        <DeleteDialog :open-dialog.sync="delete_task_dialog" title="Delete Task"
                      text-content="Are you sure you want to delete this task?" @delete="delete_task()"
        />
        <TaskViewDialog ref="view_task_dialog" :task="task" @close-task-preview="closeViewDialog" />
        <ConfirmDialog :open-dialog.sync="confirm_mark_as_complete_dialog" title="Confirmation required!"
                       confirm-button-text="Yes" @confirm="confirm_mark_as_complete_task()"
        >
            <template v-slot:content>
                <v-row no-gutters>
                    <v-col md="12" class="title">
                        <v-banner two-line outlined tile>
                            <v-avatar slot="icon" color="deep-purple accent-4" size="40">
                                <v-icon icon="mdi-lock" color="white">
                                    mdi-clipboard-check-outline
                                </v-icon>
                            </v-avatar>
                            <p>Mark task as completed?</p>
                            <p class="body-2">
                                <v-checkbox v-model="notify_task_complete" label="Notify project|campaign members" />
                            </p>
                        </v-banner>
                    </v-col>
                </v-row>
            </template>
        </ConfirmDialog>
        <ConfirmDialog :open-dialog.sync="confirm_mark_as_urgent_dialog" title="Confirmation required!"
                       confirm-button-text="Yes" @confirm="confirm_mark_as_urgent_task()"
        >
            <template v-slot:content>
                <v-row no-gutters>
                    <v-col md="12" class="title">
                        <v-banner two-line outlined tile>
                            <v-avatar slot="icon" color="deep-purple accent-4" size="40">
                                <v-icon icon="mdi-lock" color="white">
                                    mdi-clipboard-alert-outline
                                </v-icon>
                            </v-avatar>
                            <p v-if="task && task.status !== 'urgent'">Mark task as urgent?</p>
                            <p v-else>Mark task as not urgent?</p>
                            <p class="body-2">Setting task to urgent will notify assigned user(s)</p>
                        </v-banner>
                    </v-col>
                </v-row>
            </template>
        </ConfirmDialog>
    </div>
</template>
<script>
    import {mapGetters, mapMutations} from 'vuex'
    import {list_functionality} from '@/services/list-functionality/list-functionality'
    import apiTo from '@/modules/ProjectPreview-Tasks/api'
    //components
    import TasksTab from './TasksTab.vue'
    import TaskDialog from '@/modules/ProjectPreview-Tasks/components/TaskDialog/TaskDialog.vue'
    import DeleteDialog from '@/common/DeleteDialog.vue'
    import ConfirmDialog from '@/common/ConfirmDialog.vue'
    import TaskViewDialog from '@/modules/ProjectPreview-Tasks/components/TaskViewDialog/TaskViewDialog.vue'

    export default {
        name: 'TasksContent',
        mixins: [list_functionality],
        components: {
            TasksTab,
            TaskDialog,
            DeleteDialog,
            ConfirmDialog,
            TaskViewDialog
        },

        props: {
            id: {type: [Number, String], default: null},
            hasLoadMoreBtn: {type: Boolean, default: false},
            hasTabs: {type: Boolean, default: true},
            showProject: {type: Boolean, default: false},
        },

        computed: {
            ...mapGetters(['user']),
            ...mapGetters('taskCards', ['see_more_url']),
            tabs() {
                return [
                    {name: 'My Tasks', help: 'Tasks that are assigned to you '},
                    {name: 'All Tasks', help: 'Tasks for all members in this project'}
                ]
            },
            active_task_id: {
                get: function () {
                    if (this.task) return this.task.id
                    return null
                },
                set: function (val) {
                    return val
                }
            },
            logged_user() {
                return this.$store.getters.user
            },
            project_id: {
                get: function () {
                    return this.$store.getters['taskCards/id']
                },
                set: function (val) {
                    return val
                }
            },
            has_see_more_url() {
                return !!this.see_more_url
            }
        },

        data: () => ({
            active_tab: 'My Tasks',
            tasks_own: [],
            all_tasks: [],
            selected_tab: 'My Tasks',
            task: null,
            add_task_dialog: false,
            edit_task_dialog: false,
            confirm_mark_as_complete_dialog: false,
            confirm_mark_as_urgent_dialog: false,
            notify_task_complete: false,
            delete_task_dialog: false,
        }),
        watch: {
            id(val) {
                this.set_id(val)
            }
        },
        created() {
            this.$event.$on('task-row-clicked', task => this.set_and_open_side_preview(task))
            this.$event.$on('task-card-tab', tab => (this.selected_tab = tab))
            this.$event.$on('task-mark-as-complete', task => this.set_and_mark_complete_task(task))
            this.$event.$on('task-mark-as-urgent', task => this.set_and_mark_urgent_task(task))
            this.$event.$on('task-add', () => this.set_and_add_task())
            this.$event.$on('task-edit', task => this.set_and_edit_task(task))
            this.$event.$on('task-delete', task => this.set_and_delete_task(task))
            this.$event.$on('task-view', task => this.set_and_view_task(task))
        },
        methods: {
            ...mapMutations('taskCards', ['set_id', 'add_task', 'del_task', 'replace_task']),
            loadMore() {
                this.see_more()
            },

            create_new_task(payload) {
                apiTo.create_new_task(payload)
                    .then(({data}) => {
                        this.add_task(data)
                        this.$refs.add_task_dialog.clear_and_close()
                        this.$event.$emit('open_snackbar', 'New Task added successfully')
                    })
                    .finally(() => {
                        this.$event.$emit('btnloading_off', false)
                    })
            },

            edit_task(payload) {
                apiTo.edit_task(this.task.id, payload).then(({data}) => {
                    //this.update_task(data, this.task.id, 'all_tasks')
                    //this.update_task(data, this.task.id, 'tasks_own')
                    this.$refs.edit_task_dialog.$refs.dialog.clear_and_close()
                    this.$event.$emit('open_snackbar', 'Task updated successfully')
                    this.$event.$emit('task-is-updated', data)
                })
                    .finally(() => {
                        this.$event.$emit('btnloading_off', false)
                    })
            },

            delete_task() {
                apiTo.delete_task(this.task.id)
                    .then(() => {
                        this.remove_task(this.task)
                    })
                    .finally(() => {
                        this.$event.$emit('btnloading_off', false)
                    })
            },

            update_task(new_task, id, target) {
                this.task = new_task
                if (target === 'all_tasks') {
                    let indexFound = this.all_tasks.findIndex(task => task.id === id)
                    if (~indexFound) {
                        this.all_tasks.splice(indexFound, 1, new_task)
                    }
                } else {
                    let indexFound = this.tasks_own.findIndex(task => task.id === id)
                    if (~indexFound) {
                        this.tasks_own.splice(indexFound, 1, new_task)
                    }
                }
            },

            remove_task(task) {
                this.del_task(task)
                this.delete_dialog = false
                this.$event.$emit('open_snackbar', 'Task deleted successfully')
                this.set_active_task_after_delete()
            },

            set_active_task_after_delete() {
                if (this.selected_tab === 'My Tasks') {
                    if (this.tasks_own.length) this.task = this.tasks_own[0]
                    else this.task = null
                } else {
                    if (this.all_tasks.length) this.task = this.all_tasks[0]
                    else this.task = null
                }
            },

            handle_dropdown_action(action) {
                const method = `open_${action}_task_dialog`
                this[method]()
            },

            open_add_task_dialog() {
                this.$refs.add_task_dialog.open_dialog()
            },

            open_edit_task_dialog() {
                if (this.$refs.edit_task_dialog) {
                    this.$refs.edit_task_dialog.setTask(this.task)
                    this.$refs.edit_task_dialog.open_dialog()
                }
            },

            closeEditDialog() {
                this.$refs.edit_task_dialog.$refs.dialog.clear_and_close()
            },

            closeAddDialog() {
                this.$refs.add_task_dialog.$refs.dialog.clear_and_close()
            },

            closeViewDialog() {
                this.$refs.view_task_dialog.$refs.dialog.clear_and_close()
            },

            open_delete_task_dialog() {
                this.delete_task_dialog = true
            },
            open_mark_as_urgent_task_dialog() {
                this.confirm_mark_as_urgent_dialog = true
            },
            open_mark_as_complete_task_dialog() {
                this.confirm_mark_as_complete_dialog = true
            },
            confirm_mark_as_urgent_task() {
                let payload = {status: 'urgent'};
                apiTo.mark_as_urgent_task(this.task.id, payload)
                    .then(({data}) => {
                        this.confirm_mark_as_urgent_dialog = false
                        this.$event.$emit('open_snackbar', 'Task is now urgent')
                        //this.update_task(data, this.task.id, 'all_tasks')
                        //this.update_task(data, this.task.id, 'tasks_own')
                        this.replace_task(data)
                        this.$event.$emit('btnloading_off', false)
                        this.$event.$emit('task-is-updated', data)
                    })
            },
            confirm_mark_as_complete_task() {
                let payload = {status: 'completed', notify_complete: this.notifytaskcomplete};
                apiTo.mark_as_complete_task(this.task.id, payload)
                    .then(({data}) => {
                        this.confirm_mark_as_complete_dialog = false
                        this.$event.$emit('open_snackbar', 'Task is completed')
                        //this.update_task(data, this.task.id, 'all_tasks')
                        //this.update_task(data, this.task.id, 'tasks_own')
                        this.replace_task(data)
                        this.$event.$emit('btnloading_off', false)
                        this.$event.$emit('task-is-updated', data)
                    })
            },

            set_and_delete_task(task) {
                this.task = task
                this.open_delete_task_dialog()
            },
            set_and_edit_task(task) {
                this.task = task
                this.open_edit_task_dialog()
            },
            set_and_mark_complete_task(task) {
                this.task = task
                this.open_mark_as_complete_task_dialog()
            },
            set_and_mark_urgent_task(task) {
                this.task = task
                this.open_mark_as_urgent_task_dialog()
            },
            set_and_view_task(task) {
                this.task = task
                this.$refs.view_task_dialog.open_dialog()
            },
            set_and_add_task() {
                this.open_add_task_dialog()
            },
            set_and_open_side_preview(task) {
                this.task = task
                if (this.page === 'project-preview') {
                    this.$event.$emit('show-task-side-preview', task)
                } else {
                    this.set_and_view_task(task)
                }
            },
            expand() {
                this.$router.push({name: 'expanded-tasks'})
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~@/sass/_variables';

    .tasks-content {
        border: 1px solid $borderGray;
        margin: 5px;

        @include styledMenuTabs('.task__tabs');

        .task__tabs {
            border-bottom: 1px solid $borderGray;

            .v-tabs__div:nth-child(1) {
                border-right: 1px solid $borderGray;
            }
        }
    }
</style>
<style scoped>
    >>> .task__tabs a.v-tabs__item.v-tabs__item--active {
        background-color: #3b589e;
        color: white;
    }

    >>> .task__tabs .v-tabs__item:not(.v-tabs__item--active) {
        background-color: white;
        color: #4c5561;
    }
</style>
