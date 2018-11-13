<template>
  <div class="permissions-table">

	  <permissions-dialog
			  :dialog.sync="add_dialog"
			  ref="add_dialog"
			  title="Add Permission"
			  @save="add_item('add_new_permission', $event)"
	  />

	  <permissions-dialog
			  :dialog.sync="edit_dialog"
			  ref="edit_dialog"
			  title="Edit Permission"
			  :is-edit-dialog="edit_dialog"
			  :fields-to-edit="edit_item"
			  @save="update_item('update_permission', $event)"
	  />

	  <delete-dialog
			  :open-dialog.sync="delete_dialog"
			  title="Delete Permission"
			  text-content="Are you sure you want to delete this permission?"
			  @delete="delete_item('delete_permission')"
	  />

	  <table-header :paths="paths" @click="add_dialog = true" />

    <custom-table
		:headers="headers"
		:items="items"
		:loading="loading"
		:sort="sort"
		:has-checkbox="true"
		:has-header-icon="true"
		hide-actions
		@items-selected="selected_ids = $event"
		toolbar-title="Permissions"
		@sorted="changeSort"
	>

		<template slot="custom-item" slot-scope="item">
			<td>{{ item.item.name }}</td>

			<td>{{ item.item.description }}</td>

			<td>{{ capability_column(item.item.slug) }}</td>

			<td class="text-xs-center">

				<v-btn fab small color="blue" depressed
						@click="open_edit_dialog(item.item)"
				>
					<img src="@/assets/icons/groups/edit.svg" alt="">
				</v-btn>

				<v-btn fab small color="blue" depressed
						@click="open_delete_dialog(item.item)"
				>
					<img src="@/assets/icons/groups/delete.svg" alt="">
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

				<div class="pagination">
					<div class="text-xs-center pt-2">
						<v-pagination :length="total_items" :total-visible="5" v-model="page"></v-pagination>
					</div>
				</div>

			</div>
		</template>

	</custom-table>

  </div>
</template>
<script src="./Permissions.js"></script>
<style lang="scss" scoped src="./Permissions.scss"></style>