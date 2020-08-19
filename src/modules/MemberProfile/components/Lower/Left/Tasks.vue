<template>
    <div>
        <div class="loading" v-if="user_loading">
            <v-progress-linear :indeterminate="true" />
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
        components: {
            TasksContent
        },
        created() {
            this.set_id(null)
            this.set_user_id(this.$route.params.user_id)
        },
        computed: {
            ...mapGetters('memberProfile', ['user_loading']),
        },
        methods: {
            ...mapMutations('taskCards', ['set_id', 'set_user_id']),
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
