import { mapMutations, mapGetters } from 'vuex'
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
    ...mapGetters('memberProfile', ['user'])
  },

  methods: {
    ...mapMutations('memberProfile', ['set_picture_dialog']),
    open_edit_dialog(item) {
      this.edit_dialog = true
      this.$set(this.edit_item, 'id', item.id)
      this.$set(this.edit_item, 'fields', item)
    },
    image_clicked() {
      this.set_picture_dialog(true) //open picture dialog
    }
  }
}
