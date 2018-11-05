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
										label="First Name"
										v-model.trim="first_name"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-text-field
										label="Last Name"
										v-model.trim="last_name"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-text-field
										label="Company Name"
										v-model.trim="company_name"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-text-field
										label="Telephone"
										v-model.trim="telephone"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-text-field
										label="Email"
										v-model.trim="email"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-select
										label="Status"
										v-model.trim="status"
										:items="status_items"
								></v-select>
							</v-flex>

							<v-flex xs12 sm6 v-if="!isEditDialog">
								<v-text-field
										label="Password"
										v-model.trim="password"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6 v-if="!isEditDialog">
								<v-text-field
										label="Repeat Password"
										v-model.trim="repeat_password"
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
</template>

<script src="./ClientsDialog.js"></script>