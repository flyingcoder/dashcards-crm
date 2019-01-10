<template>
	<div class="clients-table">

		<clients-dialog
				:dialog.sync="add_dialog"
				ref="add_dialog"
				dialog-title="Add Client"
				@save="add_item('add_new_client', $event)"
		 />

		<clients-dialog
				:dialog.sync="edit_dialog"
				ref="edit_dialog"
				title="Edit Client"
				:is-edit-dialog="edit_dialog"
				:fields-to-edit="edit_item"
				@save="update_item('update_client', $event)"
		/>

		<delete-dialog
				:open-dialog.sync="delete_dialog"
				title="Delete Client"
				text-content="Are you sure you want to delete this client?"
				@delete="delete_item('delete_client')"
		/>

		<custom-table
				:headers="headers"
				:items="items"
				:loading="loading"
				:sort="sort"
				:has-checkbox="true"
				hide-actions
				@items-selected="selected_ids = $event"
				toolbar-title="Clients"
				@sorted="changeSort"
		>

			<template slot="custom-item" slot-scope="item">

				<td class="text-xs-right"> <!--TODO fill image with dynamic data from backend-->
					<div class="user__name">
						<v-img max-height="60px" width="50px" :src="require('@/assets/temp/user.png')" /> &nbsp;
						{{ item.item.first_name }}
						{{ item.item.last_name }}
					</div>
				</td>

				<td>{{ item.item.telephone | phoneDisplayForm }}</td>
				<td class="email">{{ item.item.email }}</td>
				<td>{{ item.item.status }}</td>

				<td class="text-xs-center">
					<v-btn fab small flat depressed @click="open_edit_dialog(item.item)">
						<img src="@/assets/icons/groups/edit.svg" alt="">
					</v-btn>
					<v-btn fab small flat depressed @click="open_delete_dialog(item.item)">
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

<script src="./ClientsTable.js">
</script>
<style lang="scss" scoped src="./ClientsTable.scss">
</style>
