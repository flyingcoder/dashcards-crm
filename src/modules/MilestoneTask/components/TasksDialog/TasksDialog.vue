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

								<v-flex xs12>
									<v-text-field
											label="Add task title"
											v-model.trim="title"
									></v-text-field>
								</v-flex>

								<v-flex xs5>
									<v-select
											label="Select Group"
											v-model.trim="selected_group"
											:items="group_items"
											item-text="name"
											item-value="id"
									></v-select>
								</v-flex>

								<v-flex xs5>
									<v-select
											label="Select Status"
											v-model.trim="status"
											:items="['Complete', 'Pending', 'Behind', 'Open']"
									></v-select>
								</v-flex>

								<v-flex xs2>
									<v-text-field
											label="Add days"
											v-model.number="days"
											type="number"
											min="0"
									></v-text-field>
								</v-flex>

								<v-flex xs12>
									<v-textarea
											label="Add task description"
											v-model.trim="description"
									></v-textarea>
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

<script src="./TasksDialog.js"></script>

<style lang="scss" scoped>
	.tasks-dialog {

	}
</style>