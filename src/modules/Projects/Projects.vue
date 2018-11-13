<template>
	<div class="content projects">

		<table-header :paths="paths" @click="add_dialog = true"/>
		<add-project-dialog
				:dialog.sync="add_dialog"
				ref="add_dialog"
				title="Add New Project"
				@save="add_item('add_new_project', $event)"
		/>

		<delete-dialog
				:open-dialog.sync="delete_dialog"
				title="Delete Project"
				text-content="Are you sure you want to delete this project?"
				@delete="delete_item('delete_project')"
		/>

		<div class="content__wrapper">
			<div class="row buzz__tables">
				<div class="buzz__tablesTwo">
					<v-toolbar flat class="table__toolbar">
						<v-toolbar-title class="table__toolbar-title" padding="0">Projects
						</v-toolbar-title>
						<v-spacer></v-spacer>
					</v-toolbar>

					<custom-table
							:headers="headers"
							:items="items"
							:loading="loading"
							:sort="sort"
							:has-checkbox="true"
							:has-header-icon="true"
							hide-actions
							@items-selected="selected_ids = $event"
							@sorted="changeSort"
					>

						<template slot="custom-item" slot-scope="item">
							<td class="text-xs-left pl-5">{{ item.item.service_name }}</td>
							<td class="text-xs-left pl-5">{{ item.item.client_name }}</td>
							<td class="text-xs-left pl-5">{{ item.item.manager_name }}
							<td class="text-xs-left pl-5">{{ item.item.started_at }}
							<td class="text-xs-left pl-5">{{ item.item.progress }}
							<td class="text-xs-left pl-5">{{ item.item.total_time }}
							<td class="text-xs-left pl-5">{{ item.item.status }}
							</td>

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
									Rows per page:
									<v-select :items="rows_per_page_items"
									          menu-props="auto"
									          v-model="rows_per_page"
									></v-select>
								</div>

								<div class="pagination">
									<div class="text-xs-center pt-2">
										<v-pagination :length="total_items"
										              :total-visible="5"
										              v-model="page"
										></v-pagination>
									</div>
								</div>

							</div>
						</template>

					</custom-table>
				</div>
			</div>

		</div>

	</div>
</template>
<script src="./Projects.js"></script>
<style lang="scss" scoped src="./Projects.scss"></style>