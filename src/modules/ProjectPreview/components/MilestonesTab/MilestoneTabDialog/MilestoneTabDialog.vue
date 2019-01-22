<template>
	<div class="milestone-dialog">
		<v-layout row justify-center>
			<v-dialog v-model="open" persistent max-width="600px">
				<v-card class="milestone__dialog">

					<v-card-title class="dialog__header">
						<span class="dialog__title">{{ dialogTitle }}</span>
						<v-btn fab small class="close__dialog" @click="cancel">
							<v-icon>close</v-icon>
						</v-btn>
					</v-card-title>

					<v-card-text class="dialog__body">
							<v-layout wrap>

								<v-flex xs12 sm12>
									<v-text-field
											class="dialog__textfield"
											solo
											hide-details
											color="#657186"
											label="Add milestone title"
											v-model.trim="title"
									></v-text-field>
								</v-flex>

								<v-flex xs12 sm6>
									<date-picker
											class="dialog__datepicker"
											solo
											hide-details
											color="#657186"
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
											class="dialog__datepicker"
											solo
											hide-details
											color="#657186"
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
											class="dialog__textfield"
											solo
											hide-details
											color="#657186"
											label="Add days"
											v-model.number="days"
											min="0"
											type="number"
									></v-text-field>
								</v-flex>

							</v-layout>

					</v-card-text>

					<v-card-actions class="dialog__actions">
						<v-btn @click="cancel">Cancel</v-btn>
						<v-btn @click="save">Save</v-btn>
					</v-card-actions>

				</v-card>
			</v-dialog>
		</v-layout>
	</div>
</template>

<script src="./MilestoneTabDialog.js">
</script>
<style lang="scss" scoped src="./MilestoneTabDialog.scss">
</style>
<style scoped src="./MilestoneTabDialog.css">
</style>
