import { mapMutations } from 'vuex'
//Components
import Icons from '../Icons.vue'
import UserInfo from '../UserInfo.vue'
import AddPicture from '../AddPicture/AddPicture.vue'

export default {
  components: {
    Icons,
    UserInfo,
    AddPicture
  },

  methods: {
    ...mapMutations('memberProfile', ['set_picture_dialog']),

    handle_icon(icon) {
      const handler = `${icon}_clicked`
      this[handler]()
    },

    image_clicked() {
      this.set_picture_dialog(true) //open picture dialog
    }
  }
}
