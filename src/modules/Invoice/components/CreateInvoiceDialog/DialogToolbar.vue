<template functional>
	<div class="dialog">
		<v-toolbar dark color="indigo" height="60">
			<v-btn icon dark @click="listeners['close']">
				<v-icon>close</v-icon>
			</v-btn>
			<v-toolbar-title>Create new Invoice</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-toolbar-items>
				<v-btn :disabled="props.disabled" dark flat @click="listeners['send']" >Send Invoice</v-btn>
			</v-toolbar-items>
		</v-toolbar>
	</div>
</template>

<script>
export default {
  functional: true,
  props: {
    disabled: Boolean
  }
}
</script>
