<template>
	<v-layout row justify-center>
		<v-dialog v-model="dialog" persistent max-width="500px">

			<v-progress-linear v-if="loading"
			                   slot="progress"
			                   color="blue"
			                   indeterminate
			></v-progress-linear>

			<v-card class="custom__dialog" v-else>

				<v-card-title class="dialog__header">
					<slot name="entire-header">

						<slot name="title">
							<span class="dialog__title">{{ title }}</span>
						</slot>

						<slot name="cancel-icon">
							<v-btn fab small class="close__dialog" @click="close_dialog">
								<v-icon>close</v-icon>
							</v-btn>
						</slot>

					</slot>
				</v-card-title>

				<v-card-text class="dialog__body">
					<slot name="content">
						{{ content }}
					</slot>
				</v-card-text>

					<v-card-actions class="dialog__actions">
						<slot name="entire-actions">
							<slot name="button1">
								<v-btn @click="button1clicked">{{button1Text}}</v-btn>
							</slot>
							<slot name="button2">
								<v-btn @click="button2clicked">{{button2Text}}</v-btn>
							</slot>
						</slot>
					</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script src="./CustomDialog.js">
</script>
<style lang="scss" scoped src="./CustomDialog.scss">
</style>
<style scoped src="./CustomDialog.css">
</style>