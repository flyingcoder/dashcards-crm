export const computed = {
  computed: {
    rows_per_page_items() {
      const res = this.items_response
      if (!res) return []
      const total_rows = this.items.length
      const remaining_rows = res.total - res.from + 1
      const items = this.calc_per_page_items(total_rows, res.total)

      this.rows_per_page = total_rows
      return items.filter(item => item <= remaining_rows)
    },

    should_show_pagination() {
      if (!this.items_response) return false
      return this.items_response.total > this.rows_per_page
    },

    total_items() {
      if (!this.items_response) return null
      return this.items_response.last_page
    },
    query_for_sorting() {
      if (!this.sort.sortBy) return ''
      return `${this.sort.sortBy}|${this.sort.descending ? 'desc' : 'asc'}`
    },
    api_query() {
      return `page=${this.page}&
							per_page=${this.rows_per_page}&
							search=${this.search}&
							sort=${this.query_for_sorting}`
    }
  }
}
