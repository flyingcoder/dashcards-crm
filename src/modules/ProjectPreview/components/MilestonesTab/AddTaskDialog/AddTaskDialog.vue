<template>
	<div class="tasks-dialog">
		<v-layout row justify-center>
			<v-dialog v-model="open" persistent max-width="600px">
				<v-card>

					<v-card-title>
						<span class="headline">{{ dialogTitle }}</span>
					</v-card-title>

					<v-card-text>
						<v-container grid-list-md>
							<v-layout wrap>

								<v-flex xs12 md12>
									<v-text-field
											label="Add task title"
											v-model.trim="title"
									></v-text-field>
								</v-flex>

								<v-flex xs12 md6>
									<date-picker
											label="Start Date"
											prepend-icon="event"
											readonly
											:value="start_date"
											@input="start_date_changed"
											:max="end_date"
									/>
								</v-flex>

								<v-flex xs12 md6>
									<date-picker
											label="End Date"
											prepend-icon="event"
											readonly
											:value="end_date"
											@input="end_date_changed"
											:min="start_date"
									/>
								</v-flex>

								<v-flex xs12>
									<members-dropdown :members.sync="members.selected"
									                  :member-items="members.items"
									                  @items-updated="items_updated"
									/>
								</v-flex>

								<v-flex xs12>
									<rich-editor
											placeholder="Description"
											v-model="description"
									/>
								</v-flex>

							</v-layout>
						</v-container>

					</v-card-text>

					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="blue darken-1" flat @click="cancel">Cancel</v-btn>
						<v-btn color="blue darken-1" flat @click="save">Save</v-btn>
					</v-card-actions>

				</v-card>
			</v-dialog>
		</v-layout>
	</div>
</template>

<script src="./AddTaskDialog.js">
</script>
