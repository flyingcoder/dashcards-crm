export default {
  name: 'CustomTable',
  inheritAttrs: false,

  props: {
    headers: Array,
    items: Array,
    loading: Boolean,
    hasCheckbox: Boolean,
    hasHeaderIcon: Boolean,
    sort: Object,
    toolbarTitle: String,
    noRowEdit: Boolean,
    noRowDelete: Boolean,
    noRowView: Boolean
  },

  data: () => ({
    selected: []
  }),

  watch: {
    selected(newVal) {
      const selected_ids = newVal.map(item => item.id)
      this.$emit('items-selected', selected_ids)
    }
  },

  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    },

    changeSort(column) {
      this.$emit('sorted', column)
    },

    headerClasses(header) {
      let classes = ['column']

      if ('sortable' in header) {
        classes.push('sortable')
        this.sort.descending ? classes.push('desc') : classes.push('asc')
        if (header.value === this.sort.sortBy) classes.push('active')
      }

      return classes
    }
  }
}
