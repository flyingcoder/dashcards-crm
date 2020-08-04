import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
import request from '@/services/axios_instance'
//Components
import Breadcrumb from '@/common/Breadcrumb.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'

export default {
    name: 'UsersTable',
    mixins: [list_functionality],
    components: {
        Breadcrumb,
        DeleteDialog
    },
    data: () => ({
        paths: [
            { text: 'Settings', disabled: false, route: {name: 'settings'} },
            { text: 'Users & Roles', disabled: true, route: null }
        ],
        roles: [{ name: 'All', slug: 'all' }],
        permissions: null,
        activeUser: null,
        filter: 'all',
        currentRoles: [],
        tobeAddedRoles: [],
        search: '',
        restoring: false
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.getUsers(() => {
            this.setActiveUser(this.filteredUsers[0])
        })
        this.getGroups()
    },
    computed: {
        filteredUsers() {
            return this.items.filter(item => {
                if (this.filter === 'all') return true
                var roles = Object.values(item.user_roles)
                return roles.includes(this.filter)
            })
        },
        currentUserRoles() {
            var values = Object.values(this.activeUser.user_roles)
            return this.roles.filter(item => {
                return values.includes(item.slug) || item.slug.includes(values)
            })
        },
        selectRoles() {
            return this.roles.filter(i => { return i.slug !== 'all' })
        },
        user() {
            return this.$store.getters.user
        },
        can_update_user_roles() {
            if (this.user.is_company_owner) return true
            if (this.activeUser.is_company_owner) return false
            if (this.user.is_client) return false
            if (!this.user.is_admin && !this.user.is_manager) return false
            if (this.user.is_admin && this.activeUser.is_admin) return false
            if (this.user.is_manager && this.activeUser.is_manager) return false
            if (this.activeUser.is_manager && this.user.is_admin) return true
            if (this.activeUser.is_admin && this.user.is_manager) return false
            return true
        }
    },
    methods: {
        filterSearch() {
            return this.filteredUsers = []
        },
        getUsers(cb) {
            this.fill_table_via_url(`api/company/teams?basics=true&per_page=500&withTrashed=true`, true, cb)
        },
        getGroups() {
            request.get(`api/groups?all=true`)
                .then(({ data }) => {
                    this.roles.push(...data)
                })
        },
        getUserPermissions() {
            request.get(`api/permission/user/${this.activeUser.id}`)
                .then(({ data }) => {
                    this.permissions = data
                })
        },
        setActiveUser(item) {
            this.activeUser = item
            this.tobeAddedRoles = item.roles
            if (!item.deleted_at) {
                this.getUserPermissions()
            }
        },
        updateRoles() {
            if (this.tobeAddedRoles.length === 0) {
                this.$event.$emit('open_snackbar', 'User role cannot be empty!', 'error')
                return
            }
            this.btnloading = true
            var payload = {
                user: this.activeUser.id,
                roles: this.tobeAddedRoles.map(o => { return o.id }),
            }
            request.post(`api/groups/user/update-roles`, payload)
                .then(({ data }) => {
                    this.activeUser = data
                    let index = this.items.findIndex(i => i.id === data.id)
                    if (~index) {
                        this.items[index] = data
                    }
                    this.$event.$emit('open_snackbar', 'User roles updated!')
                })
                .finally(() => {
                    this.btnloading = false
                })
        },
        controlAccount() {
            this.restoring = true
            var payload = {
                action: this.activeUser.deleted_at ? 'restore' : 'delete',
                user: this.activeUser.id
            }
            request.post(`api/groups/user/restore-delete`, payload)
                .then(({ data }) => {
                    this.activeUser = data
                    let index = this.items.findIndex(i => i.id === data.id)
                    if (~index) {
                        this.items[index] = data
                    }
                    if (payload.action === 'restore') {
                        this.getUserPermissions()
                    }
                    this.$event.$emit('open_snackbar', this.activeUser.deleted_at ? 'User successfully restored' : 'User successfully disabled')
                })
                .finally(() => {
                    this.restoring = false
                })
        }
    }
}