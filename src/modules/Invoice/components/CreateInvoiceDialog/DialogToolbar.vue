<template>
	<div class="dialog">
		<v-toolbar dark color="indigo" height="60">
			<v-btn icon dark @click="$emit('close')">
				<v-icon>close</v-icon>
			</v-btn>
			<v-toolbar-title>Create new Invoice</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn :disabled="disabled" dark flat @click="handle_click">Send Invoice</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    disabled: Boolean
  },

  computed: {
    ...mapGetters('invoice', ['create_dialog', 'edit_dialog'])
  },

  methods: {
    handle_click() {
      if (this.create_dialog) this.$emit('create')
      else this.$emit('edit')
    }
  }
}
</script>
