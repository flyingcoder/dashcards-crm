<template>
    <div class="loading" v-if="properties.loading">
        <v-progress-linear :indeterminate="true" />
    </div>

    <div class="no-data" v-else-if="tasks_are_empty">
        <div class="empty-content">
            <v-icon class="empty-icon">list</v-icon>
            <p class="empty-text">List Empty</p>
        </div>
    </div>

    <div class="tasks-tab" v-else>
        <task-chips
                :count-all="tasks.length"
                :count-completed="count_completed_tasks"
                :count-pending="count_pending_tasks"
                :count-behind="count_behind_tasks"
                :count-open="count_open_tasks"
                :count-urgent="count_urgent_tasks"
                :active-chip.sync="active_chip"
        />

        <task-custom-table :tasks="filtered_tasks" />
    </div>
</template>

<script>
    import TaskChips from './TaskChips.vue'
    import TaskCustomTable from './TaskCustomTable.vue'

    export default {
        name: 'TasksTab',
        components: {TaskChips, TaskCustomTable},
        inject: ['properties'],
        props: {
            tasks: Array
        },

        data: () => ({
            active_chip: 'all'
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
                return this.tasks.filter(task => task.status.toLowerCase() === 'completed').length
            },
            count_pending_tasks() {
                return this.tasks.filter(task => task.status.toLowerCase() === 'pending').length
            },
            count_behind_tasks() {
                return this.tasks.filter(task => task.status.toLowerCase() === 'behind').length
            },
            count_open_tasks() {
                return this.tasks.filter(task => task.status.toLowerCase() === 'open').length
            },
            count_urgent_tasks() {
                return this.tasks.filter(task => task.status.toLowerCase() === 'urgent').length
            }
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
