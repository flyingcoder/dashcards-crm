import { list_functionality } from '@/services/list-functionality/list-functionality'
//Components
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'
import MilestoneTemplateDialog from './components/MilestoneTemplateDialog/MilestoneTemplateDialog.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'

export default {
    name: 'MilestoneTemplate',
    mixins: [list_functionality],
    components: {
        VueTable,
        Actions,
        MilestoneTemplateDialog,
        DeleteDialog,
        TableHeader
    },
    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Milestone Templates', disabled: true, router_name: null }
        ],
        headers: [
            { text: 'Name', value: 'name' },
            { text: 'Milestones', value: 'milestones_count', width: 120},
            { text: 'Status', value: 'status', width: 100 },
            { text: 'Action', value: 'action', align: 'center', sortable: false, width: 180 }
        ],
        table_config: {
            route_name: 'templates',
            add_message: 'New Template added successfully!',
            update_message: 'Template updated successfully!',
            delete_message: 'Template deleted successfully!'
        }
    }),
    created() {
        this.fill_table('get_milestone_templates', true)
    },
    mounted() {
        this.$event.$emit('path-change', this.paths)
    },
    methods: {
        navigate_to_milestone_page(item) {
            this.$router.push({
                name: 'templates/milestone',
                params: { id: item.id }
            })
        }
    }
}