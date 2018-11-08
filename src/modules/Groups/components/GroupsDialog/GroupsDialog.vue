<template>
	<v-layout row justify-center>
		<v-dialog v-model="open" persistent max-width="600px">
			<v-card class="permissions-dialog">

				<v-card-title>
					<span class="headline">{{ title }}</span>
				</v-card-title>

				<v-card-text>
					<v-container grid-list-md>
						<v-layout wrap>

							<v-flex xs12 sm12 md12>
								<v-text-field
										v-model.trim="name"
										label="Name"
										:rules="[rules.required]"
								/>
							</v-flex>

							<v-flex xs12 sm12 md12>
								<v-textarea
										label="Description"
										v-model.trim="description"
										hint="Hint text"
										:rules="[rules.required]"
								/>
							</v-flex>

						</v-layout>
					</v-container>

				</v-card-text>

				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" flat @click="cancel">Cancel</v-btn>
					<v-btn color="blue darken-1" :disabled="!are_fields_valid" flat @click="save">Save</v-btn>
				</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>
<script src="./GroupsDialog.js"></script>



<!--<template>-->
	<!--<v-dialog v-model="open" max-width="500px">-->
		<!--<v-card>-->

			<!--<v-card-title>-->
				<!--<span class="headline">{{ title }}</span>-->
			<!--</v-card-title>-->

			<!--<v-card-text>-->

				<!--<v-container grid-list-md>-->
					<!--<v-layout wrap>-->

						<!--<v-flex xs12 sm12 md12>-->
							<!--<v-text-field-->
									<!--v-model.trim="item.name"-->
									<!--label="Name"-->
									<!--:rules="[rules.required]"-->
							<!--/>-->
						<!--</v-flex>-->

						<!--<v-flex xs12 sm12 md12>-->
							<!--<v-textarea-->
									<!--label="Description"-->
									<!--v-model.trim="item.description"-->
									<!--hint="Hint text"-->
									<!--:rules="[rules.required]"-->
							<!--/>-->
						<!--</v-flex>-->

					<!--</v-layout>-->
				<!--</v-container>-->

			<!--</v-card-text>-->

			<!--<v-card-actions>-->
				<!--<v-spacer></v-spacer>-->
				<!--<v-btn color="blue darken-1" flat @click="cancel">Cancel</v-btn>-->
				<!--<v-btn color="blue darken-1" :disabled="!are_fields_valid" flat @click="save">Save</v-btn>-->
			<!--</v-card-actions>-->

		<!--</v-card>-->
	<!--</v-dialog>-->
<!--</template>-->

<!--<script>-->
	<!--export default {-->
		<!--name: 'GroupsDialog',-->
		<!--props: {-->
			<!--modalStatus: Boolean,-->
			<!--title: String,-->
			<!--id: [Number, String],-->
			<!--name: String,-->
			<!--description: String,-->
			<!--dialogContent: String-->
		<!--},-->

		<!--data: () => ({-->
			<!--open: false,-->
			<!--item: {-->
				<!--id: '',-->
				<!--name: '',-->
				<!--description: ''-->
			<!--},-->
			<!--rules: {-->
				<!--required: value => !!value || 'Required.',-->
			<!--}-->
		<!--}),-->

		<!--computed: {-->
			<!--are_fields_valid() {-->
				<!--return !!(this.item.name && this.item.description) && this.does_something_changed-->
			<!--},-->
			<!--does_something_changed() {-->
				<!--if (!this.id)-->
					<!--return true-->
				<!--return !(this.name === this.item.name && this.description === this.item.description)-->
			<!--}-->
		<!--},-->

		<!--watch: {-->
			<!--open(new_val) { this.$emit('update:modalStatus', new_val) },-->
			<!--modalStatus(new_val) { this.open = new_val },-->
			<!--id(new_val) { this.item.id = new_val },-->
			<!--name(new_val) { this.item.name = new_val },-->
			<!--description(new_val) { this.item.description = new_val },-->
		<!--},-->

		<!--methods: {-->

			<!--cancel() {-->
				<!--this.open = false-->
			<!--},-->

			<!--save() {-->
				<!--if (this.item.name && this.item.description) {-->
					<!--if (!this.does_something_changed) {-->
						<!--this.$event.$emit('open_snackbar', 'Nothing Changed!')-->
						<!--return-->
					<!--}-->
					<!--let name = this.item.name-->
					<!--let description = this.item.description-->
					<!--this.$emit('save', { name, description })-->
				<!--}-->
			<!--},-->

			<!--clear_fields() {-->
				<!--this.item = {-->
					<!--name: '',-->
					<!--description: ''-->
				<!--}-->
				<!--this.cancel()-->
			<!--}-->

		<!--},-->

	<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->