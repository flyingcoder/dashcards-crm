import { list_functionality } from '@/services/list-functionality/list-functionality'
import _cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import request from '@/services/axios_instance'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import TableHeader from '@/common/TableHeader.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import GroupsDialog from './components/GroupsDialog/GroupsDialog.vue'
import PermissionsDialog from './components/PermissionsDialog/PermissionsDialog.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'

export default {
    name: 'Groups',
    mixins: [list_functionality],
    components: {
        VueTable,
        Actions,
        GroupsDialog,
        PermissionsDialog,
        TableHeader,
        DeleteDialog
    },

    data: () => ({
        group_id: null,
        paths: [
            { text: 'Settings', disabled: false, router_name: null },
            { text: 'Groups', disabled: true, router_name: null }
        ],
        headers: [
            { text: 'Index', value: 'index', width: '10%' },
            { text: 'Group Name', value: 'group_name', width: '20%' },
            { text: 'Description', value: 'description', width: '40%' },
            { text: 'Action', width: '30%', value: 'action', sortable: false, align: 'center' }
        ],
        actions: [{
                value: 'edit_settings',
                tooltip: 'Edit Settings',
                icon: require(`@/${'assets/icons/groups/edit.svg'}`)
            },
            {
                value: 'delete_group',
                tooltip: 'Delete Group',
                icon: require(`@/${'assets/icons/groups/delete.svg'}`)
            },
            {
                value: '',
                tooltip: 'Key',
                icon: require(`@/${'assets/icons/groups/delete.svg'}`)
            }
        ],
        table_config: {
            route_name: 'settings',
            add_message: 'New Group added successfully!',
            update_message: 'Group updated successfully!',
            delete_message: 'Group deleted successfully!',
            refresh_table_message: 'Table refreshed',
            refresh_table_api_name: 'paginate_groups_table'
        }
    }),

    computed: {
        indexes_items() {
            let items = _cloneDeep(this.items)
            return items.map((item, index) => {
                item.index = index + 1
                return item
            })
        },
        user() {
            return this.$store.getters.user
        },
        permission() {
            return this.$_permissions.get('settings_group')
        },
        can_view() {
            if (this.user.is_admin) return true
            return this.permission && this.permission.view
        },
        can_edit() {
            if (this.user.is_admin) return true
            return this.permission && this.permission.update
        },
        can_delete() {
            if (this.user.is_admin) return true
            return this.permission && this.permission.delete
        }
    },

    watch: {
        api_query(query, old_query) {
            const new_per_page = Number(this.extract_per_page(query))
            const old_per_page = Number(this.extract_per_page(old_query)) || null

            if (
                this.items_response &&
                this.rows_per_page === this.items.length &&
                new_per_page !== old_per_page
            )
                return

            this.$router.replace({
                name: this.table_config.route_name,
                query: {
                    tab: 'groups',
                    page: this.page,
                    per_page: this.rows_per_page,
                    search: this.search,
                    sort: this.query_for_sorting
                }
            })
            this.loading = true
            this.refresh_table(query)
        }
    },

    mounted() {
        this.$event.$emit('path-change', this.paths)
        const query = { ...this.$route.query }
        if (isEmpty(query)) {
            this.fill_table('get_groups', true)
        } else {
            this.update_table_actions(query)
        }
    },

    methods: {
        open_permission_dialog(item) {
            this.permissionDialog = true
            this.$set(this.edit_item, 'id', item.id)
            this.$set(this.edit_item, 'fields', item)
        },

        update_permissions(payload) {
            request
                .put('api/roles/' + payload.role_id + '/permissions', payload)
                .then(data => {
                    this.$emit('open_snackbar', data.message, data.type)
                    this.$event.$emit('btnloading_off', false)
                })
        }
    }
}