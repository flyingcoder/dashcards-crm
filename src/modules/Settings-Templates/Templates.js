import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
import { api_to } from './api'
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
            { text: 'Settings', disabled: false, router_name: 'settings' },
            { text: 'Email Templates', disabled: true, router_name: null }
        ],
        activeType: null,
        templates: null,
        submitting: false,
        content: ''
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.activeType = this.tabs[0] || null
        this.getTemplates()
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        tabs() {
            const tabs = [
                { text: 'New Team Member', type: 'new_team_member', slots: ['[user:email]', '[user:first_name]', '[user:last_name]'] },
                { text: 'New Payment', type: 'new_payment', slots: ['[payment:amount]', '[payment:link]'] },
                { text: 'Reset Password', type: 'reset_password', slots: ['[user:first_name]', '[user:last_name]', '[user:email]', '[user:reset_password_link]'] },
                { text: 'New User', type: 'new_user', slots: ['[user:email]', '[user:first_name]', '[user:last_name]', '[user:profile_link]'] },
                { text: 'New Project', type: 'new_project', slots: ['[project:title]', '[project:creator:first_name]', '[project:creator:last_name]', '[project:link]'] },
                { text: 'New Notification', type: 'new_notification', slots: ['[user:first_name]', '[user:last_name]', '[user:email]', '[notification:link]'] },
                { text: 'New Client', type: 'new_client', slots: ['[client:email]', '[client:first_name]', '[client:last_name]', '[client:company_name]', '[client:profile_link]'] },
                { text: 'New Task', type: 'new_task', slots: ['[task:title]', '[task:link]'] },
                { text: 'Task Update', type: 'task_update', slots: ['[task:title]', '[task:link]'] },
                { text: 'Send Questionaire', type: 'questionaire_send', slots: ['[questionaire:title]', '[questionaire:link]'] },
                { text: 'Questionaire Response', type: 'questionaire_response', slots: ['[questionaire:title]', '[questionaire:id]', '[questionaire:link]'] },
                { text: 'Send Invoice', type: 'invoice_send', slots: ['[invoice:title]', '[invoice:amount]', '[invoice:link]'] },
            ]
            return tabs
        }
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
            } else {
                this.content = ''
            }
            this.$refs.editor.setValue(this.content)
        },
        saveChanges() {
            this.submitting = true
            var payload = {
                name: this.activeType.type,
                value: this.content.trim() === '<p></p>' ? '' : this.content
            }
            api_to.save_changes(payload)
                .then(({ data }) => {
                    let index = this.templates.findIndex(i => i.id === data.id)
                    if (~index) {
                        this.templates.splice(index, 1, data)
                    }
                    this.$event.$emit('open_snackbar', 'Template saved.')
                })
                .finally(() => this.submitting = false)
        },
        getTemplates() {
            this.loading = true
            api_to.get_email_templates()
                .then(({ data }) => {
                    this.templates = data
                })
                .finally(() => this.loading = false)
        }
    }
}