<template>
	<v-layout row justify-center>
		<v-dialog v-model="open" persistent max-width="600px">
			<v-card class="template__dialog">

				<v-card-title class="dialog__header">
					<span class="dialog__title">{{ title }}</span>
					<v-btn small fab @click="cancel" class="close__dialog">
						<v-icon dark>close</v-icon>
					</v-btn>
				</v-card-title>

				<v-card-text class="dialog__body">
						<v-layout wrap>
							<v-flex xs12>
								<v-text-field
										class="dialog__textfield"
										label="Add template name"
										v-model.trim="name"
										color="#667187"
										solo
										hide-details
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
</template>

<script src="./MilestoneTemplateDialog.js">
</script>
<style lang="scss" scoped src="./MilestoneTemplateDialog.scss">
</style>
<style scoped src="./MilestoneTemplateDialog.css">
</style>
