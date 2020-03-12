<template>
  <div class="tasks-card">
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
            <tasks-content />
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
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import DashCard from '@/common/DashCard.vue'
import TasksContent from './TasksContent.vue'

export default {
  name: 'TasksCard',
  components: {
    DashCard,
    TasksContent
  },

  props: { id: [Number, String], dashboard: Boolean },

  methods: {
    ...mapActions('taskCards', ['see_more', 'get_tasks']),
    ...mapMutations('taskCards', ['set_id']),
    loadMore() {
      this.see_more()
    }
  },

  created() {
    if(this.id)
      this.set_id(this.id)
  }
}
</script>

<style lang="scss" scoped>
.tasks-card {
}
</style>
