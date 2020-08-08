<template>
    <div class="task-custom-table">
        <v-row class="task_header" no-gutters>
            <v-col cols="2" class="task__tableHead" v-if="!is_my_task_tab">Assigned</v-col>
            <v-col :cols="is_my_task_tab ? 8 : 6" class="task__tableHead">Task</v-col>
            <v-col cols="2" class="task__tableHead text-center">Status</v-col>
            <v-col cols="2" class="task__tableHead text-center">Action</v-col>
        </v-row>
        <div class="task_body" :style="{ height: bodyMaxHeight }">
            <v-list dense v-if="tasks.length > 0">
                <template v-for="task in tasks">
                    <v-list-item class="px-0" :key="task.id">
                        <v-list-item-content class="pa-0">
                            <v-list-item-title>
                                <v-row no-gutters
                                       :class="['task__tableBody', { active: task.id === active_task_id }]"
                                       @click.stop="task_view_action(task)"
                                >
                                    <v-col md="2" class="assignee__col" v-if="!is_my_task_tab">
                                        <Avatars v-if="task.assigned.length > 0" :deep="false" :items="task.assigned"
                                                 :count="1"
                                                 style="display: inline-block;"
                                        />
                                        <v-avatar size="40" v-else>
                                            <v-icon large>mdi-account-question-outline</v-icon>
                                        </v-avatar>
                                    </v-col>
                                    <v-col :md="is_my_task_tab ? 8 : 6" class="project__col">
                                        <p class="subtitle-2">
                                            {{ task.title | ucwords | truncate(35) }}<br>
                                            <router-link :to="get_project_url(task.project)"
                                                         v-if="showProject && task.project"
                                                         @click.native="$event.stopImmediatePropagation()"
                                            >
                                                <small class="caption">{{ task.project.title | ucwords | truncate(20) }}
                                                    | </small>
                                            </router-link>
                                            <small class="caption" v-if="task.milestone">{{ task.milestone.title|ucwords|truncate(20) }}</small>
                                        </p>
                                    </v-col>
                                    <v-col md="2" sm="2" class="status__col text-center">
                                        <v-icon color="success" v-if="task.status.toLowerCase() === 'completed'">
                                            mdi-clipboard-check-outline
                                        </v-icon>
                                        <v-icon color="warning" v-else-if="task.status.toLowerCase() === 'pending'">
                                            mdi-clipboard-pulse-outline
                                        </v-icon>
                                        <v-icon color="danger" v-else-if="task.status.toLowerCase() === 'behind'">
                                            mdi-clipboard-arrow-left-outline
                                        </v-icon>
                                        <v-icon color="info" v-else-if="task.status.toLowerCase() === 'open'">
                                            mdi-clipboard-text-play-outline
                                        </v-icon>
                                        <v-icon color="red" v-else-if="task.status.toLowerCase() === 'urgent'">
                                            mdi-clipboard-alert-outline
                                        </v-icon>
                                        <br>
                                        {{ task.status | ucwords }}
                                    </v-col>
                                    <v-col md="2" sm="2" class="action__col">
                                        <v-menu offset-y left>
                                            <template v-slot:activator="{ on: menu }">
                                                <v-tooltip bottom>
                                                    <template v-slot:activator="{ on: tooltip }">
                                                        <v-btn class="mt-2" color="grey" dark icon
                                                               v-on="{ ...tooltip, ...menu }"
                                                        >
                                                            <v-icon>mdi-dots-horizontal-circle-outline</v-icon>
                                                        </v-btn>
                                                    </template>
                                                    <span>Actions</span>
                                                </v-tooltip>
                                            </template>
                                            <v-list dense>
                                                <v-list-item v-if="task.status !== 'completed' && can_edit_task"
                                                             @click="task_action(task, 'task-edit')"
                                                >
                                                    <v-list-item-title>
                                                        <v-icon color="grey" left>
                                                            mdi-file-document-edit-outline
                                                        </v-icon>
                                                        Edit Task
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <v-list-item v-if="can_delete_task"
                                                             @click="task_action(task, 'task-delete')"
                                                >
                                                    <v-list-item-title>
                                                        <v-icon color="grey" left>mdi-delete-alert-outline</v-icon>
                                                        Delete Task
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <v-list-item v-if="can_view_task" @click="task_view_action(task)">
                                                    <v-list-item-title>
                                                        <v-icon color="grey" left>mdi-clipboard-text-play</v-icon>
                                                        View Task
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <v-list-item v-if="task.status !== 'completed' && can_edit_task"
                                                             @click="task_action(task, 'task-mark-as-complete')"
                                                >
                                                    <v-list-item-title>
                                                        <v-icon color="grey" left>mdi-clipboard-check</v-icon>
                                                        Mark as Complete
                                                    </v-list-item-title>
                                                </v-list-item>
                                                <v-list-item v-if="task.status !== 'completed' && can_edit_task"
                                                             @click="task_action(task, 'task-mark-as-urgent')"
                                                >
                                                    <v-list-item-title>
                                                        <v-icon color="grey" left>mdi-clipboard-alert-outline</v-icon>
                                                        {{ task.status === 'urgent' ? `Mark as Non-urgent` : `Mark as
                                                        Urgent` }}
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-menu>
                                    </v-col>
                                </v-row>
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
            <Empty v-else icon="mdi-clipboard-list-outline" headline="No task found!" />
        </div>
    </div>
</template>
<script>
    import apiTo from '@/modules/ProjectPreview-Tasks/api'
    import Avatars from '@/common/Avatars.vue'
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: 'TaskCustomTable',
        components: {Avatars},
        props: {
            tasks: Array,
            tab: String,
            showProject: {type: Boolean, default: false},
        },

        inject: {
            bodyMaxHeight: {
                from: 'bodyMaxHeight',
                default: '100%'
            }
        },

        data: () => ({
            active_task_id: null
        }),

        created() {
            if (this.tasks.length > 0) {
                this.active_task_id = this.tasks[0].id
                this.$event.$emit('show-task-side-preview', this.tasks[0])
            }
            this.$event.$on('task_completed', task => {
                if (!this.active_task_id) {
                    this.active_task_id = task.id
                }
                this.task_is_completed()
            })
            this.$event.$on('task_deleted', task => {
                if (!this.active_task_id) {
                    this.active_task_id = task.id
                }
                this.task_is_deleted()
            })

            this.$event.$on('task-is-updated', task => {
                this.replace_task(task)
            })
        },
        computed: {
            ...mapGetters('taskCards', ['page']),
            user() {
                return this.$store.getters.user
            },
            permission() {
                return this.$_permissions.get('tasks_own')
            },
            can_view_task() {
                if (this.user.is_admin) return true
                return this.permission && this.permission.view
            },
            can_edit_task() {
                if (this.user.is_admin) return true
                return this.permission && this.permission.update
            },
            can_delete_task() {
                if (this.user.is_admin) return true
                return this.permission && this.permission.delete
            },
            is_my_task_tab() {
                return this.tab !== 'All Tasks'
            }
        },
        methods: {
            ...mapMutations('taskCards', ['replace_task']),
            row_clicked(row) {
                this.active_task_id = row.id
                // this.$event.$emit('task-row-clicked', row)
                this.$event.$emit('show-task-side-preview', row)
            },
            task_action(item, event) {
                this.$event.$emit(event, item)
            },
            task_view_action(item) {
                if (this.page === 'project-preview') this.row_clicked(item)
                else this.task_action(item, 'task-view')
            },
            /*replace_task(task, id) {
                let index = this.tasks.findIndex(item => item.id === id)
                if (~index) {
                    this.tasks.splice(index, 1, task)
                }
            },*/
            remove_task(id) {
                let index = this.tasks.findIndex(item => item.id === id)
                if (~index) {
                    this.tasks.splice(index, 1)
                }
            },
            task_is_completed() {
                let payload = {status: 'completed'};
                apiTo
                    .mark_as_complete_task(this.active_task_id, payload)
                    .then(({data}) => {
                        this.replace_task(data)
                        this.$event.$emit('btnloading_off', false)
                        this.$event.$emit('open_snackbar', 'Task is completed')
                        this.$event.$emit('close_confirm_dialog', true)
                    })
            },
            task_is_deleted() {
                apiTo.delete_task(this.active_task_id).then(() => {
                    this.remove_task(this.active_task_id)
                    this.$event.$emit('btnloading_off', false)
                    this.$event.$emit('close_delete_dialog', true)
                    this.$event.$emit('open_snackbar', 'Task is deleted')
                })
            },
            get_project_url(project) {
                return `/dashboard/${project.type}/preview/${project.id}`
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import '~@/sass/variables';

    .task-custom-table {
        .task_header {
            border-bottom: 1px solid $borderGray;
            background-color: $tableBlueBg;
            padding: 10px 0;

            .task__tableHead {
                padding: 5px 10px;
                color: $tableTitleBlue;
                font-size: 15px;
                font-weight: 500;
            }
        }

        .task-row {
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
        }

        @include styledScrollFor('.task_body'); //style the scroll

        .task_body {
            overflow: auto;
            background-color: $tableBlueBg;

            .task__tableBody {
                border-bottom: 1px solid $borderGray;
                cursor: pointer;

                &.active {
                    background-color: $white;
                }

                &:hover {
                    background-color: $white;
                }

                .assignee__col,
                .project__col {
                    padding: 5px 10px;
                    font-size: 17px;
                    font-weight: 400;
                }

                .project__col {
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .status__col {
                    font-size: 12px;
                    font-weight: 400;
                    opacity: 0.8;
                    color: $textGray;
                    padding: 10px;

                    .status__completed {
                        height: 4px;
                        width: 60px;
                        border-radius: 10px;
                        background-color: $green;
                    }

                    .status__pending {
                        height: 4px;
                        width: 60px;
                        border-radius: 10px;
                        background-color: $orange;
                    }

                    .status__behind {
                        height: 4px;
                        width: 60px;
                        border-radius: 10px;
                        background-color: $red;
                    }

                    .status__open {
                        height: 4px;
                        width: 60px;
                        border-radius: 10px;
                        background-color: $textGray;
                    }
                }

                .action__col {
                    display: flex;
                    justify-content: center;
                }
            }
        }
    }

    //Laptop - Tablet View
    @media only screen and (max-width: 1200px) and (min-width: 960px) {
        .task-custom-table {
            .task_header {
                .task__tableHead {
                    font-size: 12px;
                }
            }

            .task_body {
                .task__tableBody {
                    &.active {
                        background-color: $white;
                    }

                    .assignee__col,
                    .project__col {
                        font-size: 14px;
                    }
                }
            }
        }
    }

    //Mobile View
    @media only screen and (max-width: 480px) {
        .task-custom-table {
            .task_header {
                .task__tableHead {
                    font-size: 12px;
                }
            }

            .task_body {
                .task__tableBody {
                    &.active {
                        background-color: $white;
                    }

                    .assignee__col,
                    .project__col {
                        font-size: 12px;
                    }
                }
            }
        }
    }
</style>