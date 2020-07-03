import { mapGetters } from 'vuex'
import request from '@/services/axios_instance'

export const config_utils = {
    data: () => ({
        loading: false,
        panel: [],
    }),
    computed: {
        ...mapGetters(['global_configs'])
    },
    methods: {
        all() {
            this.panel = [...Array(this.panel_items).keys()].map((k, i) => i)
        },
        none() {
            this.panel = []
        },
        sendRequest(key, payload) {
            this[`${key}_btn`] = true
            request.post(`api/configs`, payload)
                .then(({ data }) => {
                    this[key] = data.value
                    this.$event.$emit('open_snackbar', 'Settings updated!')
                })
                .finally(() => this[`${key}_btn`] = false)
        },
        getAllConfig(cb) {
            this.loading = true
            request.get(`api/configs`)
                .then(({ data }) => {
                    if (typeof cb === 'function') {
                        cb(data)
                    }
                })
                .finally(() => this.loading = false)
        },
    }
}