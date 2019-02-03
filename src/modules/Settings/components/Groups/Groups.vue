<template>
	<div class="groups">

		<component :is="permissions_dialog"
		           @close-dialog="permissions_dialog = ''"
		           :group-id="group_id"
		></component>

		<groups-dialog
				:dialog.sync="add_dialog"
				ref="add_dialog"
				title="Add Group"
				@save="add_item('add_new_group', $event)"
		/>
		<groups-dialog
				:dialog.sync="edit_dialog"
				ref="edit_dialog"
				title="Edit Group"
				:is-edit-dialog="edit_dialog"
				:fields-to-edit="edit_item"
				@save="update_item('update_group', $event)"
		/>

		<delete-dialog
				:open-dialog.sync="delete_dialog"
				title="Delete Group"
				text-content="Are you sure you want to delete this group?"
				@delete="delete_item('delete_group')"
		/>

		<v-container fluid>
			<v-layout row>
				<v-flex xs12>

					<table-header :paths="paths" @click="add_dialog = true"/>

					<v-card>
						<v-card-title>
							<v-flex xs12 md4>
								<v-text-field
										placeholder="Search on the table"
										append-icon="search"
										@input="debounce"
										:value="search"
										@keydown.esc="search = ''"
								></v-text-field>
							</v-flex>
						</v-card-title>

						<custom-table
								:headers="headers"
								:items="indexes_items"
								:loading="loading"
								:sort="sort"
								:has-checkbox="true"
								hide-actions
								@items-selected="selected_ids = $event"
								toolbar-title="Groups"
								@sorted="changeSort"
						>

							<template slot="custom-item" slot-scope="{item}">
								<td class="text-xs-center">{{item.index}}</td>
								<td class="text-xs-center">{{item.name}}</td>
								<td class="text-xs-center">{{item.description}}</td>
								<td class="actions">
									<template v-for="action of get_actions(item.slug)">
										<template
												v-if="is_edit_or_delete_action(item.value) && item.company_id">
											<v-tooltip bottom :key="action.value">
												<v-btn
														slot="activator"
														color="blue"
														@click="action_clicked(action.value, item)"
												>
													<img :src="action.icon"/> &nbsp;
													{{ action.text }}
												</v-btn>
												<span>{{action.tooltip}}</span>
											</v-tooltip>
										</template>
									</template>
								</td>
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

									<div class="pagination">
										<div class="text-xs-center pt-2">
											<v-pagination :length="total_items" :total-visible="5"
											              v-model="page"></v-pagination>
										</div>
									</div>

								</div>
							</template>

						</custom-table>
					</v-card>

				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script src="./Groups.js">
</script>
<style lang="scss" scoped src="./Groups.scss">
</style>
