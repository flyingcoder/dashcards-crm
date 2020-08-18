import request from '@/services/axios_instance'

export default {
    name: 'General',
    data: () => ({
        paths: [
            {text: 'Settings', disabled: false, route: {name: 'settings'}},
            {text: 'General', disabled: true, route: null}
        ],
        update_btn_loading: false,
        reset_btn_loading: false,
        languages: [
            {value: 'english', text: 'English'}
        ],
        themes: [
            {value: 'default', text: 'Buzzooka Default'}
        ],
        date_formats: [
            {value: 'D-M-Y', text: 'D-M-Y e.g 01-12-2020'},
            {value: 'Y-M-D', text: 'Y-M-D e.g 2020-12-01'},
            {value: 'M-D-Y', text: 'M-D-Y e.g 12-01-2020'}
        ],
        currencies: [
            {currency_code: 'USD', symbol: '$', text: 'US Dollar'},
            {currency_code: 'CAD', symbol: '$', text: 'Canadian Dollar'},
            {currency_code: 'EUR', symbol: '£', text: 'Euro'},
            {currency_code: 'PHP', symbol: '₱', text: 'Philippine Peso'}
        ],
        current: {
            currency: {currency_code: 'USD', symbol: '$', text: 'US Dollar'},
            lang: 'english',
            theme: 'default',
            title: 'Buzzooka Dashtiles',
            date_format: 'Y-M-D',
            timeline_display_limits: 20,
            general_page_limits: 12,
            messages_page_limits: 10,
            info_tips: 'Yes',
            client_registration: 'No',
            notif_duration: 1000,
            license_key: null,
        },
        componentKey: 0,
        limit_rules: [
            v => !!v || 'Required',
            v => v >= 1 || 'Value should be above 0',
            v => v <= 500 || 'Value should not be above 500',
        ],
        notif_rules: [
            v => !!v || 'Required',
            v => v >= 60 || 'Value should be above 60 (at least 1 minute)',
            v => v <= 86400 || 'Value should not be above 86400 (1 day)',
        ],
        license_key: null
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.fetchSettings()
    },
    computed: {
        companyId() {
            return this.$store.getters.user.company_id
        },
        original() {
            return this.$store.getters['configs/original']
        },
    },
    methods: {
        isValid() {
            let error = []
           /* if (!this.current.title || this.current.title.trim() === '') {
                error.push('Title is required')
            }*/
            if (this.current.timeline_display_limits > 500 || this.current.timeline_display_limits < 1) {
                error.push('Timeline Display Limits should be between 1 - 500')
            }
            if (this.current.messages_page_limits > 500 || this.current.messages_page_limits < 1) {
                error.push('Messages Page Limits should be between 1 - 500')
            }
            if (this.current.general_page_limits > 500 || this.current.general_page_limits < 1) {
                error.push('General Page Limits should be between 1 - 500')
            }
            if (this.current.notif_duration > 86400 || this.current.notif_duration < 60) {
                error.push('Notifications Display Duration should be between 60 - 86400')
            }
            if (error.length > 0) {
                this.$event.$emit('open_snackbar', error.join('<br>'), 'error')
                return false
            }
            return true
        },
        reset_settings() {
            this.reset_btn_loading = true
            this.current = this.original
            this.current.license_key = this.license_key
            this.$event.$emit('open_snackbar', 'Click SAVE CHANGES to effect!', 'info')
            this.reset_btn_loading = false
        },
        getPayload() {
            let payload = {
                title: this.current.title,
                lang: this.current.lang,
                theme: this.current.theme,
                date_format: this.current.date_format,
                timeline_display_limits: this.current.timeline_display_limits,
                general_page_limits: this.current.general_page_limits,
                messages_page_limits: this.current.messages_page_limits,
                info_tips: this.current.info_tips,
                client_registration: this.current.client_registration,
                notif_duration: this.current.notif_duration,
                license_key: this.current.license_key,
                currency: this.current.currency
            };
            return payload
        },
        fetchSettings() {
            request.get(`api/company/${this.companyId}/settings`)
                .then(({data}) => {
                    if (Object.keys(data).length) {
                        this.current = data
                        this.license_key = data.license_key
                    } else {
                        this.current = this.original
                    }
                })
        },
        update_settings() {
            if (!this.isValid()) {
                return
            }
            let payload = this.getPayload();
            this.update_btn_loading = true
            request.post(`api/company/${this.companyId}/settings`, payload)
                .then(({data}) => {
                    this.$store.commit('set_user_company', data)
                    this.$store.dispatch('configs/updateSettings', data.others)
                        .then(() => {
                            this.current = data.others
                        })
                    this.$event.$emit('open_snackbar', 'Settings updated', 'success')
                })
                .finally(() => this.update_btn_loading = false)

        },
    }
}