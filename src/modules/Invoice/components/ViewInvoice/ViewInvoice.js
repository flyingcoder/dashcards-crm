import { global_utils } from '@/global_utils/global_utils'
import request from '@/services/axios_instance'

export default {
    mixins: [global_utils],
    props: {
        item: Object,
        open: Boolean
    },

    data: () => ({
        loading: false,
        list_items: [],
        headers: [{
                text: 'Descriptions',
                align: 'left',
                sortable: false,
                value: 'descriptions'
            },
            {
                text: 'Rate',
                value: 'rate',
                align: 'left',
                sortable: false,
                width: 100
            },
            {
                text: 'Hours',
                value: 'hours',
                align: 'left',
                sortable: false,
                width: 100
            },
            {
                text: 'Amount',
                value: 'amount',
                align: 'left',
                sortable: false,
                width: 100
            }
        ]
    }),

    computed: {
        view_invoice_dialog: {
            get() {
                return this.open
            },
            set(val) {
                this.$emit('close', val)
            }
        },
        user(){
            return this.$store.getters.user
        },
        can_pay(){
            return this.item.billed_to === this.user.id
        },
        property(){
            return JSON.parse(this.item.props)
        }
    },
    methods: {
        downloadPDF() {
            request.get(`api/invoice/${this.item.id}/download`)
            .then(({ data }) => {
              window.open(data.url, '_blank');
            })
        }
    }
}