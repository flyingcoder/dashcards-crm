<template>
    <div class="rich-editor">
        <vue-editor
                ref="richEditor"
                useCustomImageHandler
                :value="value"
                :editor-toolbar="custom_toolbar"
                :editor-options="custom_options"
                v-bind="$attrs"
                @input="$emit('input', $event)"
                @image-added="handleImageAdded"
        />
    </div>
</template>

<script>
    import {VueEditor} from 'vue2-editor'
    import isEmpty from 'lodash/isEmpty'
    import request from '@/services/axios_instance'

    export default {
        name: 'RichEditor',
        inheritAttrs: false,
        components: {VueEditor},

        props: {
            toolbar: {
                type: Array,
                default: () => []
            },
            value: String,
            options: {
                type: Object,
                default: () => ({})
            },
            uploadApi: {type: String, default: `api/file/image-upload`}
        },

        computed: {
            custom_toolbar() {
                if (isEmpty(this.options)) {
                    return [
                        ['bold', 'italic', 'underline', 'strike', 'link', 'image'],
                        [{align: []}]
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
                    let options = {...this.options}
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
                let formData = new FormData();
                formData.append('file', file)

                request
                    .post(this.uploadApi, formData)
                    .then(({data}) => {
                        let url = data.public_url
                        Editor.insertEmbed(cursorLocation, 'image', url)
                        resetUploader()
                    })
                    .catch(err => {
                        this.$event.$emit('open_snackbar', err, 'error')
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .rich-editor {
    }
</style>
