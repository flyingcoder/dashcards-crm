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

<script>
	export default {
		name: 'ServicesEditDialog',

		props: {
			dialog: Boolean,
			title: String,
			isEditDialog: Boolean,
			fieldsToEdit: { type: Object, default: () => {} }
		},

		data: () => ({
			open: false,
			name: null,
		}),

		watch: {
			dialog(new_val) { this.open = new_val },
			open(new_val) { this.$emit('update:dialog', new_val) },
			fieldsToEdit: {
				handler(new_val) {
					this.isEditDialog && this.update_fields(new_val)
				},
				deep: true
			}
		},

		methods: {

			cancel() { this.open = false },
			save() {
				const fields_to_save = {
					name: this.name,
				}
				this.$emit('save', fields_to_save)
			},

			update_fields({fields}) {
				const new_fields = Object.assign({}, fields)
				this.name = new_fields.service_name
			}

		}


	}
</script>

<style scoped>

</style>