<template>
	<v-layout row justify-center>
		<v-dialog v-model="open" persistent max-width="600px">
			<v-card>

				<v-card-title>
					<span class="headline">{{ title }}</span>
				</v-card-title>

				<v-card-text>
					<v-container grid-list-md>
						<v-layout row wrap>

							<v-flex xs10>
									<v-text-field
											label="Service name"
											v-model.trim="name"
											@keyup.enter="add_service"
									></v-text-field>
							</v-flex>

							<v-flex xs2 justify-center>
								<v-btn small fab dark color="indigo" :depressed="!name" @click="add_service">
									<v-icon :disabled="!name" dark>add</v-icon>
								</v-btn>
							</v-flex>

							<v-flex xs12>
								<v-layout row v-for="(service, index) of services">

									<v-flex xs10>
										<v-text-field
												label="Service name"
												v-model.trim="service.name"
										></v-text-field>
									</v-flex>

									<v-flex xs2 justify-center>
										<v-btn small fab dark color="indigo" @click="delete_service(index)">
											<v-icon dark>delete</v-icon>
										</v-btn>
									</v-flex>

								</v-layout>
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

<script src="./ServicesAddDialog.js"></script>