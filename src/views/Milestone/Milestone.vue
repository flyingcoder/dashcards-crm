<template>
	<div class="milestone">

		<milestone-dialog
			:dialog.sync="add_dialog"
			ref="add_dialog"
			title="Add Milestone Template"
			@save="add_item('add_new_milestone', $event)"
		/>

		<milestone-dialog
				:dialog.sync="edit_dialog"
				ref="edit_dialog"
				title="Edit Milestone Template"
				is-edit-dialog
				:fields-to-edit="edit_item"
				@save="update_item('edit_milestone', $event)"
		/>

		<delete-dialog
				:open-dialog.sync="delete_dialog"
				title="Delete Template"
				text-content="Are you sure you want to delete this template?"
				@delete="delete_item('delete_milestone')"
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
							<td class="text-xs-center">{{ item.item.name }}</td>
							<td class="text-xs-center">{{ item.item.status }}</td>

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

<script src="./Milestone.js"></script>

<style lang="scss" scoped>
	.milestone {

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

	}
</style>