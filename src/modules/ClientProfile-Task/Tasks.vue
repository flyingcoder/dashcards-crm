<template>
    <div class="tasks">
        <div class="loading" v-if="loading">
            <v-progress-linear :indeterminate="true" />
        </div>
        <v-card flat class="pa-2">
            <tasks-content :hasTabs="false" :userId="user_id" hasLoadMoreBtn showProject />
        </v-card>
    </div>
</template>

<script>
    //Components
    import TasksContent from "@/common/TasksCard/TasksContent.vue";
    import {mapMutations} from "vuex";

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
        created() {
            this.set_user_id(this.user_id)
            this.set_id(null)
        },

        beforeDestroy() {
            this.$event.$off('task-row-clicked')
        },

        methods: {
            ...mapMutations('taskCards', ['set_user_id', 'set_id']),
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
