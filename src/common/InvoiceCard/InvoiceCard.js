import DashCard from '@/common/DashCard.vue'
import request from '@/services/axios_instance'
import { global_utils } from '@/global_utils/global_utils'
const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea']
]

export default {
    name: 'InvoiceCard',
    mixins: [global_utils],
    components: {
        DashCard
    },

    props: {
        id: [Number, String],
        viewMoreLink: Object,
        dashboard: Boolean
    },

    data() {
        return {
            loading: true,
            items: [],
            page: 1,
            pagination: {
                current: 1,
                total: 0
            },
            headers: [
                { text: 'Name', value: 'name' },
                { text: 'Amount', value: 'amount' }
            ],
            total_clients: 0,
            current_month_total: 0,
            last_month_total: 0,
            width: 2,
            radius: 0,
            padding: 8,
            lineCap: 'round',
            gradient: gradients[5],
            value: this.generate_random(10, 0, 10),
            gradientDirection: 'top',
            gradients,
            fill: false,
            type: 'trend',
            autoLineWidth: false,
            uniquekey: 0,
            enableViewMore: true
        }
    },
    mounted() {
        this.getInvoicesData()
    },

    methods: {
        manageViewMorebtn() {
            if (this.pagination.current === this.pagination.total) {
                this.enableViewMore = false
            }
        },
        getInvoicesData() {
            this.loading = true
            request
                .get(`/api/company/invoices/statistics?page=${this.pagination.current}`)
                .then(({ data }) => {
                    this.items = data.data
                    this.pagination.current = data.current_page
                    this.pagination.total = data.last_page
                    this.total_clients = data.total_clients
                    this.current_month_total = data.current_month_total
                    this.last_month_total = data.last_month_total
                    setTimeout(() => {
                        this.manageViewMorebtn()
                    }, 1)
                })
                .finally(() => (this.loading = false))
        },
        loadMore() {
            this.loading = true
            request.get( `/api/company/invoices/statistics?client_only=true&page=${this.pagination.current + 1}`)
                .then(({ data }) => {
                    for (var i = data.data.length - 1; i >= 0; i--) {
                        this.items.push(data.data[i])
                    }
                    this.uniquekey += 1
                    this.pagination.current = data.current_page
                    setTimeout(() => {
                        this.manageViewMorebtn()
                    }, 1)
                })
                .finally(() => (this.loading = false))
        },

        expand() {
            this.$router.push({ name: 'expanded-invoice' })
        }
    }
}