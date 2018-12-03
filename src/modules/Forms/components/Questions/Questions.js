import cloneDeep from 'lodash/cloneDeep'

export default {
	props: {
		sections: Array
	},

	data: () => ({
		dynamic_sections: [],
	}),

	watch: {
		sections: {
			handler(val) {
				this.dynamic_sections = cloneDeep(val)
			},
			immediate: true
		}
	},

	methods: {
		add_new_field(index) {
			let sections = cloneDeep(this.dynamic_sections)
			let max_id = 1
			const icon = sections[index].selected.icon
			const text = sections[index].new_field_text
			const max_id_from_fields = sections[index].fields.reduce((acc, cur) => Math.max(acc, cur.id), 0)
			if (max_id_from_fields > max_id)
				max_id = max_id_from_fields

			sections[index].fields.push({
				id: max_id,
				icon,
				text
			})
			sections[index].new_field_text = null
			this.dynamic_sections = sections
		},
		delete_field(s_index, f_index) { //section index, field index
			let sections = cloneDeep(this.dynamic_sections)
			sections[s_index].fields.splice(f_index, 1)
			this.dynamic_sections = sections
		}
	},

}