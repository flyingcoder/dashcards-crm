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

		<v-container>
			<v-layout row>
				<v-flex xs12>

					<v-toolbar flat color="white">

						<v-spacer></v-spacer>

						<v-btn @click="add_dialog = true">Add New</v-btn>

					</v-toolbar>

					<custom-table
							:headers="headers"
							:items="items"
							:total-items="total_items"
							:loading="loading"
							has-checkbox
							has-header-icon
					>
						<template slot="custom-item" slot-scope="item"> <!-- Table Items -->
							<td class="text-xs-center">{{ item.item.title }}</td>
							<td class="text-xs-center">{{ short_description_text(item.item.description) }}</td>
							<td class="text-xs-center">{{ item.item.status }}</td>
							<td class="text-xs-center">{{ item.item.days }}</td>

							<td class="text-xs-center">
								<v-icon class="mr-2" @click="open_edit_dialog(item.item)">
									edit
								</v-icon>

								<v-icon @click="open_delete_dialog(item.item)">
									delete
								</v-icon>
							</td>
						</template>
					</custom-table>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script src="./MilestoneTask.js"></script>