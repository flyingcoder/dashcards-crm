<template>
	<v-container fluid>
		<v-layout row>
			<v-flex xs12>

				<breadcrumb :paths="paths" />

				<v-card>
					<v-card-title>
						<v-text-field
								placeholder="Search on the table"
								append-icon="search"
								v-model.trim="search"
								@keydown.esc="search = ''"
						></v-text-field>

						<v-spacer></v-spacer>
						<v-spacer></v-spacer>
						<v-spacer></v-spacer>

						<v-btn @click="add_new_group_dialog = true">Add New Group</v-btn>

						<groups-dialog
								:modal-status.sync="add_new_group_dialog"
								title="Add New Group"
								ref="add_group_dialog"
								@save="add_new_group"
						/>

						<groups-dialog
								:modal-status.sync="edit_group_dialog"
								title="Edit Group"
								ref="edit_group_dialog"
								:id="edit_item.id"
								:name="edit_item.name"
								:description="edit_item.description"
								@save="update_group"
						/>


						<delete-dialog
								:open-dialog.sync="delete_group_dialog"
								title="Delete Group"
								text-content="Are you sure you want to delete this group?"
								@delete="delete_group"
						/>

						<!--<groups-dialog-->
								<!--:modal-status.sync="delete_group_dialog"-->
								<!--title="Delete Group"-->
								<!--dialog-content="Are you sure you want to delete this group?"-->
								<!--does-not-has-fields-->
								<!--ref="delete_group_dialog"-->
								<!--@save="delete_group"-->
						<!--/>-->

					</v-card-title>

					<custom-table
							:headers="headers"
							:items="rows"
							:loading="loading"
							:total-items="total_items"
							:rows-per-page-items="[10, 15]"
							:search="search"
							:pagination.sync="pagination"
					>

						<template slot="custom-item" slot-scope="item">
							<td class="text-xs-center">{{item.item.id}}</td>
							<td class="text-xs-center">{{item.item.name}}</td>
							<td class="text-xs-center">{{item.item.description}}</td>
							<td class="actions">
								<template v-for="action of get_actions(item.item.slug)">
									<v-tooltip bottom>
										<v-btn
												slot="activator"
												color="blue"
												@click="action_clicked(action.value, item.item)"
										>
											<img :src="action.icon"/> &nbsp;
											{{ action.text }}
										</v-btn>
										<span>{{action.tooltip}}</span>
									</v-tooltip>
								</template>
							</td>
						</template>

					</custom-table>
				</v-card>

			</v-flex>
		</v-layout>
	</v-container>
</template>

<script src="./Groups.js"></script>
<style lang="scss" scoped src="./Groups.scss"></style>