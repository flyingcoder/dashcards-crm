<template>
  <div class="invoice">
    <Invoice />
  </div>
</template>

<script>
import Invoice from '@/modules/Invoice/Invoice.vue'
export default {
  components: {
    Invoice
  },
  beforeDestroy() {
    this.$store.commit('invoice/reset_state')
  }
}
</script>
