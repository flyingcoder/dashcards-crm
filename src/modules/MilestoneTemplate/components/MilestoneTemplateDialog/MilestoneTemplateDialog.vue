<template>
	<v-layout row justify-center>
		<v-dialog v-model="open" persistent max-width="600px">
			<v-card>

				<v-card-title>
					<span class="headline">{{ title }}</span>
				</v-card-title>

				<v-card-text>
					<v-container grid-list-md>
						<v-layout wrap>

							<v-flex xs12 sm6>
								<v-text-field
										label="Add template name"
										v-model.trim="name"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-select
										label="Select Status"
										v-model.trim="status"
										:items="['Active', 'Inactive']"
								></v-select>
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
</template>

<script src="./MilestoneTemplateDialog.js">
</script>
