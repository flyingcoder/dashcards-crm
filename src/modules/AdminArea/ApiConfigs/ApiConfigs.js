import { config_utils } from '@/services/configs/config_utils'

export default {
    name: 'APIsConfonfigs',
    mixins: [config_utils],
    data: () => ({
        paths: [
            { text: 'Admin', disabled: false, router_name: 'admin-dashboard' },
            { text: 'API', disabled: false, router_name: 'admin-apis' },
        ],
        panel_items: 10,
        connectlist: [
            { name: 'Google Drive', value: 'google_drive' },
            { name: 'Stripe', value: 'stripe' },
            { name: 'PayPal', value: 'paypal' },
            { name: 'Dropbox', value: 'dropbox' },
            { name: 'Google Meet', value: 'google_meet' },
            { name: 'Zoom', value: 'zoom' },
            { name: 'SEOprofiler', value: 'seo_profiler' },
            { name: 'Skype', value: 'skype' },
            { name: 'Google Calendar', value: 'google_calendar' },
            { name: 'SEMrush', value: 'semrush' },
            { name: 'BrightLocal', value: 'brightlocal' },
            { name: 'LastPass', value: 'lastpass' }
        ],
        connects: {
            google_drive: true,
            stripe: true,
            paypal: false,
            dropbox: false,
            google_meet: false,
            zoom: false,
            seo_profiler: false,
            skype: false,
            semrush: false,
            brightlocal: false,
            google_calendar: false,
            lastpass: false
        },
        connects_btn: false,
    }),

    mounted() {
        this.$event.$emit('path-change', this.paths)
        if (this.global_configs.connects) {
            this.connects = this.global_configs.connects
        }

        this.all()
    },
    methods: {
        save_connects() {
            this.sendRequest('connects', { key: 'connects', value: this.connects, type: 'object' })
        },
    }
}