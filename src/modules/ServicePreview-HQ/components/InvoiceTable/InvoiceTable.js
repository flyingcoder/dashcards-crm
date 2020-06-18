import { list_functionality } from '@/services/list-functionality/list-functionality'
import request from '@/services/axios_instance'
import { global_utils } from '@/global_utils/global_utils'
//Components
import DashCard from '@/common/DashCard.vue'
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import VueTable from '@/common/VueTable/VueTable.vue'

export default {
    mixins: [list_functionality, global_utils],
    components: {
        DashCard,
        VueTable
    },

    props: {
        id: [Number, String],
        dashboard: Boolean,
        viewMoreLink: Object
    },

    data: () => ({
        enableViewMore: true,
        pagination: {
            current: 1,
            total: 0
        },
        headers: [
            { text: 'Due Date', value: 'due_date', sortable: false },
            { text: 'Invoice No.', value: 'invoice_number', sortable: false },
            { text: 'Client', value: 'client', sortable: false },
            { text: 'Amount', value: 'amount', sortable: false },
            { text: 'Actions', sortable: false }
        ]
    }),

    created() {
        this.loading = true
        request
            .get(`api/services/${this.id}/invoice`)
            .then(response => (this.items = response.data.data))
            .finally(() => (this.loading = false))
    }
}