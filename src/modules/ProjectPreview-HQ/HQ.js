import TasksCard from '@/common/TasksCard/TasksCard.vue'
import TimelineCard from '@/common/TimelineCard/TimelineCard.vue'
import ProjectOverviewCard from './components/ProjectOverviewCard/ProjectOverviewCard.vue'
import InvoiceTable from './components/InvoiceTable/InvoiceTable.vue'
import {mapMutations} from "vuex";

export default {
    components: {
        ProjectOverviewCard,
        TimelineCard,
        TasksCard,
        InvoiceTable
    },

    props: {
        id: [Number, String]
    },

    data: () => ({
        taskPath: { name: 'project_preview', query: { tab: 'Task' } }
    }),
    computed: {
        type() {
            return this.$route.params.type || 'project'
        },
        paths() {
            return [
                { text: 'Dashboard', disabled: false, router_name: 'default-content' },
                { text: `${this.type} HQ`, disabled: true, router_name: null }
            ]
        }
    },
    created(){
      this.set_id(this.id)
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
    },
    methods:{
        ...mapMutations('taskCards', ['set_id'])
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.verifyProject(to, from, next)
        })
    }
}