import _debounce from 'lodash/debounce'
import makeRequestTo from '@/services/makeRequestTo'

export const methods = {
  methods: {
    add_item(api_name, item, dynamic_api = null) {
      makeRequestTo[api_name](item, dynamic_api)
        .catch(() => {
          this.$event.$emit('btnloading_off', false)
        })
        .then(response => {
          const new_items = response.data
          if (Array.isArray(new_items)) {
            new_items
              .reverse()
              .forEach(new_item => this.items.unshift(new_item))
          } else {
            this.items.unshift(new_items)
          }
          this.$refs.add_dialog.clear_and_close()
          this.$event.$emit('open_snackbar', this.table_config.add_message)
          this.$event.$emit('btnloading_off', false)
        })
    },

    extract_per_page(string) {
      const starts = string.search('per_page')
      return string.substring(starts + 9, starts + 10)
    },

    calc_per_page_items(page_rows, total_rows) {
      const items = [5, 10, 15, 20, 25]

      if (!items.includes(page_rows)) items.push(page_rows)

      if (!items.includes(total_rows) && total_rows <= 25)
        items.push(total_rows)

      return items
    },

    update_item(api_name, item, dynamic_api = null) {
      makeRequestTo[api_name](this.edit_item.id, item, dynamic_api)
        .catch(() => {
          this.$event.$emit('btnloading_off', false)
        })
        .then(response => {
          const index = this.items.findIndex(
            data_item => data_item.id === response.data.id
          )
          if (~index) this.items.splice(index, 1, response.data)
          this.edit_item = {
            id: null,
            fields: null
          }
          this.edit_dialog = false
          this.$event.$emit('open_snackbar', this.table_config.update_message)
          this.$event.$emit('btnloading_off', false)
        })
    },

    delete_item(api_name, dynamic_api = null) {
      makeRequestTo[api_name](this.delete_item_id, dynamic_api)
        .catch(() => {
          this.$event.$emit('btnloading_off', false)
        })
        .then(() => {
          const index = this.items.findIndex(
            data_item => data_item.id === this.delete_item_id
          )
          if (~index) this.items.splice(index, 1)
          this.delete_item_id = null
          this.delete_dialog = false
          this.$event.$emit('open_snackbar', this.table_config.delete_message)
          this.$event.$emit('btnloading_off', false)
        })
    },

    open_edit_dialog(item) {
      this.edit_dialog = true
      this.$set(this.edit_item, 'id', item.id)
      this.$set(this.edit_item, 'fields', item)
    },

    open_delete_dialog(item) {
      this.delete_dialog = true
      this.delete_item_id = item.id
    },

    fill_table(api_name, nested_response = false, dynamic_api = null) {
      this.loading = true
      makeRequestTo[api_name](dynamic_api).then(response => {
        this.items_response = response.data
        this.loading = false
        if (nested_response) {
          this.items = response.data.data
        } else {
          this.items = response.data
        }
      })
    },

    fill_table_with_data(data) {
      this.items = data
    },

    add_table_rows(rows, response) {
      this.items = rows
      this.items_response = response
    },

    changeSort(column) {
      if (this.sort.sortBy === column) {
        this.sort.descending = !this.sort.descending
      } else {
        this.sort.sortBy = column
        this.sort.descending = false
      }
    },

    refresh_table(query) {
      makeRequestTo[this.table_config.refresh_table_api_name](query)
        .catch(() => {
          this.$event.$emit('btnloading_off', false)
        })
        .then(response => {
          this.$event.$emit(
            'open_snackbar',
            this.table_config.refresh_table_message
          )
          this.loading = false
          this.items_response = response.data
          this.items = response.data.data
          this.$event.$emit('btnloading_off', false)
        })
    },

    update_table_actions(query) {
      if (query.page) this.page = Number(query.page)
      if (query.per_page) this.rows_per_page = Number(query.per_page)
      if (query.search) this.search = query.search
      if (query.sort) {
        const sort = query.sort.split('|')
        this.sort.sortBy = sort[0]
        if (sort[1] === 'asc') this.sort.descending = false
        else if (sort[1] === 'desc') this.sort.descending = true
      }
    },

    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    },

    debounce: _debounce(function(value) {
      this.search = value
    }, 500)
  }
}
