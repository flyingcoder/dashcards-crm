<template>
	<v-layout row justify-center>
		<custom-dialog  :title="title"
						ref="dialog"
						:open.sync="open"
						button2-text="Save"
						@button1="open = false"
						@button2="save"
		>
			<template slot="content">
				<v-layout wrap class="custom-dialog">

					<v-flex xs12 sm6>
						<v-select
								class="dialog__selectfield"
								:items="permissions"
								v-model.trim="selected_permissions"
								placeholder="Select Permission"
								multiple
								solo
								hide-details
								color="#657186"
						></v-select>
					</v-flex>

					<v-flex xs12 sm6>
						<v-select
								class="dialog__selectfield"
								placeholder="Select Group"
								:items="group_items"
								v-model.trim="selected_group"
								solo
								hide-details
								color="#657186"
								item-text="name"
								item-value="slug"
						></v-select>
					</v-flex>

					<v-flex xs12>
						<v-textarea
								class="dialog__textarea"
								label="Description"
								v-model.trim="description"
								solo
								hide-details
								color="#657186"
						></v-textarea>
					</v-flex>

				</v-layout>

			</template>

		</custom-dialog>
	</v-layout>
</template>

<script src="./PermissionsDialog.js">
</script>

<style lang="scss" scoped src="./PermissionsDialog.scss">
</style>
