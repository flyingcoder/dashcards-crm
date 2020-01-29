import { mapMutations, mapGetters, mapActions } from 'vuex'
import { api_to } from '../../api'
//Components
import UserInfo from '../UserInfo.vue'
import AddPicture from '../AddPicture/AddPicture.vue'
import TeamsDialog from '../../../Teams/components/TeamsDialog/TeamsDialog.vue'

export default {
  components: {
    UserInfo,
    AddPicture,
    TeamsDialog
  },

  data: () => ({
    edit_dialog : false,
    edit_item: {
      id: null,
      fields: null
    },
  }),

  computed: {
    ...mapGetters('memberProfile', ['user', 'set_user_loading'])
  },

  methods: {
    ...mapMutations('memberProfile', ['set_picture_dialog']),
    ...mapActions('memberProfile', ['update_profile']),
    open_edit_dialog(item) {
      this.edit_dialog = true
      this.$set(this.edit_item, 'id', item.id)
      this.$set(this.edit_item, 'fields', item)
      console.log(item)
    },
    update_user_profile(item) {
      item['id'] = this.edit_item.id
      this.update_profile(item)
      this.edit_dialog = this.set_user_loading
      this.$set(this.edit_item, 'fields', this.user)
    },
    image_clicked() {
      this.set_picture_dialog(true) //open picture dialog
    }
  }
}
