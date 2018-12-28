//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  components: {
    CustomDialog
  },
  data: () => ({
    iframe_src: null,
    iframe_loading: false,
    link: '',
    title: '',
    valid_url: false
  }),

  computed: {
    is_disabled() {
      return !this.link || !this.valid_url || !this.title
    }
  },

  created() {
    this.$router.replace({
      name: 'project_preview',
      query: { tab: 'Reports' }
    })
  },

  methods: {
    open_dialog() {
      this.$refs.dialog.open_dialog()
    },

    iframe_loaded() {
      this.$store.commit('set_custom_loader', false)
    },

    validate_url(event) {
      this.$nextTick(() => {
        this.valid_url = event.target.validity.valid
      })
    },

    on_dialog_save() {
      this.$refs.dialog.close_dialog()
      this.iframe_src = this.link
    }
  }
}
