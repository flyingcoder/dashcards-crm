<template>
	<div :class="classes" v-show="show">
		{{ title }}

		<v-text-field type="number" min="0" :value="value" @input="$emit('input', $event)">

			<v-tooltip slot="prepend" bottom v-if="!noSymbol">
				<v-btn slot="activator" icon @click="$emit('toggle-symbol', symbolType)">
					<v-icon>compare_arrows</v-icon>
				</v-btn>

				Toggle {{ title }}
			</v-tooltip>

			<template slot="append" v-if="!noSymbol">
				<span slot="activator">{{ symbol }}</span>
			</template>

		</v-text-field>

		<v-btn icon @click="$emit('toggle_visibility', !show)">
			<v-icon>delete</v-icon>
		</v-btn>

	</div>
</template>

<script>
export default {
  props: {
    title: String,
    show: Boolean,
    classes: Array,
    value: [String, Number],
    symbol: String,
    symbolType: String,
    noSymbol: Boolean
  }
}
</script>

<style lang="scss" scoped>
.field {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 15px;
  align-items: center;
}
</style>
