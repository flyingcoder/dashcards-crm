import {list_functionality} from '@/services/list-functionality/list-functionality'
import {global_utils} from '@/global_utils/global_utils'
import apiTo from './api'
import request from '@/services/axios_instance'
import makeRequestTo from '@/services/makeRequestTo'
//Components
import Breadcrumb from '@/common/Breadcrumb.vue'
import TableHeader from '@/common/TableHeader.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import ClientsDialog from '@/modules/Clients/components/ClientsDialog/ClientsDialog.vue'
import TeamsDialog from '@/modules/Teams/components/TeamsDialog/TeamsDialog.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/ActionDropdown.vue'
import ServiceModal from './components/ServiceModal/ServiceModal.vue'
import GroupsDialog from '@/modules/Settings-Groups/components/GroupsDialog/GroupsDialog.vue'
import Avatars from '@/common/Avatars.vue'
import ServiceListDialog from '@/modules/Services-List/components/ServicesAddDialog/ServicesAddDialog.vue'


export default {
    name: 'Campaign', //Campaign
    mixins: [list_functionality, global_utils],
    components: {
        Breadcrumb,
        TableHeader,
        GroupsDialog,
        DeleteDialog,
        ClientsDialog,
        TeamsDialog,
        VueTable,
        Actions,
        ServiceModal,//campaign modal
        Avatars,
        ServiceListDialog
    },

    data: () => ({
        add_new_service_dialog: false,
        add_new_client_dialog: false,
        add_new_member_dialog: false,
        add_new_service_list_dialog: false,
        paths: [
            {text: 'Dashboard', disabled: false, router_name: 'default-content'},
            {text: 'Campaigns', disabled: true, router_name: null}
        ],
        headers: [
            {
                text: '',
                sortable: false,
                align: 'left',
                width: 50
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
                width: 90
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
                align: 'center'
            },
            {
                text: 'Team',
                sortable: false,
                align: 'center'
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
                value: 'action',
                sortable: false,
                align: 'center',
                width: '40px'
            }
        ],
        table_config: {
            add_message: 'New campaign added successfully!',
            update_message: 'Campaign updated successfully!',
            delete_message: 'Campaign deleted successfully!',
            refresh_table_message: 'Table refreshed'
        },
        activeService: {
            id: 'all',
            name: 'All Services'
        },
        serviceList: [{id: 'all', name: 'All Services'}]
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.load_services()
        this.get_service_list()
    },
    created() {
        this.view = this.getPreferredView()
        this.$event.$on(
            'open-new-service-dialog',
            () => (this.add_new_service_dialog = true)
        )
        this.$event.$on(
            'open-new-client-dialog',
            () => (this.add_new_client_dialog = true)
        )
        this.$event.$on(
            'open-new-service-list-dialog',
            () => (this.add_new_service_list_dialog = true)
        )
        this.$event.$on(
            'open-new-member-dialog',
            () => (this.add_new_member_dialog = true)
        )
    },
    computed: {
        logged_user() {
            return this.$store.getters.user
        },
        can_add() {
            return (this.logged_user.is_admin || this.logged_user.is_manager)
        }
    },
    methods: {
        can_edit(campaign) {
            if (this.logged_user.is_admin) {
                return true
            }
            let found = campaign.managers.find(
                ii => ii.user_id === this.logged_user.id
            )
            return !!found;

        },
        can_delete(campaign) {
            if (this.logged_user.is_admin) {
                return true
            }
            let found = campaign.managers.find(ii => ii.user_id === this.logged_user.id)
            return !!found;

        },
        load_more() {
            this.load_more_via_url(`api/services?service=${this.activeService.id}`)
        },
        load_services() {
            this.fill_table_via_url(`api/services?service=${this.activeService.id}`)
        },
        get_service_list() {
            makeRequestTo.get_all_services_list()
                .then(({data}) => {
                    this.serviceList.push(...data)
                })
        },
        navigate_to_view_service(id) {
            this.$router.push({
                name: 'preview',
                params: {id: id, type: 'campaign'}
            })
        },
        save_new_services(datus) {
            apiTo.add_new_services(datus).then(({data}) => {
                this.$event.$emit('new_services_added', data)
                this.add_new_service_dialog = false
            })
        },
        save_new_client(datus) {
            apiTo
                .add_new_client(datus)
                .then(({data}) => {
                    this.$event.$emit('new_client_added', data)
                    this.$refs.add_client_dialog.$refs.dialog.clear_and_close()
                })
                .finally(() => this.$event.$emit('btnloading_off', false))
        },

        save_new_member(datus) {
            apiTo
                .add_new_member(datus)
                .then(({data}) => {
                    this.$event.$emit('new_manager_added', data)
                    this.$event.$emit('new_member_added', data)
                    this.$refs.add_member_dialog.$refs.dialog.clear_and_close()
                })
                .finally(() => this.$event.$emit('btnloading_off', false))
        },

        filter_services(filter) {
            //todo
        },

        handleSaveCampaign(event) {
            this.add_item('add_new_service', event, null, (response) => {
                this.$refs.add_dialog.$refs.dialog.clear_and_close()
            })
        },
        handleUpdateCampaign(event) {
            this.update_item('update_service', event, null, (response) => {
                this.$refs.edit_dialog.$refs.dialog.clear_and_close()
            })
        },
        handleDeleteCampaign(event) {
            this.delete_item('delete_service')
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
                .then(({data}) => {
                    this.$event.$emit('new-user-group-added', data)
                    this.$event.$emit('open_snackbar', 'New user group created')
                })
                .finally(() => {
                    this.$refs.add_group_dialog.cancel()
                })
        },
        save_new_services_list(items) {
            request
                .post('api/services-list', {names: items.map(i => i.name)})
                .then(({data}) => {
                    this.$event.$emit('new-services-list-added', data)
                })
                .finally(() => {
                    this.add_new_service_list_dialog = false
                })
        },
        open_edit_dialog(item) {
            this.edit_item = item
            this.$refs.edit_dialog.open_dialog(true, item)
        },
        open_add_dialog() {
            this.$refs.add_dialog.open_dialog(false, null)
        },
        filterByService(service) {
            this.activeService = service
            this.load_services()
        }
    }
}