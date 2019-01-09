<template>
	<div class="reports">

		<reports-list />

		<div class="body-wrapper">
			<custom-dialog
					ref="dialog"
					title="Add Link"
			>
				<template slot="content">
					<div class="custom-dialog">
						<v-text-field
								class="textfield"
								pattern="https://.*"
								type="url"
								v-model.trim="link"
								prepend-icon="link"
								label="https://"
								clearable
								@keydown="validate_url"
								solo
								hide-details
								color="#657186"
						/>
						<v-text-field
								v-model.trim="title"
								class="textfield"
								label="Title"
								solo
								clearable
								hide-details
								prepend-icon="text_fields"
								color="#657186"
						/>
					</div>
				</template>

				<template slot="button2">
					<div class="disable-btn">
						<v-btn @click="on_dialog_save" :disabled="is_disabled">Save</v-btn>
					</div>
				</template>

			</custom-dialog>
			<div class="reports__body">
				<div class="reports__buttons">
					<div class="reports__option">

						<v-btn large color="#3b589e"
						       class="add__link"
						       @click="open_dialog"
						>
							Add Link
						</v-btn>

						<v-btn large color="#3b589e"
						       :disabled="!activate_save"
						       class="save"
						       @click="save_report"
						>
							Save
						</v-btn>

						<v-btn fab flat small class="sort__option">
							<v-icon>more_horiz</v-icon>
						</v-btn>

					</div>
				</div>
				<div class="reports__content" v-if="iframe_src">
					<iframe :src="iframe_src"
					        frameborder="0"
					        width="100%"
					        height="500px"
					        @load="iframe_loaded"
					></iframe>
				</div>
			</div>
		</div>
	</div>
</template>

<script src="./Reports.js">
</script>
<style scoped lang="scss" src="./Reports.scss">
</style>
