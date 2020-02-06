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
      :count-all="total"
      :count-completed="counter.completed"
      :count-pending="counter.pending"
      :count-behind="counter.behind"
      :count-open="counter.open"
      :active-chip.sync="active_chip"
    />

    <task-custom-table :tasks="filtered_tasks" :tab="tab"/>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import TaskChips from './TaskChips.vue'
import TaskCustomTable from './TaskCustomTable.vue'

export default {
  name: 'TasksTab',
  components: { TaskChips, TaskCustomTable },
  props: {
    id: [Number, String],
    tab: String
  },

  data: () => ({
    active_chip: 'all'
  }),

  computed: {
    ...mapGetters('taskCards', ['total', 'tasks', 'counter', 'loading']),
    filtered_tasks() {
      if (this.active_chip === 'all') return this.tasks
      return this.tasks.filter(
        task => task.status.toLowerCase() === this.active_chip
      )
    },
    tasks_are_empty() {
      return !this.loading && this.tasks.length === 0
    }
  },

  watch: {
    active_chip: {
      handler(val) {
        console.log(val)
      }
    },
    tab: {
      handler(val) {
        this.$event.$emit('tab-toggle', val)

        let api_url = 'api/task'
        if (this.id) { api_url = `api/projects/${this.id}/tasks` }
        if (val === 'My Tasks') api_url += '/mine'

        //api_url += '?all=true'
        this.get_tasks(api_url)
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
