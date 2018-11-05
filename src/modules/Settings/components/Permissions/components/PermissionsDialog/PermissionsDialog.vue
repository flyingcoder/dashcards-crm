<template>
		<v-layout row justify-center>
		<v-dialog v-model="open" persistent max-width="600px">
			<v-card class="permissions-dialog">

				<v-card-title>
					<span class="headline">{{ title }}</span>
				</v-card-title>

				<v-card-text>
					<v-container grid-list-md>
						<v-layout wrap>

							<v-flex xs12 sm6>
								<v-text-field
										label="Name"
										v-model.trim="name"
								></v-text-field>
							</v-flex>

							<v-flex xs12 sm6>
								<v-text-field
										label="Description"
										v-model.trim="description"
								></v-text-field>
							</v-flex>

							<div class="permissions">

								<div class="title">
									<div class="left-line line"></div>
									<h4>Permissions</h4>
									<div class="right-line line"></div>
								</div>

								<div class="items">
											<v-switch
													label="Create"
													v-model="slug.create"
											></v-switch>
											<v-switch
													label="View"
													v-model="slug.view"
											></v-switch>
											<v-switch
													label="Update"
													v-model="slug.update"
											></v-switch>
											<v-switch
													label="Delete"
													v-model="slug.delete"
											></v-switch>
								</div>

							</div>

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

<script src="./PermissionsDialog.js"></script>

<style lang="scss" scoped src="./PermissionsDialog.scss"></style>