<template>
	<div class="left-side">
		<div class="notes">
			Notes
			<v-textarea label="Notes - any revelant information not already covered"
			            :value="notes"
			            @input="update_textarea($event, 'notes')"
			/>
		</div>
		<div class="Terms">
			Terms
			<v-textarea label="Terms and conditions - late fees, payment methods, delivery schedule"
			            :value="terms"
			            @input="update_textarea($event, 'terms')"
			/>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({}),

  computed: {
    ...mapGetters('invoice', ['notes', 'terms'])
  },

  methods: {
    update_textarea(new_val, field) {
      this.$store.commit('invoice/set_textarea', { new_val, field })
    }
  }
}
</script>
