<template>
  <div class="loading" v-if="loading">
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
import request from '@/services/axios_instance'
import TaskChips from '@/common/TasksCard/TaskChips.vue'
import TaskCustomTable from '@/common/TasksCard/TaskCustomTable.vue'

export default {
  name: 'ProfileTasks',
  components: { TaskChips, TaskCustomTable },
  props: {
    id: [Number, String],
    tab: String
  },

  data: () => ({
    tasks: [],
    loading: false,
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
    tab: {
      handler(val) {
        let api_url = 'api/task'
        if (this.id) {
          api_url = `api/projects/${this.id}/tasks`
        }
        if (val === 'My Tasks') api_url += '/mine'

        api_url += '?all=true'
        this.get_tasks(api_url)
      },
      immediate: true
    }
  },

  methods: {
    get_tasks(api_url) {
      this.loading = true
      request
        .get(api_url)
        .then(({ data }) => (this.tasks = data))
        .finally(() => (this.loading = false))
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
