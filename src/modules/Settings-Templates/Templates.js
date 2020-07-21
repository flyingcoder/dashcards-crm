import {list_functionality} from '@/services/list-functionality/list-functionality'
import {api_to} from './api'
//Components
import Editor from '@/common/Editor/Editor.vue'

export default {
    name: 'EmailTemplates',
    mixins: [list_functionality],
    components: {
        Editor
    },
    data: () => ({
        paths: [
            {text: 'Settings', disabled: false, router_name: 'settings'},
            {text: 'Email Templates', disabled: true, router_name: null}
        ],
        activeType: null,
        templates: null,
        core_templates: [],
        submitting: false,
        content: ''
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.getTemplates()
        this.getCoreTemplates()
        this.activeType = this.tabs[0] || null
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        tabs() {
            return this.core_templates
        }
    },
    methods: {
        append(slot) {
            this.content = `${this.content} ${slot}`
            this.$refs.editor.setValue(this.content)
        },
        setActiveType(type, item) {
            this.activeType = item
            let index = this.templates.findIndex(i => i.name.includes(item.type))
            if (~index) {
                this.content = this.templates[index].meta.template.value
            }
            if (this.$refs.editor)
                this.$refs.editor.setValue(this.content || '')
        },
        saveChanges() {
            if (this.content.trim() === '' || this.content.trim() === '<p></p>') {
                this.$event.$emit('open_snackbar', 'Template cannot be empty', 'error')
                return
            }
            this.submitting = true
            let payload = {
                name: this.activeType.type,
                value: this.content.trim() === "<p></p>" ? '' : this.content
            }
            api_to.save_changes(payload)
                .then(({data}) => {
                    // console.log(data)
                    let index = this.templates.findIndex(i => i.id === data.id)
                    if (~index) {
                        this.templates.splice(index, 1, data)
                        this.$event.$emit('open_snackbar', 'Template saved.')
                    }
                })
                .finally(() => {
                    this.submitting = false
                })
        },
        getTemplates() {
            this.loading = true
            api_to.get_email_templates()
                .then(({data}) => {
                    this.templates = data
                })
                .finally(() => {
                    this.loading = false
                })
        },
        getCoreTemplates() {
            this.loading = true
            api_to.get_email_core_templates()
                .then(({data}) => {
                    this.core_templates = data
                })
                .finally(() => {
                    this.loading = false
                })
        }
    }
}