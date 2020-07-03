import { config_utils } from '@/services/configs/config_utils'

export default {
    name: 'GeneralSettings',
    mixins: [ config_utils ],
    data: () => ({
        paths: [
            { text: 'Admin', disabled: false, router_name: 'admin-dashboard' },
            { text: 'General', disabled: false, router_name: '' }
        ],
        modules: [
            { name: 'Projects', value: 'projects' },
            { name: 'Campaigns', value: 'campaign' },
            { name: 'Clients', value: 'clients' },
            { name: 'Teams', value: 'teams' },
            { name: 'Services', value: 'services' },
            { name: 'Invoices', value: 'invoices' },
            { name: 'Notes', value: 'notes' },
            { name: 'Calendars', value: 'calendars' },
            { name: 'Forms', value: 'forms' },
            { name: 'Payment', value: 'payment' },
            { name: 'Timers', value: 'timers' },
            { name: 'Connect', value: 'connect' },
            { name: 'Chat', value: 'chat' },
            { name: 'Reports', value: 'reports' },
            { name: 'Bugs', value: 'bugs' },
            { name: 'Support', value: 'support' },
            { name: 'Signup', value: 'signup' },
        ],
        dashitems: [
            { name: 'Tasks', value: 'tasks' },
            { name: 'Timeline', value: 'timeline' },
            { name: 'Client', value: 'client' },
            { name: 'Timer', value: 'timer' },
            { name: 'Payment', value: 'payment' },
            { name: 'Alarm', value: 'alarm' },
            { name: 'Invoice', value: 'invoice' },
            { name: 'Calendar', value: 'calendar' },
            { name: 'Passbox', value: 'passbox' }
        ],
        dashtiles: [
            { name: 'Projects', value: 'projects' },
            { name: 'Open Tasks', value: 'tasks' },
            { name: 'Calendar', value: 'calendars' },
            { name: 'Timer', value: 'timer' },
            { name: 'Inbound', value: 'inbound' },
            { name: 'Outbound', value: 'outbound' }
        ],
        recaptcha: {
            enabled: false,
            key: null
        },
        meta : {
            name: null,
            description: null,
            image: null
        },
        panel_items: 10,
        allowed_modules: [],
        allowed_modules_btn: false,
        allowed_dashcards: [],
        allowed_dashcards_btn: false,
        allowed_dashtiles: [],
        allowed_dashtiles_btn: false,
        recaptcha_btn: false,
        meta_btn: false

    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.allowed_modules = this.global_configs.allowed_modules || []
        this.allowed_dashcards = this.global_configs.allowed_dashcards || []
        this.allowed_dashtiles = this.global_configs.allowed_dashtiles || []
        if (this.global_configs.recaptcha) {
            this.recaptcha = this.global_configs.recaptcha
        }
        if (this.global_configs.meta) {
            this.meta = this.global_configs.meta
        }
        this.all()
    },
    methods: {
        save(key) {
            this[`save_${key}`]()
        },
        save_allowed_modules() {
            this.sendRequest('allowed_modules', { key: 'allowed_modules', value: this.allowed_modules, type: 'array' })
        },
        save_allowed_dashcards() {
            this.sendRequest('allowed_dashcards', { key: 'allowed_dashcards', value: this.allowed_dashcards, type: 'array' })
        },
        save_allowed_dashtiles() {
            this.sendRequest('allowed_dashtiles', { key: 'allowed_dashtiles', value: this.allowed_dashtiles, type: 'array' })
        },
        save_recaptcha() {
            this.sendRequest('recaptcha', { key: 'recaptcha', value: this.recaptcha, type: 'object' })
        },
        save_meta() {
            this.sendRequest('meta', { key: 'meta', value: this.meta, type: 'object' })
        }
    }
}