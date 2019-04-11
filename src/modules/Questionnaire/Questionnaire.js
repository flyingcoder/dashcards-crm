import TableHeader from '@/common/TableHeader.vue'

export default {
  name: 'Questionnaire',
  components: { TableHeader },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Forms', disabled: false, router_name: 'forms' },
      { text: 'Questionnaire', disabled: true, router_name: null }
    ]
  })
}
