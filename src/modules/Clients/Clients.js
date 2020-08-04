import { list_functionality } from '@/services/list-functionality/list-functionality'
import request from '@/services/axios_instance'

//Components
import Breadcrumb from '@/common/Breadcrumb.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import ClientsDialog from './components/ClientsDialog/ClientsDialog.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import Actions from '@/common/VueTable/Actions.vue'
import TableHeader from '@/common/TableHeader.vue'
import VueGrid from '@/common/VueGrid/VueGrid.vue'
export default {
    name: 'Clients',
    mixins: [list_functionality],
    components: {
        Breadcrumb,
        TableHeader,
        VueTable,
        VueGrid,
        ClientsDialog,
        DeleteDialog,
        Actions
    },

    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.view = this.getPreferredView()
    },
    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, route: {name:'default-content'} },
            { text: 'Clients', disabled: true, router_name: null }
        ],
        headers: [
            { text: 'Client', align: 'left'},
            { text: 'Business Name', align: 'left'},
            { text: 'Contact No.'},
            { text: 'Location'},
            { text: 'Status'},
            {
                text: 'Action',
                value: 'action',
                sortable: false,
                align: 'center',
                width: '140px'
            }
        ],
        table_config: {
            route_name: 'clients',
            add_message: 'New Client added successfully!',
            update_message: 'Client updated successfully!',
            delete_message: 'Client deleted successfully!',
            refresh_table_message: 'Table refreshed',
            refresh_table_api_name: 'paginate_clients_table'
        }
    }),

    filters: {
        phoneDisplayForm: function(value) {
            return value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2 $3')
        }
    },

    watch: {
        dialog(new_val) {
            this.add_dialog = new_val
        },
        add_dialog(new_val) {
            this.$emit('update:dialog', new_val)
        }
    },

    created() {
        this.loadClients()
    },

    methods: {
        navigate_to_view_profile(id) {
            this.$router.push(`/dashboard/clients/profile/${id}`)
        },
        loadClients() {
            this.fill_table_via_url('api/clients')
        },
        load_more() {
            this.load_more_via_url('api/clients')
        }
    }
}