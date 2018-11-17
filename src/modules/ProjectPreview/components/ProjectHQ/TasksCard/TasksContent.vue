<template>
	<div class="tasks-content">
		<v-tabs class="tabs" grow hide-slider height="60px" v-model="active_tab">
			<v-tab
					centered
					v-for="tab in tabs"
					:key="tab.name"
					:href="`#${tab.name}`"
					v-model="active_tab"
			>
				{{ tab.name }}
			</v-tab>
		</v-tabs>

		<v-tabs-items v-model="active_tab">
			<v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.name">
				<v-card flat>
					<component :tasks="tasks" :is="active_tab"></component>
				</v-card>
			</v-tab-item>
		</v-tabs-items>
	</div>
</template>

<script>
	import MyTasks from './MyTasks.vue'
	import AllTasks from './AllTasks.vue'

	export default {
		name: 'TasksContent',
		components: {
			MyTasks, AllTasks
		},

		props: {
			tasks: Array
		},

		data: () => ({
			active_tab: 'MyTasks',
			tabs: [
				{ id: 1, name: 'MyTasks' },
				{ id: 2, name: 'AllTasks' },
			]
		}),

	}
</script>

<style lang="scss" scoped>
	.tasks-content {

	}
</style>