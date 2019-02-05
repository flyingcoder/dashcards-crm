<template>
  <div class="autocomplete-wrapper">
    <v-autocomplete
      :value="value"
      :items="items"
      :loading="isLoading"
      :search-input.sync="search"
      return-object
      cache-items
      v-bind="$attrs"
      @change="changed"
      hide-details
      prepend-icon="search"
      color="#657186"
      clearable
    ></v-autocomplete>
  </div>
</template>

<script>
export default {
  name: 'AutoComplete',
  inheritAttrs: false,
  props: {
    items: { type: Array, default: () => [] },
    value: [String, Number, Object],
    isLoading: Boolean
  },

  data: () => ({
    search: null
  }),

  watch: {
    search(val) {
      val && this.is_val_diff_from_selected(val) && this.$emit('search', val)
    }
  },

  methods: {
    is_val_diff_from_selected(val) {
      if (!this.value) return true
      return val !== this.value.text
    },
    changed(val) {
      this.$emit('close-dropdown')
      this.$emit('input', val)
    }
  }
}
</script>
<style lang="scss" scoped>
.autocomplete-wrapper {
}
</style>
