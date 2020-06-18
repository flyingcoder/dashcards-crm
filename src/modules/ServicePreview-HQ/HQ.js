import TasksCard from '@/common/TasksCard/TasksCard.vue'
import TimelineCard from '@/common/TimelineCard/TimelineCard.vue'
import ServiceOverviewCard from './components/ServiceOverviewCard/ServiceOverviewCard.vue'
import InvoiceTable from './components/InvoiceTable/InvoiceTable.vue'

export default {
    components: {
        ServiceOverviewCard,
        TimelineCard,
        TasksCard,
        InvoiceTable
    },

    props: {
        id: [Number, String]
    },

    data: () => ({
        taskPath: { name: 'service_preview', query: { tab: 'Task' } }
    }),

    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.verifyService(to, from, next)
        })
    }
}