<template functional>
  <v-text-field
    :value="props.value"
    @input="listeners['update:value']($event)"
    solo
    hide-details
    v-bind="data.attrs"
  >
  </v-text-field>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: String
  }
}
</script>
