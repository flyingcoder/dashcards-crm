import { mapGetters, mapMutations } from 'vuex'
//Components
import DialogToolbar from '../DialogToolbar.vue'

export default {
  components: {
    DialogToolbar
  },
  props: {
    type: String
  },
  data: () => ({
    image_preview: null
  }),
  computed: {
    ...mapGetters('invoice', ['company_logo', 'dialog']),
    invoice_dialog() {
      return this.dialog.open && this.dialog.type === this.type
    },
    billed_to: {
      get() {
        return this.$store.getters['invoice/billed_to']
      },
      set(newVal) {
        this.$store.commit('invoice/set_billed_to', newVal)
      }
    },

    billed_from: {
      get() {
        return this.$store.getters['invoice/billed_from']
      },
      set(newVal) {
        this.$store.commit('invoice/set_billed_from', newVal)
      }
    }
  },
  watch: {
    company_logo(val) {
      if (!val) {
        this.image_preview = null
        return
      }
      const reader = new FileReader()
      reader.onload = e => {
        this.image_preview = e.target.result
      }
      reader.readAsDataURL(val)
    }
  },

  methods: {
    ...mapMutations('invoice', ['set_dialog']),
    file_selected(event) {
      if (event.target.files && event.target.files[0]) {
        this.$store.commit('invoice/set_company_logo', event.target.files[0])
      }
    }
  }
}
