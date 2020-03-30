import { list_functionality } from '@/services/list-functionality/list-functionality'
import { mapMutations, mapGetters, mapActions } from 'vuex'
//Components
import UserInfo from '../UserInfo.vue'
import AddPicture from '../AddPicture/AddPicture.vue'
import UpdatePasswordDialog from '@/modules/MemberProfile/components/UpdatePasswordDialog/UpdatePasswordDialog.vue'
import ClientsDialog from '@/modules/Clients/components/ClientsDialog/ClientsDialog.vue'

export default {
  mixins: [list_functionality],
  components: {
    UserInfo,
    AddPicture,
    UpdatePasswordDialog,
    ClientsDialog
  },

  props: {
    currentuserid: [Number, String]
  },

  data: () => ({
    edit_dialog: false,
    edit_item: {
      id: null,
      fields: null
    },
    table_config: {
      route_name: 'clients',
      add_message: 'New Client added successfully!',
      update_message: 'Client updated successfully!',
      delete_message: 'Client deleted successfully!',
      refresh_table_message: 'Table refreshed'
    }
  }),

  computed: {
    ...mapGetters('memberProfile', ['user']),
    logged_user() {
      return this.$store.getters.user
    },
    permission() {
      return this.$_permissions.get('client_profile')
    },
    can_edit() {
      if (this.logged_user.is_admin) return true

      if (this.logged_user.id === parseInt(this.currentuserid)) return true //allow edit to self

      let role = this.logged_user.role
        .split('-')
        .pop()
        .toLowerCase()
      if (role === 'manager') {
        return this.permission && this.permission.update
      }
      return false
    }
  },

  methods: {
    ...mapMutations('memberProfile', ['set_picture_dialog', 'set_user']),
    ...mapActions('memberProfile', ['update_profile']),
    open_edit_dialog(item) {
      this.edit_dialog = true
      this.$set(this.edit_item, 'id', item.id)
      this.$set(this.edit_item, 'fields', item)
    },
    open_update_password_dialog(item) {
      this.$refs.update_password_dialog.open()
      this.$set(this.edit_item, 'id', item.id)
      this.$set(this.edit_item, 'fields', item)
    },
    update_user_profile(item) {
      item['id'] = this.edit_item.id
      this.update_profile(item)
      this.edit_dialog = this.set_user_loading
      this.$set(this.edit_item, 'fields', this.user)
      this.$event.$emit('btnloading_off', false)
    },
    image_clicked() {
      this.set_picture_dialog(true) //open picture dialog
    },
    handle_update_client(item) {
      this.update_item('update_client', item)
      this.$emit('client-updated', item)
    }
  }
}
