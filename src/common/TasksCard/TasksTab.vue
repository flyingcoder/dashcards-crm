<template>
  <v-col md="12" class="pa-0 ma-0">
  <div class="loading" v-if="loading">
    <v-progress-linear :indeterminate="true"></v-progress-linear>
  </div>

  <div class="no-data" v-if="!loading && tasks_are_empty">
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
    ></task-chips>

    <task-custom-table :tasks="filtered_tasks" :tab="tab" ></task-custom-table>
  </div>
  </v-col>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import TaskChips from './TaskChips.vue'
import TaskCustomTable from './TaskCustomTable.vue'

export default {
  name: 'TasksTab',
  components: { TaskChips, TaskCustomTable },
  props: {
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
        //console.log(this.tasks)
      }
    },
    tab: {
      handler(val) {
        //api_url += '?all=true'
        this.get_tasks(val)
        //console.log(this.tasks)
      },
      immediate: true
    }
  },

  methods: {
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
