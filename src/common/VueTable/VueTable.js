import Empty from '@/common/Empty.vue'
import _cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'VueTable',
  components: {
    Empty
  },
  props: {
    title: { type: String, default: '' },
    items: { type: Array, default: [] },
    headers: { type: Array, default: [] },
    showRowActions: { type: Boolean, default: false },
    sortingEnable: { type: Boolean, default: false },
    hasSearch: { type: Boolean, default: false },
    hasFooter: { type: Boolean, default: true },
    hasHeader: { type: Boolean, default: true },
    showSelect: { type: Boolean, default: true },
    icon: String,
    noMoreData: { type: Boolean, default: false },
    noRowEdit: { type: Boolean, default: false },
    noRowDelete: { type: Boolean, default: false },
    noRowView: { type: Boolean, default: false }
  },
  data: () => ({
    itemsPerPage: 1000,
    dialog: false,
    editedIndex: -1,
    editedItem: {},
    defaultItem: {},
    sortby: false,
    computedHeaders: [],
    search: '',
    page: 1,
    can_bulk_delete: false,
    btnloading: false,
    selected: []
  }),

  created() {
    this.$event.$on('btnloading_off', () => (this.btnloading = false))
    this.$event.$on('clear_selected', () => (this.selected = []))
  },
  methods: {
    handleSelectAllToggle(event) {
      this.can_bulk_delete = event.value
    },
    handleLoadMore() {
      this.btnloading = true
      this.$emit('load-more')
    }
  }
}
