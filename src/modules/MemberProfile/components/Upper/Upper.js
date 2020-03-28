import { mapMutations, mapGetters, mapActions } from 'vuex'
import { api_to } from '../../api'
//Components
import UserInfo from '../UserInfo.vue'
import AddPicture from '../AddPicture/AddPicture.vue'
import TeamsDialog from '../../../Teams/components/TeamsDialog/TeamsDialog.vue'
import UpdatePasswordDialog from '../UpdatePasswordDialog/UpdatePasswordDialog.vue'

export default {
  components: {
    UserInfo,
    AddPicture,
    TeamsDialog,
    UpdatePasswordDialog
  },

  props: {
    currentuserid: [Number, String]
  },

  data: () => ({
    edit_dialog: false,
    edit_item: {
      id: null,
      fields: null
    }
  }),
  
  computed: {
    ...mapGetters('memberProfile', ['user', 'set_user_loading']),
    logged_user() {
      return this.$store.getters.user
    },
    permission() {
      return this.$_permissions.get('user_profile')
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
    ...mapMutations('memberProfile', ['set_picture_dialog']),
    ...mapActions('memberProfile', ['update_profile']),
    open_edit_dialog(item) {
      this.edit_dialog = true
      this.$set(this.edit_item, 'id', item.id)
      this.$set(this.edit_item, 'fields', item)
    },
    open_update_password_dialog(item){
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
      if (this.can_edit) {
        this.set_picture_dialog(true) //open picture dialog
      }
    }
  }
}
