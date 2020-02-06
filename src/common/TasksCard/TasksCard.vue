<template>
  <v-flex xs12 class="tasks-card">
    <div class="tasks__content">
      <dash-card
        title="Tasks"
        :view-more-btn="true"
        class="task__content"
        :dashboard="dashboard"
        @close="$emit('close')"
      >
        <div class="content-wrapper" slot="content">
          <div class="tasks-items">
            <tasks-content :id="id" />
          </div>
        </div>
        <div slot="footer">
          <v-btn
            flat class="view__more_btn" 
            @click="loadMore"
          >
            VIEW MORE
          </v-btn>
        </div>
      </dash-card>
    </div>
  </v-flex>
</template>

<script>
import { mapActions } from 'vuex'
import DashCard from '@/common/DashCard.vue'
import TasksContent from './TasksContent.vue'

export default {
  name: 'TasksCard',
  components: {
    DashCard,
    TasksContent
  },

  methods: {
    ...mapActions('taskCards', ['see_more']),
    loadMore() {
      this.see_more()
    }
  },

  props: { id: [Number, String], viewMoreLink: String, dashboard: Boolean }
}
</script>

<style lang="scss" scoped>
.tasks-card {
}
</style>
