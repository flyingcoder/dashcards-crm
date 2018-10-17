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
										@blur="on_blur_field('first_name')"
										:error="$v.first_name.$error"
										label="First Name"
										v-model.trim="first_name"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-text-field
										@blur="on_blur_field('last_name')"
										:error="$v.last_name.$error"
										label="Last Name"
										v-model.trim="last_name"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-select
										@blur="on_blur_field('group_name')"
										:error="$v.group_name.$error"
										label="Group Name"
										v-model.trim="group_name"
										:items="group_items"
								></v-select>
							</v-flex>

							<v-flex xs12 sm6>
								<v-text-field
										@blur="on_blur_field('job_title')"
										:error="$v.job_title.$error"
										label="Job Title"
										v-model.trim="job_title"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-text-field
										@blur="on_blur_field('email')"
										:error="$v.email.$error"
										label="Email"
										v-model.trim="email"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-text-field
										@blur="on_blur_field('contact_number')"
										:error="$v.contact_number.$error"
										label="Contact Number"
										mask="phone"
										v-model.trim="contact_number"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6 v-if="!isEditDialog">
								<v-text-field
										@blur="on_blur_field('password')"
										:error="$v.password.$error"
										:append-icon="show_password ? 'visibility_off' : 'visibility'"
										label="Password"
										:type="show_password ? 'text' : 'password'"
										v-model.trim="password"
										@click:append="show_password = !show_password"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6 v-if="!isEditDialog">
								<v-text-field
										@blur="on_blur_field('repeat_password')"
										:error="$v.repeat_password.$error"
										:append-icon="show_repeat_password ? 'visibility_off' : 'visibility'"
										label="Repeat Password"
										:type="show_repeat_password ? 'text' : 'password'"
										v-model.trim="repeat_password"
										@click:append="show_repeat_password = !show_repeat_password"
								></v-text-field>
							</v-flex>

						</v-layout>
					</v-container>

					<small>All fields are required</small>

				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" flat @click="cancel">Cancel</v-btn>
					<v-btn color="blue darken-1" flat :disabled="$v.$invalid" @click="handle_save">Save</v-btn>
				</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script src="./TeamsDialog.js"></script>

