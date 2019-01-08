import { mapMutations } from 'vuex'

export default {
  props: {
    conv: Object
  },
  methods: {
    ...mapMutations('chat', ['toggle_active_conv'])
  }
}
