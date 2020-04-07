<template functional>
  <v-textarea
    :value="props.value"
    @input="listeners['update:value']($event)"
    filled
    :rows="props.rows"
    hide-details
    v-bind="data.attrs"
  >
  </v-textarea>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    value: String,
    rows: { type: Number, default: 5 }
  }
}
</script>
