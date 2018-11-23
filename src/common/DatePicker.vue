<template>
	<v-menu
			ref="menu"
			:close-on-content-click="false"
			v-model="menu"
			:nudge-right="40"
			lazy
			transition="scale-transition"
			offset-y
			full-width
			min-width="290px"
	>
		<v-text-field
				slot="activator"
				:value="value"
				v-bind="$attrs"
		></v-text-field>

		<v-date-picker clearable v-model="picker_date" :max="max" :min="min" no-title scrollable>
			<v-spacer></v-spacer>
			<v-btn flat color="primary" @click="cancel">Cancel</v-btn>
			<v-btn flat color="primary" @click="save">OK</v-btn>
			<v-btn flat color="primary" @click="clear">Clear</v-btn>
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
			max: { type: String, default: null }
		},

		data: () => ({
			menu: false,
			picker_date: null
		}),

		watch: {
			value(val) { this.picker_date = val }
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

		},

	}
</script>

<style lang="scss" scoped>
	.date-picker {

	}
</style>