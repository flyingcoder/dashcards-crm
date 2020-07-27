<template>
    <div>
        <div class="loading" v-if="user_loading">
            <v-progress-linear :indeterminate="true" />
        </div>

        <div class="no-data" v-else-if="tasks_are_empty">
            <div class="empty-content">
                <v-icon class="empty-icon">list</v-icon>
                <p class="empty-text">List Empty</p>
            </div>
        </div>

        <div class="tasks-tab" v-show="!user_loading">
            <tasks-content :hasTabs="false" hasLoadMoreBtn showProject />
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapMutations} from 'vuex'
    import TasksContent from "@/common/TasksCard/TasksContent.vue";
    export default {
        components:{
            TasksContent
        },
        data: () => ({
            active_chip: 'all',
            task: null
        }),
        created() {
            this.$event.$on('task-view', task => this.set_and_view_task(task))
            this.set_id(null)
        },
        computed: {
            ...mapGetters('memberProfile', ['tasks', 'user_loading']),
            filtered_tasks() {
                if (!this.tasks) return []
                if (this.active_chip === 'all') return this.tasks
                return this.tasks.filter(
                    task => task.status.toLowerCase() === this.active_chip
                )
            },
            tasks_are_empty() {
                return !this.tasks || this.tasks.length === 0
            },
            count_completed_tasks() {
                if (!this.tasks) return 0
                return this.tasks.filter(task => task.status === 'completed').length
            },
            count_pending_tasks() {
                if (!this.tasks) return 0
                return this.tasks.filter(task => task.status === 'pending').length
            },
            count_behind_tasks() {
                if (!this.tasks) return 0
                return this.tasks.filter(task => task.status === 'behind').length
            },
            count_open_tasks() {
                if (!this.tasks) return 0
                return this.tasks.filter(task => task.status === 'open').length
            },
        },
        methods: {
            ...mapMutations('taskCards', ['set_id']),
            set_and_view_task(task) {
                this.task = task
                this.$refs.view_task_dialog.open_dialog()
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/sass/_variables';

    .no-data {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
        align-items: center;
        height: 515px;

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
