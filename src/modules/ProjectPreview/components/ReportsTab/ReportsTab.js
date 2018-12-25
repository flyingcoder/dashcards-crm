import url_exists from 'url-exists'
//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  components: {
    CustomDialog
  },
  data: () => ({
    iframe_src: null,
    iframe_loading: false,
    link: null
  }),

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

    on_dialog_save() {
      this.$refs.dialog.activate_loading()
      url_exists(this.link, (err, exists) => {
        this.$refs.dialog.disable_loading()
        if (exists) {
          this.$refs.dialog.close_dialog()
          this.$store.commit('set_custom_loader', true)
          this.iframe_src = this.link
        } else {
          this.$event.$emit('open_snackbar', `The page doesn't exists`, 'red')
        }
      })
    }
  }
}
