export const computed = {
  computed: {
    rows_per_page_items() {
      if (!this.items_response) return []
      const total_rows = this.items_response.total
      const items = [5, 10, 15, 20, 25]
      let rows_per_page = items.filter(item => item <= total_rows)
      if (!rows_per_page.includes(total_rows)) {
        rows_per_page.push(total_rows)
      }

      this.rows_per_page = this.items.length
      return rows_per_page
    },

    should_show_pagination() {
      if (!this.items_response) return false
      return this.items_response.total > this.rows_per_page
    },

    total_items() {
      return this.items_response
        ? Math.ceil(this.items_response.total / this.rows_per_page)
        : 0
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
