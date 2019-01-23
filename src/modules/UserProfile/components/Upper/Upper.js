//Components
import Icons from '../Icons.vue'
import UserInfo from '../UserInfo.vue'

export default {
  components: {
    Icons,
    UserInfo
  },

  methods: {
    handle_icon(icon) {
      console.log(icon)
    }
  }
}
