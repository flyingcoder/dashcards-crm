<template>
	<div class="groups">
		<component :is="permissions_dialog" @close-dialog="permissions_dialog = ''" something="bla"></component>
		<v-container fluid>
			<v-layout row>
				<v-flex xs12>

					<v-card>
						<v-card-title>
							<v-flex xs12 md4>
								<v-text-field
										placeholder="Search on the table"
										append-icon="search"
										v-model.trim="search"
										@keydown.esc="search = ''"
								></v-text-field>
							</v-flex>
						</v-card-title>

						<custom-table
								:headers="headers"
								:items="items"
								:loading="loading"
								:sort="sort"
								:has-checkbox="true"
								hide-actions
								@items-selected="selected_ids = $event"
								@sorted="changeSort"
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
	</div>
</template>

<script src="./Groups.js"></script>
<style lang="scss" scoped src="./Groups.scss"></style>