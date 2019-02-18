import { mapGetters, mapMutations } from 'vuex'
//Components
import DialogToolbar from '../DialogToolbar.vue'
import TopLeft from './TopLeft/TopLeft.vue'
import TopRight from './TopRight/TopRight.vue'
import TableSection from './TableSection/TableSection.vue'

export default {
  components: {
    DialogToolbar,
    TopLeft,
    TopRight,
	  TableSection
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
