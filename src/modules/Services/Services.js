import { list_functionality } from '@/services/list-functionality/list-functionality'
import { global_utils } from '@/global_utils/global_utils'
import apiTo from './api'
import isEmpty from 'lodash/isEmpty'
import request from '@/services/axios_instance'
//Components
import Breadcrumb from '@/common/Breadcrumb.vue'
import TableHeader from '@/common/TableHeader.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ClientsDialog from '@/modules/Clients/components/ClientsDialog/ClientsDialog.vue'
import TeamsDialog from '@/modules/Teams/components/TeamsDialog/TeamsDialog.vue'
import Empty from '@/common/Empty.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/ActionDropdown.vue'
import ServiceModal from './components/ServiceModal/ServiceModal.vue'
import GroupsDialog from '@/modules/Settings-Groups/components/GroupsDialog/GroupsDialog.vue'
import Avatars from '@/common/Avatars.vue'

export default {
    name: 'Services',
    mixins: [list_functionality, global_utils],
    components: {
        Breadcrumb,
        TableHeader,
        GroupsDialog,
        DeleteDialog,
        ClientsDialog,
        TeamsDialog,
        Empty,
        VueTable,
        Actions,
        ServiceModal,
        Avatars
    },

    data: () => ({
        add_new_service_dialog: false,
        add_new_client_dialog: false,
        add_new_member_dialog: false,
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Services', disabled: true, router_name: null }
        ],
        headers: [{
                text: '',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Service Name',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Client',
                sortable: false,
                align: 'left',
                width: '90px'
            },
            {
                text: 'Business Name',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Location',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Managers',
                sortable: false,
                align: 'center',
                sortable: false
            },
            {
                text: 'Team',
                sortable: false,
                align: 'center',
                sortable: false
            },
            {
                text: 'Start Date',
                sortable: false,
                align: 'left'
            },
            {
                text: 'End Date',
                sortable: false,
                align: 'left'
            },
            {
                text: 'Action',
                sortable: false,
                align: 'center',
                width: '40px'
            }
        ],

        table_config: {
            add_message: 'New service added successfully!',
            update_message: 'Service updated successfully!',
            delete_message: 'Service deleted successfully!',
            refresh_table_message: 'Table refreshed',
            refresh_table_api_name: 'paginate_clients_table'
        }
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
    },
    created() {
        this.view = this.getPreferredView()
        this.load_services()
        this.$event.$on(
            'open-new-service-dialog',
            () => (this.add_new_service_dialog = true)
        )
        this.$event.$on(
            'open-new-client-dialog',
            () => (this.add_new_client_dialog = true)
        )
        this.$event.$on(
            'open-new-member-dialog',
            () => (this.add_new_member_dialog = true)
        )
    },
    computed: {
        loggeduser() {
            return this.$store.getters.user
        }
    },
    methods: {
        can_edit(serv) {
            if (this.loggeduser.is_admin) {
                return true
            }
            let found = serv.managers.find(
                ii => ii.user_id === this.loggeduser.id
            )
            if (found) return true
            return false
        },
        can_delete(serv) {
            if (this.loggeduser.is_admin) {
                return true
            }
            let found = serv.managers.find(ii => ii.user_id === this.loggeduser.id)
            if (found) return true
            return false
        },
        load_more() {
            this.load_more_via_url(`api/services?per_page=12`)
        },
        load_services() {
            this.fill_table_via_url(`api/services?per_page=12`)
        },
        navigate_to_view_service(id) {
            this.$router.push({
                name: 'preview',
                params: { id: id, type: 'service' }
            })
        },
        save_new_services(datus) {
            apiTo.add_new_services(datus).then(({ data }) => {
                this.$event.$emit('new_services_added', data)
                this.add_new_service_dialog = false
            })
        },
        save_new_client(datus) {
            apiTo
                .add_new_client(datus)
                .then(({ data }) => {
                    this.$event.$emit('new_client_added', data)
                    this.$refs.add_client_dialog.$refs.dialog.clear_and_close()
                })
                .finally(() => this.$event.$emit('btnloading_off', false))
        },

        save_new_member(datus) {
            apiTo
                .add_new_member(datus)
                .then(({ data }) => {
                    this.$event.$emit('new_manager_added', data)
                    this.$event.$emit('new_member_added', data)
                    this.$refs.add_member_dialog.$refs.dialog.clear_and_close()
                })
                .finally(() => this.$event.$emit('btnloading_off', false))
        },

        filter_services(filter) {
            //todo
        },

        handleSaveService(event) {
            this.add_item('add_new_service', event, null, (response) => {
                this.$refs.add_dialog.$refs.dialog.clear_and_close()
            })
        },
        handleUpdateService(event) {
            this.update_item('update_service', event, null, (response) => {
                this.$refs.edit_dialog.$refs.dialog.clear_and_close()
            })
        },
        show_add_group_dialog() {
            this.$refs.add_group_dialog.openDialog()
        },
        save_new_user_group(item) {
            if (!item) {
                this.$event.$emit('open_snackbar', 'Cant create user group.')
                this.$refs.add_group_dialog.cancel()
                return
            }
            request
                .post('api/groups', item)
                .then(({ data }) => {
                    this.$event.$emit('new-user-group-added', data)
                    this.$event.$emit('open_snackbar', 'New user group created')
                })
                .finally(() => {
                    this.$refs.add_group_dialog.cancel()
                })
        },
        open_edit_dialog(item) {
            this.edit_item = item
            this.$refs.edit_dialog.open_dialog(true, item)
        },
        open_add_dialog() {
            this.$refs.add_dialog.open_dialog(false, null)
        }

    }
}