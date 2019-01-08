import { mapMutations } from 'vuex'

export default {
  props: {
    conv: Object
  },
  methods: {
    ...mapMutations('chat', ['toggle_open_conv', 'close_active_conv'])
  }
}
