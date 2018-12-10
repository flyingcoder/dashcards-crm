import cloneDeep from 'lodash/cloneDeep'

export default {
  props: {
    sections: Array
  },

  data: () => ({
    dynamic_sections: [],
    form_title: '',
    form_descriptions: ''
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
      const max_id_from_fields = sections[index].fields.reduce(
        (acc, cur) => Math.max(acc, cur.id),
        0
      )
      if (max_id_from_fields > max_id) max_id = max_id_from_fields

      sections[index].fields.push({
        id: max_id,
        icon,
        text
      })
      sections[index].new_field_text = null
      this.dynamic_sections = sections
    },
    delete_field(s_index, f_index) {
      //section index, field index
      let sections = cloneDeep(this.dynamic_sections)
      sections[s_index].fields.splice(f_index, 1)
      this.dynamic_sections = sections
    },
    dropdown_changed(index, event) {
      let sections = cloneDeep(this.dynamic_sections)
      let section = this.default_section()
      if (event.value === 'short_answer') {
        section.short_answer.show = true
      } else if (event.value === 'paragraph') {
        section.long_answer.show = true
      }
      section.selected = event
      sections[index] = section
      this.dynamic_sections = sections
    },
    default_section() {
      return {
        type: 'Q', //question
        question_field: { placeholder: 'Question', text: '' },
        items: [
          {
            id: 1,
            text: 'Short Answer',
            value: 'short_answer',
            icon: 'short_text',
            show_icon: false
          },
          {
            id: 2,
            text: 'Paragraph',
            value: 'paragraph',
            icon: 'format_align_center',
            show_icon: false
          },
          {
            id: 3,
            text: 'Multiple Choice',
            value: 'multiple_choice',
            icon: 'radio_button_unchecked',
            show_icon: true
          },
          {
            id: 4,
            text: 'Checkboxes',
            value: 'checkboxes',
            icon: 'check_box',
            show_icon: true
          },
          {
            id: 5,
            text: 'Dropdown',
            value: 'dropdown',
            icon: 'arrow_drop_down_circle',
            show_icon: true
          }
        ],
        selected: {
          id: 3,
          text: 'Multiple Choice',
          value: 'multiple_choice',
          icon: 'radio_button_unchecked'
        },
        fields: [],
        short_answer: { show: false, text: null },
        long_answer: { show: false, text: null },
        new_field_text: null
      }
    }
  }
}
