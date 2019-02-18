import { mapGetters, mapMutations } from 'vuex'
//Components
import DialogToolbar from '../DialogToolbar.vue'
import TopLeft from './TopLeft/TopLeft.vue'

export default {
  components: {
    DialogToolbar,
    TopLeft
  },
  props: {
    type: String
  },
  computed: {
    ...mapGetters('invoice', ['dialog']),
    invoice_dialog() {
      return this.dialog.open && this.dialog.type === this.type
    }
  },
  methods: {
    ...mapMutations('invoice', ['set_dialog'])
  }
}
