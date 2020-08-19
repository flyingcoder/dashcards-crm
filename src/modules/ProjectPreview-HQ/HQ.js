import TasksCard from '@/common/TasksCard/TasksCard.vue'
import TimelineCard from '@/common/TimelineCard/TimelineCard.vue'
import ProjectOverviewCard from './components/ProjectOverviewCard/ProjectOverviewCard.vue'
import InvoiceTable from './components/InvoiceTable/InvoiceTable.vue'
import {mapGetters, mapMutations} from "vuex";

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
        taskPath: {name: 'project_preview', query: {tab: 'Task'}}
    }),
    computed: {
        ...mapGetters(['user']),
        type() {
            return this.$route.params.type || 'project'
        },
        paths() {
            return [
                {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
                {text: `${this.type} HQ`, disabled: true, route: null}
            ]
        }
    },
    created() {
        this.set_id(this.id)
        this.set_user_id(this.user.id)
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
    },
    methods: {
        ...mapMutations('taskCards', ['set_id', 'set_user_id'])
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.verifyProject(to, from, next)
        })
    }
}