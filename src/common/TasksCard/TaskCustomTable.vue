<template>
    <div class="task-custom-table">
        <v-layout class="task_header">
            <v-flex xs3 class="task__tableHead" v-if="tab == 'All Tasks'">Assigned
            </v-flex>
            <v-flex xs5 class="task__tableHead" v-if="tab == 'All Tasks'">Task</v-flex>
            <v-flex xs8 class="task__tableHead" v-if="tab != 'All Tasks'">Task</v-flex>
            <v-flex xs2 class="task__tableHead text-center">Status</v-flex>
            <v-flex xs2 class="task__tableHead text-center">Action</v-flex>
        </v-layout>
        <div class="task_body" :style="{ height: bodyMaxHeight }">
            <v-layout align-center class="task-row" :class="['task__tableBody', { active: task.id === active_task_id }]" v-for="task in tasks" :key="task.id" @click="task_view_action(task)">
                <v-flex xs3 class="assignee__col" v-if="tab == 'All Tasks'">
                    <Avatars v-if="task.assignee.length > 0" :deep="false" :items="task.assignee" :count="1" style="display: inline-block;"></Avatars>
                    <v-avatar size="40" v-else>
                        <v-icon large>mdi-account-question-outline</v-icon>
                    </v-avatar>
                </v-flex>
                <v-flex xs5 class="project__col subtitle-2" v-if="tab == 'All Tasks'">
                    {{ task.title | ucwords }}
                </v-flex>
                <v-flex xs8 class="project__col" v-if="tab != 'All Tasks'">
                    {{ task.title | ucwords }}
                </v-flex>
                <v-flex xs2 class="status__col text-center">
                    {{ task.status }}
                    <div v-if="task.status === 'completed'">
                        <div class="status__completed"></div>
                    </div>
                    <div v-if="task.status === 'pending'">
                        <div class="status__pending"></div>
                    </div>
                    <div v-if="task.status === 'behind'">
                        <div class="status__behind"></div>
                    </div>
                    <div v-if="task.status === 'open'">
                        <div class="status__open"></div>
                    </div>
                </v-flex>
                <v-flex xs2 class="action__col">
                    <v-menu offset-y left>
                        <template v-slot:activator="{ on: menu }">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on: tooltip }">
                                    <v-btn color="grey" dark icon v-on="{ ...tooltip, ...menu }">
                                        <v-icon>mdi-dots-horizontal</v-icon>
                                    </v-btn>
                                </template>
                                <span>Actions</span>
                            </v-tooltip>
                        </template>
                        <v-list dense>
                            <v-list-item v-if="task.status !== 'completed' && can_edit_task" @click="task_action(task, 'task-edit')">
                                <v-list-item-title>
                                    <v-icon color="grey" left>edit</v-icon> Edit Task
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item v-if="can_delete_task" @click="task_action(task, 'task-delete')">
                                <v-list-item-title>
                                    <v-icon color="grey" left>delete</v-icon> Delete Task
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item v-if="can_view_task" @click="task_view_action(task)">
                                <v-list-item-title>
                                    <v-icon color="grey" left>pageview</v-icon> View Task
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item v-if="task.status !== 'completed' && can_edit_task" @click="task_action(task, 'task-mark-as-complete')">
                                <v-list-item-title>
                                    <v-icon color="grey" left>check</v-icon> Mark as Complete
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-flex>
            </v-layout>
        </div>
    </div>
</template>
<script>
import apiTo from '@/modules/ProjectPreview-Tasks/api'
import Avatars from '@/common/Avatars'
import { mapGetters } from 'vuex'

export default {
    name: 'TaskCustomTable',

    components: { Avatars },

    props: {
        tasks: Array,
        tab: String
    },

    inject: {
        bodyMaxHeight: {
            from: 'bodyMaxHeight',
            default: '200px'
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
            this.replace_task(task, task.id)
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
        }
    },
    methods: {
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
        replace_task(task, id) {
            let index = this.tasks.findIndex(item => item.id === id)
            if (~index) {
                this.tasks.splice(index, 1, task)
            }
        },
        remove_task(id) {
            let index = this.tasks.findIndex(item => item.id === id)
            if (~index) {
                this.tasks.splice(index, 1)
            }
        },
        task_is_completed() {
            var payload = { status: 'completed' }
            apiTo
                .mark_as_complete_task(this.active_task_id, payload)
                .then(({ data }) => {
                    this.replace_task(data, this.active_task_id)
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
        /* -webkit-box-flex: 1; */
        // -ms-flex: 1 1 auto;
        /* flex: 1 1 auto; */
        /* margin-right: -12px; */
        /* margin-left: -12px; */
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