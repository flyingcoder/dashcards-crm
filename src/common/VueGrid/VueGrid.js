import { global_utils } from '@/global_utils/global_utils'

export default {
  name: 'VueGrid',
  mixins: [global_utils],
  props: {
    items: Array,
    hasDelete: { type: Boolean, default: true },
    hasEdit: { type: Boolean, default: true },
    hasView: { type: Boolean, default: true },
    noMoreData: { type: Boolean, default: false },
    hasFooter: { type: Boolean, default: true },
    showTaskCount: { type: Boolean, default: true },
    showProjectCount: { type: Boolean, default: true }
  },
  data: () => ({
    btnloading: false
  }),
  computed: {
    logged_user() {
      return this.$store.getters.user
    },
    onlineUsers() {
      return this.$store.getters['onlineUsers/all_users']
    },
    permissions() {
      return this.$_permissions.get('hq_members')
    }
  },
  created() {
    this.$event.$on('btnloading_off', value => (this.btnloading = false))
  },
  methods: {
    not_self(item) {
      return this.logged_user.id !== item.id
    },
    handle_action(event) {
      if (this.item) {
        this.$emit(event, this.item)
      }
    },
    can_delete(item) {
      if (this.logged_user.is_admin) {
        return true
      }
      return this.permissions && this.permissions.delete
    },
    can_edit(item) {
      if (this.logged_user.is_admin) {
        return true
      }
      if (this.logged_user.id === item.id) {
        return true
      }
      return this.permissions && this.permissions.update
    },
    can_view() {
      if (this.logged_user.is_admin) {
        return true
      }
      return this.permissions && this.permissions.view
    },
    handleLoadMore() {
      this.btnloading = true
      this.$emit('load-more')
    },
    navigate_to_view_profile(user) {
      let item = Object.values(user.user_roles)
      if (item[0].indexOf('client') >= 0 || item[0].indexOf('agent') >= 0) {
        this.$router.push(`/dashboard/clients/profile/${user.id}`)
      } else {
        this.$router.push(`/dashboard/team/profile/${user.id}`)
      }
    },
    count(item) {
      if (typeof item === 'object') {
        return item.length
      }
      return item
    },
    chatMe(user) {
      this.$router.push(`/dashboard/chat/${user.id}`)
    },
    is_online(item) {
      let index = this.onlineUsers.findIndex(i => i.id === item.id)
      return ~index ? true : false
    }
  }
}
