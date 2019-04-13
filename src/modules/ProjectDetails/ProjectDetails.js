import * as apiTo from './api'
// Components
import TableHeader from '@/common/TableHeader.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  name: 'ProjectDetails',
  components: { TableHeader, CustomDialog },

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
    }
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
      apiTo.postService(this.service.selected)
    }
  }
}
