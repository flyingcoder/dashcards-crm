import _debounce from 'lodash/debounce'
import makeRequestTo from '@/services/makeRequestTo'
import request from '@/services/axios_instance'

export const methods = {
  methods: {
    resetPagination(){
      this.pagination.current = 1
      this.pagination.total = 0
      this.noMoreData = false
    },
    add_item(api_name, item, dynamic_api = null) {
      makeRequestTo[api_name](item, dynamic_api)
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
        })
        .finally(() => this.$event.$emit('btnloading_off', false))
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
        })
        .finally(() => this.$event.$emit('btnloading_off', false))
    },

    delete_item(api_name, dynamic_api = null) {
      makeRequestTo[api_name](this.delete_item_id, dynamic_api)
        .then(() => {
          const index = this.items.findIndex(
            data_item => data_item.id === this.delete_item_id
          )
          if (~index) this.items.splice(index, 1)
          this.delete_item_id = null
          this.delete_dialog = false
          this.$event.$emit('open_snackbar', this.table_config.delete_message)
        })
        .finally(() => this.$event.$emit('btnloading_off', false))
    },
    bulk_delete(api_name) {
      var payload = {
        ids: this.selected.map(ii => {
          return ii.id
        })
      }

      makeRequestTo[api_name]({ data: payload })
        .then(({ data }) => {
          this.selected.forEach(item => {
            const index = this.items.findIndex(
              data_item => data_item.id === item.id
            )
            if (~index) this.items.splice(index, 1)
          })
          this.bulk_delete_dialog = false
          this.selected = []
          this.$event.$emit('clear_selected')
          this.$event.$emit('open_snackbar', data.message)
        })
        .finally(() => {
          this.$event.$emit('btnloading_off', false)
        })
    },
    bulk_delete_via_url(url) {
      var payload = {
        ids: this.selected.map(ii => {
          return ii.id
        })
      }
      request
        .delete(url, { data: payload })
        .then(({ data }) => {
          this.selected.forEach(item => {
            const index = this.items.findIndex(
              data_item => data_item.id === item.id
            )
            if (~index) this.items.splice(index, 1)
          })
          this.bulk_delete_dialog = false
          this.selected = []
          this.$event.$emit('clear_selected')
          this.$event.$emit('open_snackbar', data.message)
        })
        .finally(() => {
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

    open_bulk_delete_dialog(items) {
      this.bulk_delete_dialog = true
      this.selected = items
    },

    fill_table(api_name, nested_response = false, dynamic_api = null) {
      this.loading = true
      makeRequestTo[api_name](dynamic_api)
        .then(response => {
          this.items_response = response.data
          if (nested_response) {
            this.items = response.data.data
            this.pagination.current = response.data.current_page
            this.pagination.total = response.data.last_page
            this.hasMoreData()
          } else {
            this.items = response.data
          }
        })
        .finally(() => {
          this.loading = false
          this.$event.$emit('btnloading_off', false)
        })
    },
    fill_table_via_url(url, nested_response = true) {
      this.loading = true
      var payload = { page: this.pagination.current }
      request
        .get(url, { params: payload })
        .then(response => {
          this.items_response = response.data
          if (nested_response) {
            this.items = response.data.data
            this.pagination.current = response.data.current_page
            this.pagination.total = response.data.last_page
            this.hasMoreData()
          } else {
            this.items = response.data
          }
        })
        .finally(() => {
          this.loading = false
          this.$event.$emit('btnloading_off', false)
        })
    },
    load_more_on_table(api_name) {
      this.loading = true
      var payload = { page: this.pagination.current + 1 }
      makeRequestTo[api_name]({ params: payload })
        .then(({ data }) => {
          this.items_response = data.data
          data.data.forEach(item => {
            this.items.push(item)
          })
          this.pagination.current = data.current_page
          this.pagination.total = data.last_page
          this.hasMoreData()
        })
        .finally(() => {
          this.loading = false
          this.scrollToBottom()
          this.$event.$emit('btnloading_off', false)
        })
    },
    load_more_via_url(url) {
      this.loading = true
      var payload = { page: this.pagination.current + 1 }
      request
        .get(url, { params: payload })
        .then(({ data }) => {
          this.items_response = data.data
          data.data.forEach(item => {
            this.items.push(item)
          })
          this.pagination.current = data.current_page
          this.pagination.total = data.last_page
          this.hasMoreData()
        })
        .finally(() => {
          this.loading = false
          this.scrollToBottom()
          this.$event.$emit('btnloading_off', false)
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
        .then(response => {
          this.$event.$emit(
            'open_snackbar',
            this.table_config.refresh_table_message
          )
          this.loading = false
          this.items_response = response.data
          this.items = response.data.data
        })
        .finally(() => this.$event.$emit('btnloading_off', false))
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
    hasMoreData() {
      this.componentKey += 1
      if (this.pagination.current >= this.pagination.total) {
        this.noMoreData = true
      }
    },
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    },

    setPreferredView(view) {
      window.localStorage.setItem('bzk_prefer_view', view)
      this.view = view
    },

    getPreferredView() {
      return window.localStorage.getItem('bzk_prefer_view') || 'list'
    },

    scrollToBottom() {
      setTimeout(() => {
        const wrapper = document.getElementsByClassName('v-data-table__wrapper')
        if (wrapper) {
          wrapper.scrollTop = wrapper.scrollHeight
        }
      }, 1)
    },
    debounce: _debounce(function(value) {
      this.search = value
    }, 500)
  }
}
