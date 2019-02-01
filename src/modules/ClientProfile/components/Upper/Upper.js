import { mapMutations, mapGetters } from 'vuex'
//Components
import UserInfo from '../UserInfo.vue'
import AddPicture from '../AddPicture/AddPicture.vue'

export default {
  components: {
    UserInfo,
    AddPicture
  },

  computed: {
    ...mapGetters('memberProfile', ['user'])
  },

  methods: {
    ...mapMutations('memberProfile', ['set_picture_dialog', 'set_user']),

    image_clicked() {
      this.set_picture_dialog(true) //open picture dialog
    }
  }
}
