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
					{ id: 1, text: 'Short Answer', value: 'short_answer', icon: 'short_text' },
					{ id: 2, text: 'Paragraph', value: 'paragraph', icon: 'format_align_center' },
					{ id: 3, text: 'Multiple Choice', value: 'multiple_choice', icon: 'radio_button_unchecked' },
					{ id: 4, text: 'Checkboxes', value: 'multiple_choice', icon: 'check_box' },
					{ id: 5, text: 'Dropdown', value: 'dropdown', icon: 'arrow_drop_down_circle' },
				],
				selected: { id: 3, text: 'Multiple Choice', value: 'multiple_choice', icon: 'radio_button_unchecked' },
				fields: [],
				short_answer: null,
				long_answer: null,
				new_field_text: null
			})
		},

		add_title_and_descriptions() {
			this.dynamic_sections.push({
				type: 'TD', //title & description
				title: { placeholder: 'Untitled Title', text: '' },
				description: { placeholder: 'Descriptions', text: '' }
			})
		},

	}

}