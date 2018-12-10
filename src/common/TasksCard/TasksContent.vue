<template>
	<div class="tasks-content">
		<v-tabs class="task__tabs" centered grow hide-slider v-model="active_tab">
			<v-tab
					v-for="tab in tabs"
					:key="tab.name"
					:href="`#${tab.name}`"
			>
				{{ tab.name }}
			</v-tab>
		</v-tabs>

		<v-tabs-items v-model="active_tab">
			<v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.name">
				<v-card flat>
					<tasks-tab :tab="active_tab" v-if="active_tab === tab.name" :id="id" />
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
    active_tab: 'My Tasks',
    tabs: [{ id: 1, name: 'My Tasks' }, { id: 2, name: 'All Tasks' }]
  })
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';
.tasks-content {
  border: 1px solid #b2b6c0;
  .task__tabs {
    border-bottom: 1px solid #b2b6c0;
    .v-tabs__div:nth-child(1) {
      border-right: 1px solid #b2b6c0;
    }
  }
}
</style>

<style scoped>
>>> .task__tabs a.v-tabs__item.v-tabs__item--active {
  background-color: white;
  color: #4c5561;
}
>>> .task__tabs .v-tabs__item:not(.v-tabs__item--active) {
  background-color: #f5f7fa;
  color: #4c5561;
  opacity: 1;
}
</style>
