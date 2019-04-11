import TableHeader from '@/common/TableHeader.vue'

export default {
  name: 'ProjectDetails',
  components: { TableHeader },

  data: () => ({
    paths: [
      { text: 'Dashboard', disabled: false, router_name: 'default-content' },
      { text: 'Forms', disabled: false, router_name: 'forms' },
      { text: 'Project Details', disabled: true, router_name: null }
    ]
  })
}
