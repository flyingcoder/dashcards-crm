import {validations} from "./validations"
import CustomField from '@/common/CustomField/CustomField.vue'
import makeRequestTo from '@/services/makeRequestTo'

import _ from 'lodash'

export default {
	name: 'TeamsDialog',
	mixins: [validations],
	components: { CustomField },
	props: {
		dialog: Boolean,
		title: { type: String, default: 'Default Title' },
		isEditDialog: Boolean,
		editItem: Object
	},

	data: () => ({
		open: false,
		first_name: '',
		last_name: '',
		group_name: '',
		job_title: '',
		email: '',
		contact_number: '',
		password: '',
		repeat_password: '',
		group_items: [ 'Admin', 'Developer', 'Staff', 'Manager' ],
	}),

	watch: {
		dialog(new_val) { this.open = new_val },
		open(new_val) { this.$emit('update:dialog', new_val) },
		editItem(new_val) { new_val && this.update_fields(new_val) }
	},

	methods: {

		cancel() {
			this.open = false
		},

		handle_save() {
			if (this.isEditDialog)
				this.update()
			else
				this.save()
		},

		save() {
			if (this.all_validations_passed()) {
				makeRequestTo.add_new_team(this.get_data_as_object())
					.then(response => {
						this.$emit('new-member-added', response.data)
					})
			}
		},

		update() {
			if (this.all_validations_passed()) {
				let updated_fields = {
					team: this.get_data_as_object(),
					id: this.editItem.id
				}
				makeRequestTo.update_team(updated_fields)
					.then(response => {
						this.$emit('member-updated', response.data)
					})
			}
		},

		get_data_as_object() {
			let obj = {
				first_name: this.first_name,
				last_name: this.last_name,
				group_name: this.group_name,
				job_title: this.job_title,
				email: this.email,
				telephone: this.contact_number,
			}

			if (!this.isEditDialog) {
				obj.password = this.password
				obj.password_confirmation = this.repeat_password
			}

			return obj
		},

		clear_fields() {
				this.first_name = ''
				this.last_name = ''
				this.group_name = ''
				this.job_title = ''
				this.email = ''
				this.contact_number = ''
				this.password = ''
				this.repeat_password = ''
				this.cancel()
		},
		
		update_fields(field) {
			this.first_name = field.first_name
			this.last_name = field.last_name
			this.group_name = field.group_name
			this.job_title = field.job_title
			this.email = field.email
			this.contact_number = field.telephone || ''
		}

	}

}