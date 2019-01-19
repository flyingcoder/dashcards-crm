<template>
	<div class="rich-editor">
		<vue-editor
				ref="richEditor"
				use-custom-image-handler
				:value="value"
				:editor-toolbar="custom_toolbar"
				:editor-options="custom_options"
				v-bind="$attrs"
				@input="$emit('input', $event)"
				@imageAdded="handleImageAdded"
		/>
	</div>
</template>

<script>
import { VueEditor } from 'vue2-editor'
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
          [{ align: [] }]
        ]
      } else {
        return this.toolbar
      }
    },
    custom_options() {
      if (isEmpty(this.options)) {
        return {
          bounds: '.rich-editor'
        }
      } else {
        let options = { ...this.options }
        options.bounds = '.rich-editor'
        return options
      }
    }
  },

  methods: {
    handleImageAdded(file, Editor, cursorLocation, resetUploader) {
      if (file.size / 1024 > 1024) {
        this.$event.$emit(
          'open_snackbar',
          'Large images do not allowed',
          'error'
        )
        return
      }
      const reader = new FileReader()
      reader.onload = e => {
        const image = e.target.result
        Editor.insertEmbed(cursorLocation, 'image', image)
        resetUploader()
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="scss" scoped>
.rich-editor {
}
</style>
