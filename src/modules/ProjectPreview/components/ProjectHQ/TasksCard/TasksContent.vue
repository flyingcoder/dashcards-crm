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
					<tasks-tab :tab="active_tab" :id="id" />
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