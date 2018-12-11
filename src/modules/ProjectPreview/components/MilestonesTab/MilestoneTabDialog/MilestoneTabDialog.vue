<template>
	<div class="milestone-dialog">
		<v-layout row justify-center>
			<v-dialog v-model="open" persistent max-width="600px">
				<v-card>

					<v-card-title>
						<span class="headline">{{ dialogTitle }}</span>
					</v-card-title>

					<v-card-text>
						<v-container grid-list-md>
							<v-layout wrap justify-center>

								<v-flex xs12 sm6>
									<v-text-field
											label="Add milestone title"
											v-model.trim="title"
									></v-text-field>
								</v-flex>

								<v-flex xs12 sm6>
									<v-select
											label="Select Status"
											v-model.trim="status"
											:items="['Active', 'Inactive']"
									></v-select>
								</v-flex>

								<v-flex xs12 sm6>
									<date-picker
											label="Start Date"
											prepend-icon="event"
											readonly
											:value="start_date"
											@input="start_date_changed"
											:max="end_date"
									/>
								</v-flex>

								<v-flex xs12 sm6>
									<date-picker
											label="End Date"
											prepend-icon="event"
											readonly
											:value="end_date"
											@input="end_date_changed"
											:min="start_date"
									/>
								</v-flex>

								<v-flex xs12 sm6>
									<v-text-field
											label="Add days"
											v-model.number="days"
											min="0"
											type="number"
									></v-text-field>
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

<script src="./MilestoneTabDialog.js">
</script>
