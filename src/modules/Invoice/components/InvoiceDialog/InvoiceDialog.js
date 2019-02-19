import { mapGetters, mapMutations } from 'vuex'
import _cloneDeep from 'lodash/cloneDeep'
//Components
import DialogToolbar from '../DialogToolbar.vue'
import TopLeft from './TopLeft/TopLeft.vue'
import TopRight from './TopRight/TopRight.vue'
import TableSection from './TableSection/TableSection.vue'
import BottomLeft from './BottomLeft/BottomLeft.vue'
import BottomRight from './BottomRight/BottomRight.vue'

export default {
  components: {
    DialogToolbar,
    TopLeft,
    TopRight,
    TableSection,
    BottomLeft,
    BottomRight
  },
  props: {
    type: String
  },

  data: () => ({
    copied_invoice: null
  }),

  computed: {
    ...mapGetters('invoice', ['dialog']),
    invoice_dialog() {
      return this.dialog.open && this.dialog.type === this.type
    }
  },
  watch: {
    'dialog.open'(val) {
      if (!val && this.type === 'edit') {
        //when dialog opens
        this.update_state(this.copied_invoice)
      } else {
        //when closes
        this.copied_invoice = _cloneDeep(this.$store.state.invoice.invoice)
      }
    }
  },
  methods: {
    ...mapMutations('invoice', ['set_dialog', 'update_state'])
  }
}
