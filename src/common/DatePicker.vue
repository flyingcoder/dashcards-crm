<template>
  <v-menu
    ref="menu"
    :close-on-content-click="false"
    v-model="menu"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field
        slot="activator"
        :value="value"
        v-bind="$attrs"
        solo
        hide-details
        color="#657186"
        readonly
        v-on="on"
        :width="minWidth"
      ></v-text-field>
    </template>
    <v-date-picker
      clearable
      color="#657186"
      v-model="picker_date"
      :max="max"
      :min="min"
      no-title
      scrollable
    >
      <v-spacer></v-spacer>
      <v-btn text outlined color="#657186" @click="cancel">Cancel</v-btn>
      <v-btn text outlined color="#657186" @click="save">OK</v-btn>
      <v-btn text outlined color="#657186" @click="clear">Clear</v-btn>
    </v-date-picker>
  </v-menu>
</template>

<script>
export default {
  name: 'DatePicker',
  inheritAttrs: false,
  props: {
    value: { type: String, default: null },
    min: { type: String, default: null },
    max: { type: String, default: null },
    minWidth : { type : String, default : '290px' }
  },

  data: () => ({
    menu: false,
    picker_date: null
  }),

  watch: {
    value(val) {
      this.picker_date = val
    }
  },

  methods: {
    save() {
      this.$emit('input', this.picker_date)
      this.cancel()
    },

    cancel() {
      this.menu = false
    },

    clear() {
      this.picker_date = null
    }
  }
}
</script>

<style lang="scss" scoped>
.date-picker {
}
</style>
