<template>
    <v-col md="12" class="pa-0 ma-0">
        <div class="tasks-tab">
            <task-chips
                    :count-all="total"
                    :count-completed="counter.completed"
                    :count-pending="counter.pending"
                    :count-behind="counter.behind"
                    :count-open="counter.open"
                    :count-urgent="counter.urgent"
                    :active-chip.sync="active_chip"
            />
            <task-custom-table :tasks="filtered_tasks" :tab="tab" :showProject="showProject" />
            <div class="loading" v-if="loading">
                <v-progress-linear :indeterminate="true" />
            </div>
        </div>
    </v-col>
</template>

<script>
    import {mapActions, mapGetters, mapMutations} from 'vuex'
    import TaskChips from './TaskChips.vue'
    import TaskCustomTable from './TaskCustomTable.vue'

    export default {
        name: 'TasksTab',
        components: {TaskChips, TaskCustomTable},
        props: {
            tab: String,
            showProject: {type: Boolean, default: false},
        },

        data: () => ({
            active_chip: 'all'
        }),

        computed: {
            ...mapGetters('taskCards', ['total', 'tasks', 'counter', 'loading', 'user_id']),
            filtered_tasks() {
                if (this.active_chip === 'all') return this.tasks
                return this.tasks.filter(
                    task => task.status.toLowerCase() === this.active_chip.toLowerCase()
                )
            },
            tasks_are_empty() {
                return !this.loading && this.tasks.length === 0
            }
        },

        watch: {
            tab: {
                handler(val) {
                    this.get_tasks({ tab: val, filter: this.active_chip})
                },
                immediate: true
            }
        },

        methods: {
            ...mapMutations('taskCards', ['set_user_id']),
            ...mapActions('taskCards', ['get_tasks'])
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
        height: 300px;

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
