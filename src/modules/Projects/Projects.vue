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
				:headers="headers"
				:items="items"
				:loading="loading"
				:sort="sort"
				:has-checkbox="true"
				:has-header-icon="true"
				hide-actions
				@items-selected="selected_ids = $event"
				toolbar-title="Projects"
				@sorted="changeSort"
		>

			<template slot="custom-item" slot-scope="item">
				<td>{{ item.item.service_name }}</td>
				<td>{{ item.item.client_name }}</td>
				<td>{{ item.item.manager_name }}</td>
				<td>{{ item.item.started_at }}</td>
				<td>
					<v-progress-linear
							color="#1fb868"
							height="5"
							:value="item.item.progress"
					></v-progress-linear>
				</td>
				<td>{{ item.item.total_time }}</td>
				<td>{{ item.item.status }}</td>

				<td class="text-xs-center table__actions">

					<v-btn fab small flat depressed
						@click="open_edit_dialog(item.item)"
					>
						<img src="@/assets/icons/groups/edit.svg" alt="">
					</v-btn>

					<v-btn fab small flat depressed
						@click="open_delete_dialog(item.item)"
					>
						<img src="@/assets/icons/groups/delete.svg" alt="">
					</v-btn>

					<v-btn fab flat small depressed
			       @click="navigate_to_view_project(item.item.id)"
					>
						<v-icon>pageview</v-icon>
					</v-btn>

				</td>
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

					<div class="pagination" v-show="should_show_pagination">
						<div class="text-xs-center pt-2">
							<v-pagination :length="total_items" :total-visible="5" v-model="page"></v-pagination>
						</div>
					</div>

				</div>
			</template>

	</custom-table>

	</div>
</template>
<script src="./Projects.js">
</script>
<style lang="scss" scoped src="./Projects.scss">
</style>
