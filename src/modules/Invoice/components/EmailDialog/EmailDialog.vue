<template>
	<v-layout row justify-center>
		<v-dialog v-model="open" persistent max-width="600px">
			<v-card class="email__dialog">

				<v-card-title class="dialog__header">
					<span class="dialog__title">Send Invoice Options</span>
					<v-btn fab small class="close__dialog" @click="clear_and_close">
						<v-icon>close</v-icon>
					</v-btn>
				</v-card-title>

				<v-card-text class="dialog__body">
						<v-layout wrap>

							<v-flex xs12>
								<v-select
										class="dialog__selectfield"
										label="Status"
										:items="status_items"
										v-model="selected_status"
										solo
										hide-details
										color="#657186"
								></v-select>
							</v-flex>

						</v-layout>

				</v-card-text>

				<v-card-actions class="dialog__actions">
					<v-btn @click="clear_and_close">Cancel</v-btn>
					<v-btn :disabled="status_disabled" @click="save">Save</v-btn>
				</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script src="./EmailDialog.js">
</script>
<style lang="scss" scoped src="./EmailDialog.scss">
</style>
<style scoped src="./EmailDialog.css">
</style>
