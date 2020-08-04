import { global_utils } from '@/global_utils/global_utils'
import axios from 'axios'
import request from '@/services/axios_instance'

export default {
    name: 'FormResponses',
    mixins: [global_utils],
    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            { text: 'Forms', disabled: false, route: {name: 'forms'}},
            { text: 'Response', disabled: true, router_name: null }
        ],
        form: null,
        loading: false,
        tab: 'responses',
        responses: [],
        next_url: null,
        activeResponder: null,
        loading_more: false
    }),
    mounted() {
        if (this.$route.params.id > 0) {
            this.getForm(this.$route.params.id)
        }
        this.$event.$emit('path-change', this.paths)
    },
    computed: {
        textfield() {
            return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label']
        },
        user() {
            return this.$store.getters.user
        }
    },
    methods: {
        alignClass(align) {
            if (align === 'right') return 'ml-auto'
            else if (align === 'center') return 'mx-auto'
            else return 'mr-auto'
        },
        getEmbed(src) {
            let youtubeID = this.youtubeParser(src)
            return `https://www.youtube.com/embed/${youtubeID}`
        },
        getForm(id) {
            this.loading = true
            axios.all([
                    request.get(`api/forms/${id}`),
                    request.get(`api/forms/${id}/responses`)
                ])
                .then(
                    axios.spread((res1, res2) => {
                        this.form = res1.data
                        this.responses = res2.data.data
                        this.next_url = res2.data.next_page_url
                        this.activeResponder = this.responses[0] || null
                    })
                )
                .finally(() => (this.loading = false))
        },
        load_more_response() {
            this.loading_more = true
            request.get(this.next_url)
                .then(({ data }) => {
                    this.responses.push(...data.data)
                    this.next_url = data.next_page_url
                })
                .finally(() => this.loading_more = false)
        }
    }
}