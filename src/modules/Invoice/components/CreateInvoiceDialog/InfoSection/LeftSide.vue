<template>
	<div class="left-side">

		<div class="add-logo-box">
			+ Add Your Logo
		</div>

		<div class="bill-from">
			<v-textarea label="Who is this invoice from"
			            v-model="billed_from"
			></v-textarea>
		</div>

		<div class="bill-to">
			<v-text-field label="Who is this invoice to"
			              v-model="billed_to"
			></v-text-field>
		</div>

	</div>
</template>

<script>
export default {
  computed: {
    billed_to: {
      get() {
        return this.$store.getters['invoice/billed_to']
      },
      set(newVal) {
        this.$store.commit('invoice/set_billed_to', newVal)
      }
    },
    billed_from: {
      get() {
        return this.$store.getters['invoice/billed_from']
      },
      set(newVal) {
        this.$store.commit('invoice/set_billed_from', newVal)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.left-side {
  .add-logo-box {
    width: 200px;
    height: 150px;
    background: gainsboro;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }

  .bill-from,
  .bill-to {
    width: 300px;
  }
}
</style>
