<template>
  <div class="tasks-card">
    <div class="tasks__content">
      <dash-card
        title="Tasks"
        :view-more-link="viewMoreLink"
        class="task__content"
        @close="$emit('close')"
      >
        <div class="content-wrapper" slot="content">
          <div class="tasks-items">
            <tasks-content :tasks="tasks" />
          </div>
        </div>
      </dash-card>
    </div>
  </div>
</template>

<script>
import DashCard from '@/common/DashCard.vue'
import TasksContent from './TasksContent.vue'

export default {
  name: 'TasksCard',
  components: {
    DashCard,
    TasksContent
  },

  props: { tasks: Array, viewMoreLink: Object }
}
</script>

<style lang="scss" scoped>
.tasks-card {
}
</style>
