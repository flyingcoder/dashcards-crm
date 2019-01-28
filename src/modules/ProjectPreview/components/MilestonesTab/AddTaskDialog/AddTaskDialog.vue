<template>
	<div class="tasks-dialog">
		<v-layout row justify-center>
			<v-dialog v-model="open" persistent max-width="600px">
				<v-card class="task-dialog">

					<v-card-title class="dialog__header">
						<span class="dialog__title">{{ dialogTitle }}</span>
						<v-btn fab small class="close__dialog" @click="cancel">
							<v-icon>close</v-icon>
						</v-btn>
					</v-card-title>

					<v-card-text class="dialog__body">
						<v-layout wrap>

							<v-flex xs12 md12>
								<v-text-field
										class="dialog__textfield"
										label="Add task title"
										v-model.trim="title"
										solo
										hide-details
										color="#657186"
								></v-text-field>
							</v-flex>

							<v-flex xs12 md6>
								<date-picker
										class="task-date"
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
										class="task-date"
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
													:is-loading="members.loading"
													@search="filter_dropdown_items('members', $event)"
													class="task-member"
								/>
							</v-flex>

							<v-flex xs12>
								<rich-editor
										placeholder="Description"
										v-model="description"
										class="task-description"
								/>
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

<script src="./AddTaskDialog.js">
</script>
<style lang="scss" scoped src="./AddTaskDialog.scss">
</style>
<style scoped src="./AddTaskDialog.css">
</style>
