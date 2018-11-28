<template>
	<div class="rich-editor">
		<vue-editor
				:value="value"
				@input="$emit('input', $event)"
				:editor-toolbar="custom_toolbar"
				:editor-options="custom_options"
				ref="richEditor"
				v-bind="$attrs"
		/>
	</div>
</template>

<script>
	import { VueEditor } from "vue2-editor"
	import isEmpty from 'lodash/isEmpty'

	export default {
		name: 'RichEditor',
		inheritAttrs: false,
		components: { VueEditor },

		props: {
			toolbar: {
				type: Array,
				default: () => []
			},
			value: String,
			options: {
				type: Object,
				default: () => ({})
			}
		},

		computed: {
			custom_toolbar() {
				if (isEmpty(this.options)) {
					return [
						['bold', 'italic', 'underline', 'strike'],
						['link', 'image'],
						[{ 'align': [] }],
					]
				}else {
					return this.toolbar
				}
			},
			custom_options() {
				if (isEmpty(this.options)) {
					return {
						bounds: '.rich-editor'
					}
				}else {
					let options = { ...this.options }
					options.bounds = '.rich-editor'
					return options
				}
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.rich-editor {

	}
</style>