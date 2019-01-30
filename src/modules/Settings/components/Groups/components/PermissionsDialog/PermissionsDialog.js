import makeRequestTo from '@/services/makeRequestTo'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'

export default {
  components: { CustomTable },

  props: {
    groupId: [String, Number]
  },

  data: () => ({
    loading: false,
    items: []
  }),

  created() {
    //exec whenever the dialog opens
    this.loading = true
    makeRequestTo
      .get_group_permissions(this.groupId)
      .then(({ data }) => (this.items = data))
      .finally(() => (this.loading = false))
  },

  methods: {
    close_dialog() {
      this.$emit('close-dialog')
    }
  }
}
