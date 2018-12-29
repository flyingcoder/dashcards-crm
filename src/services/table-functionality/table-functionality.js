import { computed } from './computed'
import { methods } from './methods'

export const table_functionality = {
  mixins: [computed, methods],
  data: () => ({
    edit_dialog: false,
    add_dialog: false,
    delete_dialog: false,
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
    rows_per_page: 10,
    page: 1,
    sort: {
      sortBy: null,
      descending: false
    },
    search: ''
  }),

  watch: {
    selected_ids(new_val) {
      new_val.length > 0
        ? (this.show_delete_selected = true)
        : (this.show_delete_selected = false)
    },
    api_query(query) {
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
