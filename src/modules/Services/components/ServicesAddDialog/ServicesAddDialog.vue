<template>
	<v-layout row justify-center>
		<v-dialog v-model="open" persistent scrollable max-width="600px">
			<v-card class="addService__dialog">

				<v-card-title>
						<v-layout row align-center>
							<v-flex xs10>
								<span class="dialog__title">{{ title }}</span>
							</v-flex>
							<v-flex xs2 class="text-xs-right">
								<v-btn small fab @click="cancel">
									<v-icon dark>close</v-icon>
								</v-btn>
							</v-flex>
						</v-layout>
				</v-card-title>

				<v-card-text scrollable>
						<v-layout row wrap>

							<v-flex xs10>
									<v-text-field
											label="Untitled Service"
											class="service__input"
											v-model.trim="name"
											@keyup.enter="add_service"
											solo
									></v-text-field>
							</v-flex>

							<v-flex xs2 class="text-xs-right">
								<v-btn class="addService__btn" :depressed="!name" @click="add_service">
									<v-icon :disabled="!name" dark>add</v-icon>
								</v-btn>
							</v-flex>

							<v-flex xs12>
								<v-layout row v-for="(service, index) of services" :key="index">

									<v-flex xs10>
										<v-text-field
												label="Service Name"
												class="service__input"
												v-model.trim="service.name"
												solo
										></v-text-field>
									</v-flex>

									<v-flex xs2 class="text-xs-right">
										<v-btn class="deleteService__btn" @click="delete_service(index)">
											<v-icon dark>delete</v-icon>
										</v-btn>
									</v-flex>

								</v-layout>
							</v-flex>

						</v-layout>
				</v-card-text>

				<v-card-actions class="service__actions">
					<v-btn class="service__actions_btn" @click="save">Save</v-btn>
					<v-btn class="service__actions_btn" @click="cancel">Cancel</v-btn>
				</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script src="./ServicesAddDialog.js">
</script>
<style lang="scss" src="./ServicesAddDialog.scss">
</style>
