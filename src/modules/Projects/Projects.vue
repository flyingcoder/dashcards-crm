<template>
	<div class="projects">

		<table-header :paths="paths" @click="add_dialog = true"/>
		<project-dialog
				:dialog.sync="add_dialog"
				ref="add_dialog"
				title="Add New Project"
				@save="add_item('add_new_project', $event)"
		/>

		<project-dialog
				:dialog.sync="edit_dialog"
				ref="edit_dialog"
				title="Edit Project"
				:is-edit-dialog="edit_dialog"
				:fields-to-edit="edit_item"
				@save="update_item('update_project', $event)"
		/>

		<delete-dialog
				:open-dialog.sync="delete_dialog"
				title="Delete Project"
				text-content="Are you sure you want to delete this project?"
				@delete="delete_item('delete_project')"
		/>

		<custom-table
				v-if="items.length || loading"
				:headers="headers"
				:items="items"
				:loading="loading"
				:sort="sort"
				:has-checkbox="true"
				hide-actions
				@items-selected="selected_ids = $event"
				toolbar-title="Projects"
				@sorted="changeSort"
				@edit="open_edit_dialog"
				@delete="open_delete_dialog"
				@view="navigate_to_view_project($event.id)"
		>

			<template slot="custom-item" slot-scope="item">
				<td class="text-cap clickable-td"
				    @click="navigate_to_view_project(item.item.id)">{{
					item.item.service_name }}
				</td>
				<td class="text-cap">{{ item.item.client_name }}</td>
				<td class="text-cap">{{ item.item.manager_name }}</td>
				<td>{{ item.item.started_at | from_now }}</td>
				<td>
					<v-progress-linear
							color="#1fb868"
							height="5"
							:value="item.item.progress"
					></v-progress-linear>
				</td>
				<td>{{ item.item.total_time }}</td>
				<td class="text-cap">{{ item.item.status }}</td>
			</template>

			<template slot="table-actions">

				<div class="actions-wrapper">

					<div class="bulk-delete">
						<v-btn color="indigo" dark outline
						       :disabled="!show_delete_selected">
							Delete Selected
						</v-btn>
					</div>

					<div class="rows-per-page-dropdown">
						Rows per page:
						<v-select :items="rows_per_page_items" menu-props="auto"
						          v-model="rows_per_page"></v-select>
					</div>

					<div class="pagination" v-show="should_show_pagination">
						<div class="text-xs-center pt-2">
							<v-pagination :length="total_items" :total-visible="5"
							              v-model="page"></v-pagination>
						</div>
					</div>

				</div>
			</template>

		</custom-table>

		<div class="empty-project" v-else>
			<div class="empty-content">
				<div class="empty-svg">
					<svg viewBox="0 0 250 250">
						<path
								d="M28 38l194 0c7,0 14,3 19,8 5,5 9,12 9,19l0 115c0,7 -4,14 -9,19 -5,5 -12,8 -19,8 -21,0 -39,0 -61,0 -3,0 -6,-2 -6,-6 0,-3 3,-6 6,-6l4 0 0 0 57 0c4,0 8,-2 10,-5 3,-2 5,-6 5,-10l0 -115c0,-4 -2,-8 -5,-10 -2,-3 -6,-5 -10,-5l-194 0c-4,0 -8,2 -11,5l0 0c-2,2 -4,6 -4,10l0 115c0,4 2,8 4,10l0 0c3,3 7,5 11,5l57 0 0 0 6 0c4,0 7,3 7,6 0,4 -3,6 -7,6 -22,0 -41,0 -63,0 -8,0 -15,-3 -20,-8l0 0c-5,-5 -8,-12 -8,-19l0 -115c0,-7 3,-14 8,-19l0 0c5,-5 12,-8 20,-8zm99 138c12,0 22,9 22,22 0,12 -10,22 -22,22 -12,0 -22,-10 -22,-22 0,-13 10,-22 22,-22zm-82 -69c4,0 8,3 10,6l64 0c2,-3 6,-6 10,-6 4,0 8,3 10,6l56 0c2,-3 6,-6 10,-6 6,0 11,6 11,12 0,6 -5,12 -11,12 -4,0 -8,-3 -10,-6l-56 0c-2,3 -6,6 -10,6 -4,0 -8,-3 -10,-6l-64 0c-2,3 -6,6 -10,6 -7,0 -12,-6 -12,-12 0,-6 5,-12 12,-12z"/>
					</svg>
				</div>
				<div class="empty-btn">
					<v-btn large dark color="#3b589e" @click="add_dialog = true">Add
						Project
					</v-btn>
				</div>
			</div>
		</div>

	</div>
</template>
<script src="./Projects.js">
</script>
<style lang="scss" scoped src="./Projects.scss">
</style>
