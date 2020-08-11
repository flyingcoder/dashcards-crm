import {config_utils} from '@/services/configs/config_utils'
import {list_functionality} from '@/services/list-functionality/list-functionality'
import request from '@/services/axios_instance'

import Editor from '@/common/Editor/Editor.vue'

export default {
    name: 'Templates',
    mixins: [config_utils, list_functionality],
    components: {
        Editor
    },
    data: () => ({
        paths: [
            {text: 'Admin', disabled: false, router_name: 'admin-dashboard'},
            {text: 'Templates', disabled: false, router_name: 'admin-templates'},
        ],
        activeType: null,
        templates: null,
        submitting: false,
        content: '',
        core_templates: [],
        email_event: null,
        email_event_btn: false,
    }),
    computed: {
        tabs() {
            return this.core_templates
        },
        events() {
            if (!this.email_event) return []
            return Object.keys(this.email_event.value)
        },
    },
    created() {
        this.getGlobalTemplates()
        this.getCoreTemplates()
        this.getEmailEvents()
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.all()
    },
    methods: {
        append(slot) {
            this.content = `${this.content} ${slot}`
            this.$refs.editor.setValue(this.content)
        },
        setActiveType(item) {
            this.activeType = item
            let index = this.templates.findIndex(i => i.name.includes(item.type))
            if (~index) {
                this.content = this.templates[index].meta.template.value
            }
            this.$refs.editor.setValue(this.content || '')
        },
        getGlobalTemplates() {
            request.get(`api/template/email-templates/global`)
                .then(({data}) => {
                    this.templates = data
                })
        },
        saveChanges() {
            if (this.content.trim() === '' || this.content.trim() === '<p></p>') {
                this.$event.$emit('open_snackbar', 'Template cannot be empty', 'error')
                return
            }
            this.submitting = true
            let payload = {
                name: this.activeType.type,
                value: this.content
            };
            request.post(`api/template/email-templates/global`, payload)
                .then(({data}) => {
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
        getCoreTemplates() {
            this.loading = true
            request.get(`api/emails/templates`)
                .then(({data}) => {
                    this.core_templates = data
                })
                .finally(() => this.loading = false)
        },
        getEmailEvents() {
            request.get(`api/configs/email_events`)
                .then(({data}) => {
                    this.email_event = data
                })
        },
        save_allowed_email_event() {
            this.sendRequest('email_events', { key: 'email_events', value: this.email_event.value, type: 'object' })
        }
    }
}