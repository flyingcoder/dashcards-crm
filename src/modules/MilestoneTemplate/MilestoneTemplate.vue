<template>
	<div class="milestone-template">


		<milestone-template-dialog
			:dialog.sync="add_dialog"
			ref="add_dialog"
			title="Add Milestone Template"
			@save="add_item('add_new_milestone_template', $event)"
		/>

		<milestone-template-dialog
				:dialog.sync="edit_dialog"
				ref="edit_dialog"
				title="Edit Milestone Template"
				:is-edit-dialog="edit_dialog"
				:fields-to-edit="edit_item"
				@save="update_item('edit_milestone_template', $event)"
		/>

		<delete-dialog
				:open-dialog.sync="delete_dialog"
				title="Delete Template"
				text-content="Are you sure you want to delete this template?"
				@delete="delete_item('delete_milestone_template')"
		/>

		<v-container>
			<v-layout row>
				<v-flex xs12>

					<table-header :paths="paths" @click="add_dialog = true" />

					<custom-table
							:headers="headers"
							:items="items"
							:loading="loading"
							:sort="sort"
							:has-checkbox="true"
							hide-actions
							@items-selected="selected_ids = $event"
							toolbar-title="Milestone Templates"
							@sorted="changeSort"
					>
						<template slot="custom-item" slot-scope="item"> <!-- Table Items -->
							<td>{{ item.item.name }}</td>
							<td>{{ item.item.status }}</td>

							<td class="text-xs-center">
								<v-icon class="mr-2" @click="open_edit_dialog(item.item)">
									edit
								</v-icon>

								<v-icon class="mr-2" @click="open_delete_dialog(item.item)">
									delete
								</v-icon>

								<v-icon @click="navigate_to_milestone_page(item.item)" title="Open milestone table">
									pageview
								</v-icon>

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
				</v-flex>
			</v-layout>
		</v-container>

	</div>
</template>

<script src="./MilestoneTemplate.js"></script>

<style lang="scss" scoped>
	@import '~@/sass/_variables';

	.milestone-template {
		.cell-with-icon {
			display: flex;
			justify-content: center;
			align-items: center;

			.milestone-icon {
				display: flex;

				img {
					width: auto;
					height: 40px;
				}
			}
		}

		@include customTableRow; //css used for styling the last row of the table

	}
</style>