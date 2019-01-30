import { mapMutations } from 'vuex'
//Components
import UserInfo from '../UserInfo.vue'
import AddPicture from '../AddPicture/AddPicture.vue'

export default {
  components: {
    UserInfo,
    AddPicture
  },

  methods: {
    ...mapMutations('memberProfile', ['set_picture_dialog']),

    image_clicked() {
      this.set_picture_dialog(true) //open picture dialog
    }
  }
}
