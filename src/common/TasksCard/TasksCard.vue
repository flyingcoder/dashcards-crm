<template>
    <div class="tasks-card">
        <div class="tasks__content">
            <dash-card title="Tasks" :view-more-btn="true" class="task__content" :dashboard="dashboard" @close="$emit('close')" @expand="expand">
                <div class="content-wrapper" slot="content">
                    <div class="tasks-items">
                        <tasks-content :hasLoadMoreBtn="false" :show-project="showProject" />
                    </div>
                </div>
                <div slot="footer">
                    <v-btn text class="view__more_btn" :loading="btnloading" v-if="!noMoreData" @click="loadMore">
                        VIEW MORE
                    </v-btn>
                </div>
            </dash-card>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import { list_functionality } from '@/services/list-functionality/list-functionality'

import DashCard from '@/common/DashCard.vue'
import TasksContent from '@/common/TasksCard/TasksContent.vue'


export default {
    name: 'TasksCard',
    mixin: [list_functionality],
    components: {
        DashCard,
        TasksContent,
    },

    props: {
        id: [Number, String],
        dashboard: Boolean,
        page: { type: String, default: 'dashboard' },
        showProject: { type: Boolean, default: true },
    },

    computed: {
        ...mapGetters('taskCards', [
            'see_more_url',
            'btnloading'
        ]),
        active_task_id: {
            get: function() {
                if (this.task) return this.task.id
                return  null
            },
            set: function(val) {
                return val
            }
        },

        noMoreData() {
            return !this.see_more_url
        }
    },

    data: () => ({
        task: null,
    }),

    created() {
        if (this.$route.query.id) this.active_task_id = this.$route.query.id
    },

    methods: {
        ...mapActions('taskCards', ['see_more']),
        loadMore() {
            this.see_more()
        },
        expand() {
            this.$router.push({ name: 'expanded-tasks' })
        }
    }
}
</script>