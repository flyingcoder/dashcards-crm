import axios from 'axios'
import request from '@/services/axios_instance'
import {mapGetters} from "vuex";
//components
import Preview from "@/modules/Forms-Builder/components/Builder/Preview.vue";
import Response from "@/modules/Forms-Builder/components/Builder/Response.vue";

export default {
    name: 'FormResponses',
    components: {
        Preview,
        Response
    },
    data: () => ({
        paths: [
            {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            {text: 'Forms', disabled: false, route: {name: 'forms'}},
            {text: 'Response', disabled: true, router_name: null}
        ],
        form: null,
        loading: false,
        tab: 'responses',
        responses: [],
        next_url: null,
        activeResponder: null,
        loading_more: false,
        response_counts: 0
    }),
    mounted() {
        if (this.$route.params.id > 0) {
            this.getForm(this.$route.params.id)
        }
        this.$event.$emit('path-change', this.paths)
    },
    computed: {
        ...mapGetters(['user']),
        responses_count: {
            get() {
                return this.response_counts || '0'
            },
            set(val) {
                this.response_counts = val
            }
        }
    },
    watch: {
        responses: {
            handler(val) {
                this.responses_count = val.length
            },
            immediate: true,
            deep: true
        }
    },
    methods: {
        refresh() {
            this.loading = true
            request.get(`api/forms/${this.$route.params.id}/responses`)
                .then(({data}) => {
                    this.responses = data.data
                })
                .finally(() => (this.loading = false))
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
                .then(({data}) => {
                    this.responses.push(...data.data)
                    this.next_url = data.next_page_url
                })
                .finally(() => this.loading_more = false)
        }
    }
}