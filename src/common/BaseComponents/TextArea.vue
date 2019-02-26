<template functional>
  <v-textarea
    :value="props.value"
    @input="listeners['update:value']($event)"
    solo
    hide-details
    v-bind="data.attrs"
  >
  </v-textarea>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: String
  }
}
</script>
