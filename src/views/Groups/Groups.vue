<template>
	<v-container fluid>
		<v-layout row>
			<v-flex xs12>

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

						<v-dialog v-model="add_new_group_dialog" max-width="500px">
							<v-card>
								<v-card-title>
									<span class="headline">Add New Group</span>
								</v-card-title>

								<v-card-text>
									<v-container grid-list-md>
										<v-layout wrap>

											<v-flex xs12 sm12 md12>
												<v-text-field
														v-model.trim="new_item.name"
														label="Name"
														:rules="[rules.required]"
												/>
											</v-flex>

											<v-flex xs12 sm12 md12>
												<v-textarea
														label="Description"
														v-model.trim="new_item.description"
														hint="Hint text"
														:rules="[rules.required]"
												/>
											</v-flex>

										</v-layout>
									</v-container>
								</v-card-text>

								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="blue darken-1" flat @click="close_add_new_group_dialog">Cancel</v-btn>
									<v-btn color="blue darken-1" flat @click="save_add_new_group_dialog">Save</v-btn>
								</v-card-actions>

							</v-card>
						</v-dialog>

					</v-card-title>

					<custom-table
							:headers="headers"
							:items="rows"
							:loading="loading"
							:total-items="total_items"
							:rows-per-page-items="rows_per_page"
							:search="search"
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
												@click="action_clicked"
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