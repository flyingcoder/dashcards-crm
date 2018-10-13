<template>
	<v-layout row justify-center>
		<v-dialog v-model="dialog" persistent max-width="500px">

			<v-card>

				<v-card-title>
					<span class="headline">{{ title }}</span>
				</v-card-title>

				<v-card-text>
					{{ textContent }}
				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" flat @click="cancel_clicked">{{cancelButtonText}}</v-btn>
					<v-btn color="blue darken-1" flat @click="delete_clicked">{{deleteButtonText}}</v-btn>
				</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
	export default {
		name: 'DeleteModal',
		props: {
			title: { type: String, default: 'Default Modal Title' },
			textContent: { type: String, default: 'Default Modal Text Content' },
			cancelButtonText: { type: String, default: 'Cancel' },
			deleteButtonText: { type: String, default: 'Delete' },
			openDialog: Boolean
		},

		data: () => ({
			dialog: false
		}),

		watch: {
			openDialog(new_val) { this.dialog = new_val },
			dialog(new_val) { this.$emit('update:openDialog', new_val) }
		},

		methods: {
			cancel_clicked() { this.dialog = false },
			delete_clicked() { this.$emit('delete') },
		}

	}
</script>