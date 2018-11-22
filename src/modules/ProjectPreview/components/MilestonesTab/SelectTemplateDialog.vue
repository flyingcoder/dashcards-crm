<template>
	<v-layout row justify-center>
		<v-dialog v-model="open" persistent scrollable max-width="600px">
			<v-card>

				<v-progress-linear v-show="loading" :indeterminate="true"></v-progress-linear>

				<v-card-title>
					<v-layout row align-center>
						<v-flex xs10>
							<span>{{ title }}</span>
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

						<v-flex xs12>
							<v-select
									label="Select Template"
									:items="templates"
									item-text="name"
									item-value="id"
									v-model="selected_template"
							></v-select>
						</v-flex>

					</v-layout>
				</v-card-text>

				<v-card-actions>
					<v-btn :disabled="is_disabled" @click="save">Save</v-btn>
				</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
	import request from '@/services/axios_instance'

	export default {
		name: 'SelectTemplateDialog',
		props: {
			open: Boolean,
			title: String
		},

		data: () => ({
			loading: false,
			templates: [],
			selected_template: null
		}),

		computed: {
			is_disabled() { return this.loading || !this.selected_template }
		},

		watch: {
			open(val) { val && this.fill_dropdown() },
		},
		methods: {

			fill_dropdown() {
				this.loading = true
				request.get('api/template?all=true&type=milestone')
					.then(response => this.templates = response.data)
					.finally(() => this.loading = false)
			},

			cancel() {
				this.$emit('update:open', false)
			},

			save() {
				if (this.is_disabled) return
				this.$emit('save', this.selected_template)
			}
		}
	}
</script>

<style scoped>

</style>