import {list_functionality} from '@/services/list-functionality/list-functionality'
import request from '@/services/axios_instance'
//components
import DeleteDialog from '@/common/DeleteDialog.vue'
import AddDialog from './components/AddDialog/AddDialog.vue'
import VueTable from '@/common/VueTable/VueTable.vue'
import Actions from '@/common/VueTable/Actions.vue'
import VueGrid from '@/common/VueGrid/VueGrid.vue'
import TableHeader from '@/common/TableHeader.vue'
import {mapGetters} from "vuex";

export default {
    name: 'MembersTab',
    mixins: [list_functionality],
    components: {
        VueTable,
        AddDialog,
        DeleteDialog,
        Actions,
        VueGrid,
        TableHeader
    },
    inheritAttrs: false,

    props: {
        id: [Number, String]
    },

    data: () => ({
        headers: [
            {text: 'Member', sortable: false},
            {text: 'Email', value: 'email'},
            {text: 'Telephone', sortable: false},
            {text: 'Position', value: 'position'},
            {text: 'Tasks', value: 'tasks'},
            {text: 'Action', value: 'action', align: 'center', width: '140px'}
        ],
        sortList: [
            {title: 'Sort by member'},
            {title: 'Sort by email'},
            {title: 'Sort by telephone'},
            {title: 'Sort by position'},
            {title: 'Sort by tasks'}
        ],
        table_config: {
            route_name: 'project_preview',
            add_message: 'New Members(s) added successfully!',
            delete_message: 'Members deleted successfully!',
            refresh_table_message: 'Table refreshed',
            refresh_table_api_name: 'paginate_tab_members_table'
        }
    }),

    computed: {
        ...mapGetters(['user']),
        dynamic_api() {
            return `api/projects/${this.id}/member`
        },
        permissions() {
            return this.$_permissions.get('hq_members')
        },
        type() {
            return this.$route.params.type || 'project'
        },
        tableTitle() {
            return this.type === 'project' ? `Project Members` : 'Service Members'
        },
        paths() {
            return [
                {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
                { text: this.type, disabled: false, route: {path: `/dashboard/${this.type}/preview/${this.id}`}},
                {text: 'Members', disabled: true, route: null}
            ]
        },
        can_add() {
            if(this.user.is_admin || this.user.is_manager) {
                return true
            }
            return this.permissions && this.permissions.create
        },
    },

    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.view = this.getPreferredView()
        this.load_users()
    },

    methods: {
        load_users() {
            this.fill_table_via_url(this.dynamic_api, true)
        },
        load_more_members() {
            this.load_more_via_url(this.dynamic_api)
        },
        bulk_remove_members() {
            let payload = {
                ids: this.selected.map(ii => {
                    return ii.id
                })
            }
            request
                .delete(`api/projects/${this.id}/member/bulk-delete`, {data: payload})
                .then(({data}) => {
                    data.ids.forEach(item => {
                        const index = this.items.findIndex(
                            data_item => data_item.id === item.user_id
                        )
                        if (~index) this.items.splice(index, 1)
                    })
                    this.bulk_delete_dialog = false
                    this.selected = []
                    this.$event.$emit('clear_selected')
                    this.$event.$emit('open_snackbar', data.message)
                })
                .finally(() => {
                    this.$event.$emit('btnloading_off', false)
                })
        },
        can_be_deleted(item) {
            return !(
                item.job_title === 'Administrator' || item.job_title === 'Client'
            )
        },
        navigate_to_view_profile(user) {
            let item = Object.values(user.user_roles)
            if (item[0].indexOf('client') >= 0 || item[0].indexOf('agent') >= 0) {
                this.$router.push(`/dashboard/clients/profile/${user.id}`)
            } else {
                this.$router.push(`/dashboard/team/profile/${user.id}`)
            }
        }
    }
}