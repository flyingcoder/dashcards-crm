import * as apiTo from './api'
// Components
import TableHeader from '@/common/TableHeader.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import QuestionsFields from './components/QuestionsFields.vue'

export default {
  name: 'ProjectDetails',
  components: { TableHeader, CustomDialog, QuestionsFields },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Forms', disabled: false, router_name: 'forms' },
      { text: 'Project Details', disabled: true, router_name: null }
    ],
    serviceDialog: true,
    service: {
      loading: false,
      items: [],
      selected: null
    },
    dynamicSections: [],
    serviceName : ''
  }),

  created() {
    this.getServices()
  },

  methods: {
    getServices() {
      this.service.loading = true
      apiTo
        .getServices()
        .then(({ data }) => (this.service.items = data))
        .finally(() => (this.service.loading = false))
    },
    save() {
      let selectedService = this.service.items.find(obj => obj.id === this.service.selected);
      this.serviceName = selectedService.name || ''

      apiTo
        .postService(this.service.selected)
        .then(({ data }) => (this.dynamicSections = JSON.parse(data.questions) ))
        .finally(() => (this.serviceDialog = false))
    },
    addNewQuestion() {
      this.dynamicSections.push({
        type: 'Q', //question
        questionField: { placeholder: 'Question', text: '' },
        items: [
          {
            id: 1,
            text: 'Short Answer',
            value: 'short_answer',
            icon: 'short_text',
            showIcon: false
          },
          {
            id: 2,
            text: 'Paragraph',
            value: 'paragraph',
            icon: 'format_align_center',
            showIcon: false
          },
          {
            id: 3,
            text: 'Multiple Choice',
            value: 'multiple_choice',
            icon: 'radio_button_unchecked',
            showIcon: true
          },
          {
            id: 4,
            text: 'Checkboxes',
            value: 'checkboxes',
            icon: 'check_box',
            showIcon: true
          },
          {
            id: 5,
            text: 'Dropdown',
            value: 'dropdown',
            icon: 'arrow_drop_down_circle',
            showIcon: true
          }
        ],
        selected: {
          id: 3,
          text: 'Multiple Choice',
          value: 'multiple_choice',
          icon: 'radio_button_unchecked'
        },
        fields: [],
        shortAnswer: { show: false, text: null },
        longAnswer: { show: false, text: null },
        newFieldText: null
      })
    }
  }
}
