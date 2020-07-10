<template>
  <div class="tasks-content">
    <v-tabs class="task__tabs" height="45" centered grow hide-slider v-model="active_tab">
      <v-tab v-for="tab in tabs" :key="tab.name" :href="`#${tab.name}`">
        <span>{{ tab.name }}</span>
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="active_tab">
      <v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.name">
        <v-card flat>
          <tasks-tab :tab="active_tab" v-if="active_tab === tab.name" />
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>
<script>
import TasksTab from './TasksTab.vue'

export default {
  name: 'TasksContent',
  components: {
    TasksTab
  },

  props: {
    id: [Number, String]
  },

  data: () => ({
    active_tab: 'My Tasks'
  }),

  computed: {
    user() {
      return this.$store.getters.user
    },
    tabs() {
      let tabs = [
        { name: 'My Tasks', help: 'Tasks that are assigned to you ' },
        { name: 'All Tasks', help: 'Tasks for all members in this project' }
      ]
      if (this.user.is_admin) return tabs
      else if (!this.$_permissions.get('tasks_own')) tabs.splice(1)
      return tabs
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

.tasks-content {
  border: 1px solid $borderGray;
  margin: 5px;

  @include styledMenuTabs('.task__tabs');

  .task__tabs {
    border-bottom: 1px solid $borderGray;

    .v-tabs__div:nth-child(1) {
      border-right: 1px solid $borderGray;
    }
  }
}
</style>
<style scoped>
>>> .task__tabs a.v-tabs__item.v-tabs__item--active {
  background-color: #3b589e;
  color: white;
}

>>> .task__tabs .v-tabs__item:not(.v-tabs__item--active) {
  background-color: white;
  color: #4c5561;
}
</style>
