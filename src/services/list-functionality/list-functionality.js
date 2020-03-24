
import { methods } from './methods'

export const list_functionality = {
  mixins: [ methods],
  data: () => ({
    edit_dialog: false,
    add_dialog: false,
    delete_dialog: false,
    permissionDialog: false,
    loading: false,
    items: [],
    items_response: null,
    edit_item: {
      id: null,
      fields: null
    },
    delete_item_id: null,
    show_delete_selected: false,
    selected_ids: [],
    rows_per_page: null,
    page: 1,
    sort: {
      sortBy: null,
      descending: false
    },
    search: '',
    pagination :{
      current : 1,
      total: 0
    },
    noMoreData: false,
    componentKey: 1,
    view : 'list'
  }),

  watch: {
    selected_ids(new_val) {
      new_val.length > 0
        ? (this.show_delete_selected = true)
        : (this.show_delete_selected = false)
    },
    api_query(query, old_query) {
      const new_per_page = Number(this.extract_per_page(query))
      const old_per_page = Number(this.extract_per_page(old_query)) || null

      if (
        this.items_response &&
        this.rows_per_page === this.items.length &&
        new_per_page !== old_per_page
      )
        return

      this.$router.replace({
        name: this.table_config.route_name,
        query: {
          page: this.page,
          per_page: this.rows_per_page,
          search: this.search,
          sort: this.query_for_sorting
        }
      })
      this.loading = true
      this.refresh_table(query)
    }
  }
}
