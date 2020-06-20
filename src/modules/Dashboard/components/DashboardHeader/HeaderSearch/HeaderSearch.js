import request from '@/services/axios_instance'

export default {
    name: 'HeaderSearch',

    data: () => ({
        globalSearchbox: null,
        isGlobalFetching: false,
        globalSearchResult: [],
        globalSearch: null,
        timeout: null,
        menuprops: { "closeOnClick": false, "closeOnContentClick": true, "disableKeys": true, "openOnClick": false, "maxHeight": 320 }
    }),

    watch: {
        globalSearch(val) {
            if (!val || val.length < 2 || this.isGlobalFetching) return
            this.isGlobalFetching = true
            clearTimeout(this.timeout)
            this.timeout = setTimeout(() => {
                this.fetchEntries(val)
            }, 100)
        },
    },

    methods: {
        fetchEntries(val) {
            this.globalSearchResult = []
            request.get(`api/autocomplete/search?keyword=${val}`)
                .then(({ data }) => {
                    this.globalSearchResult = data
                })
                .finally(() => (this.isGlobalFetching = false))
        },
        navigate_search(item) {
            if (item.modelType === 'project') {
                this.$router.push(`/dashboard/${item.type}/preview/${item.id}`)
            } else if (item.modelType === 'user') {
                if (item.job_title.includes('Client')) {
                    this.$router.push(`/dashboard/clients/profile/${item.id}`)
                } else {
                    this.$router.push(`/dashboard/team/profile/${item.id}`)
                }
            }
        }
    }
}