<template>
	<div class="milestone-task">

		<task-dialog
				:dialog.sync="add_dialog"
				ref="add_dialog"
				dialog-title="Add Task"
				@save="add_item('add_new_task', $event, dynamic_api)"
		/>

		<task-dialog
				:dialog.sync="edit_dialog"
				ref="edit_dialog"
				dialog-title="Edit Task"
				:is-edit-dialog="edit_dialog"
				:fields-to-edit="edit_item"
				@save="update_item('edit_task', $event, dynamic_api)"
		/>

		<delete-dialog
				:open-dialog.sync="delete_dialog"
				title="Delete Task"
				text-content="Are you sure you want to delete this task?"
				@delete="delete_item('delete_task', dynamic_api)"
		/>

		<v-layout row>
			<v-flex xs12>

			<table-header :paths="paths" @click="add_dialog = true" />

				<custom-table
						v-if="items.length || loading"
						:headers="headers"
						:items="items"
						:loading="loading"
						:sort="sort"
						:has-checkbox="true"
						hide-actions
						toolbar-title="Tasks"
						no-row-view
						:permission="$_permissions.get('hq_milestone_tasks')"
						@items-selected="selected_ids = $event"
						@sorted="changeSort"
						@edit="open_edit_dialog"
						@delete="open_delete_dialog"
				>
					<template slot="custom-item" slot-scope="item"> <!-- Table Items -->
						<td class="text-xs-left text-cap">{{ item.item.title }}</td>
						<td class="text-xs-left textarea-cap">{{ short_description_text(item.item.description) }}</td>
						<td class="text-xs-left text-cap">{{ item.item.status }}</td>
						<td class="text-xs-left">{{ item.item.days }}</td>
					</template>

					<template slot="table-actions">

						<div class="actions-wrapper">

							<div class="bulk-delete">
								<v-btn color="indigo" dark outline :disabled="!show_delete_selected">
									Delete Selected
								</v-btn>
							</div>

							<div class="rows-per-page-dropdown">
								Rows per page: <v-select :items="rows_per_page_items" menu-props="auto" v-model="rows_per_page"></v-select>
							</div>

							<div class="pagination">
								<div class="text-xs-center pt-2">
									<v-pagination :length="total_items" :total-visible="5" v-model="page"></v-pagination>
								</div>
							</div>

						</div>
					</template>

				</custom-table>

				<div class="empty-task" v-else>
					<div class="empty-content">
						<div class="empty-svg">
							<svg viewBox="0 0 250 250">
								<path d="M23 40l177 0c6,0 12,3 16,7l0 0c4,4 7,10 7,16l0 6c0,0 0,0 0,0l0 36c0,3 -2,5 -6,5 -3,0 -5,-2 -5,-5l0 -1 0 0 0 -41c0,-3 -1,-6 -4,-8l0 0c-2,-3 -5,-4 -8,-4l-177 0c-3,0 -6,1 -8,4 -3,2 -4,5 -4,8l0 93c0,4 1,7 4,9 2,2 5,3 8,3l117 0 0 0 5 0c3,0 6,3 6,6 0,3 -3,5 -6,5l-35 0c0,0 0,0 -1,0l-86 0c-6,0 -12,-2 -16,-6l0 -1c-4,-4 -7,-9 -7,-16l0 -93c0,-6 3,-12 7,-16l0 0c4,-4 10,-7 16,-7zm180 77c13,0 25,5 33,13 9,9 14,20 14,33 0,13 -5,25 -14,33 -8,9 -20,14 -33,14 -13,0 -24,-5 -33,-14 -8,-8 -13,-20 -13,-33 0,-13 5,-24 13,-33 9,-8 20,-13 33,-13zm4 24c6,1 9,3 9,6 0,1 -1,2 -2,3 0,1 -2,2 -3,2 0,0 -1,-1 -1,-1 -1,0 -1,0 -2,0 0,0 -1,0 -1,0 -1,-1 -3,-1 -4,-1 -1,0 -2,0 -3,1 -1,0 -1,1 -1,2 0,1 0,2 1,3 0,0 1,1 2,1 3,1 4,1 6,2 2,1 4,1 6,2 1,2 3,3 3,4 1,2 2,4 2,6 0,4 -1,7 -4,10 -2,2 -4,4 -8,4l0 5c0,1 -1,2 -1,2 -1,1 -2,1 -3,1 -1,0 -1,0 -2,-1 -1,0 -1,-1 -1,-2l0 -4c-2,0 -5,-1 -7,-2 -3,-1 -5,-3 -5,-5 0,-1 0,-2 1,-3 1,-2 2,-2 3,-2 1,0 2,0 2,0l4 1c2,1 4,1 5,1 1,0 2,0 4,-1 1,-1 1,-2 1,-3 0,-2 0,-3 -2,-3 -1,-1 -3,-2 -6,-2 -2,-1 -4,-2 -5,-2 -1,-1 -3,-1 -4,-2 -1,-1 -2,-3 -2,-4 -1,-2 -1,-3 -1,-5 0,-1 0,-2 0,-3 1,-1 1,-2 2,-3 0,-1 1,-2 2,-3 2,-2 5,-4 8,-4l0 -4c0,-1 0,-2 1,-3 1,0 1,-1 2,-1 1,0 2,1 3,1 0,1 1,2 1,3l0 4zm21 -3c-6,-6 -15,-10 -25,-10 -10,0 -18,4 -25,10 -6,7 -10,15 -10,25 0,10 4,19 10,25 7,7 15,11 25,11 10,0 19,-4 25,-11 7,-6 11,-15 11,-25 0,-10 -4,-18 -11,-25zm-192 -26c-3,0 -5,-3 -5,-6 0,-3 2,-5 5,-5l63 0c3,0 5,2 5,5 0,3 -2,6 -5,6l-63 0zm0 -30c-3,0 -5,-3 -5,-6 0,-3 2,-5 5,-5l85 0c3,0 5,2 5,5 0,3 -2,6 -5,6l-85 0zm0 58c-3,0 -5,-2 -5,-5 0,-3 2,-6 5,-6l85 0c3,0 5,3 5,6 0,3 -2,5 -5,5l-85 0z"/>
							</svg>
						</div>
						<div class="empty-btn">
							<v-btn large dark color="#3b589e" @click="add_dialog = true">Add Task</v-btn>
						</div>
					</div>
				</div>

			</v-flex>
		</v-layout>
	</div>
</template>

<script src="./MilestoneTask.js">
</script>
<style lang="scss" scoped>
@import '~@/sass/variables';

.milestone-task {
  padding: 14px 28px;

  @include customTableRow; //css used for styling the last row of the table

  @include emptyTable('.empty-task');
}
</style>
