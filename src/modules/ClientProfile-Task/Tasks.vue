<template>
    <div class="tasks">
        <div class="loading" v-if="loading">
            <v-progress-linear :indeterminate="true"/>
        </div>

        <tasks-content :hasTabs="false" hasLoadMoreBtn showProject />

    <!--    <v-flex class="task-preview-wrapper">
            <PreviewCard
                    v-if="selected_task"
                    :activeId="selected_task.id"
                    :id="user_id"
                    :task="selected_task"
            />
        </v-flex>-->
    </div>
</template>

<script>
    import apiTo from './api'
    //Components
     import TasksContent from "@/common/TasksCard/TasksContent";

    export default {
        components: {
            TasksContent
        },
        props: {
            user_id: [Number, String]
        },
        data: () => ({
            loading: false,
            tasks: [],
            active_chip: 'all',
            selected_task: null
        }),

        computed: {
            filtered_tasks() {
                if (this.active_chip === 'all') return this.tasks
                return this.tasks.filter(
                    task => task.status.toLowerCase() === this.active_chip
                )
            },
            tasks_are_empty() {
                return !this.loading && this.tasks.length === 0
            },
            count_completed_tasks() {
                return this.tasks.filter(task => task.status === 'completed').length
            },
            count_pending_tasks() {
                return this.tasks.filter(task => task.status === 'pending').length
            },
            count_behind_tasks() {
                return this.tasks.filter(task => task.status === 'behind').length
            },
            count_open_tasks() {
                return this.tasks.filter(task => task.status === 'open').length
            },
            count_urgent_tasks() {
                return this.tasks.filter(task => task.status === 'urgent').length
            }
        },

        created() {
            this.get_tasks()
            this.$event.$on(
                'task-row-clicked',
                data_from_child => (this.selected_task = data_from_child)
            )
        },

        beforeDestroy() {
            this.$event.$off('task-row-clicked')
        },

        methods: {
            get_tasks() {
                this.loading = true
                apiTo
                    .get_tasks(this.user_id)
                    .then(({data}) => (this.tasks = data))
                    .finally(() => (this.loading = false))
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/sass/_variables';

    .tasks {
        display: block;

        .tasks-tab {
            padding: 15px;
        }

        .task-card {
            border: 1px solid $tableBorderBlue;
            border-radius: 15px;
            overflow: hidden;
        }

        .task-preview-wrapper {
            padding: 15px;
        }
    }

    .no-data {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
        height: 200px;

        .empty-content {
            text-align: center;
        }

        .empty-icon {
            font-size: 50px;
            color: $btnGray;
        }

        .empty-text {
            color: $btnGray;
            font-size: 20px;
        }
    }
</style>
