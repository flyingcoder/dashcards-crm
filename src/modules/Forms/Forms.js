export default {
	components: {
		Questions: () => import('./components/Questions/Questions.vue')
	},

	data: () => ({
		active_tab: 'Questions',
		tabs: [
			{ id: 1, name: 'Questions' },
			{ id: 2, name: 'Answers' },
		],
		dynamic_sections: []
	}),

	methods: {

		add_new_question() {
			this.dynamic_sections.push({
				type: 'Q', //question
				question_field: { placeholder: 'Question', text: '' },
				items: [
					{ id: 1, text: 'Short Answer', value: 'short_answer', icon: 'short_text', show_icon: false },
					{ id: 2, text: 'Paragraph', value: 'paragraph', icon: 'format_align_center', show_icon: false },
					{ id: 3, text: 'Multiple Choice', value: 'multiple_choice', icon: 'radio_button_unchecked', show_icon: true },
					{ id: 4, text: 'Checkboxes', value: 'checkboxes', icon: 'check_box', show_icon: true },
					{ id: 5, text: 'Dropdown', value: 'dropdown', icon: 'arrow_drop_down_circle', show_icon: true },
				],
				selected: { id: 3, text: 'Multiple Choice', value: 'multiple_choice', icon: 'radio_button_unchecked' },
				fields: [],
				short_answer: { show: false, text: null },
				long_answer: { show: false, text: null },
				new_field_text: null
			})
		},

		add_title_and_descriptions() {
			this.dynamic_sections.push({
				type: 'TD', //title & description
				title: { placeholder: 'Enter Title', text: '' },
				description: { placeholder: 'Descriptions', text: '' }
			})
		},

	}

}