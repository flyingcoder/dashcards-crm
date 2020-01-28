<template>
  <div class="loading" v-if="user_loading">
    <v-progress-linear :indeterminate="true"></v-progress-linear>
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
      :active-chip.sync="active_chip"
    />

    <task-custom-table :tasks="filtered_tasks" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskChips from '@/common/TasksCard/TaskChips.vue'
import TaskCustomTable from '@/common/TasksCard/TaskCustomTable.vue'

export default {
  components: { TaskChips, TaskCustomTable },

  data: () => ({
    tasks: [],
    active_chip: 'all'
  }),

  computed: {
    ...mapGetters('memberProfile', ['user', 'user_loading']),
    filtered_tasks() {
      if (this.active_chip === 'all') return this.tasks
      return this.tasks.filter(
        task => task.status.toLowerCase() === this.active_chip
      )
    },
    tasks_are_empty() {
      return this.tasks.length === 0
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
    }
  },

  watch: {
    user: {
      handler(val) {
        this.tasks = val.tasks
      }
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
