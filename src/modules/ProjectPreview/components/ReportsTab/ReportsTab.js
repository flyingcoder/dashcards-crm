import makeRequestTo from '@/services/makeRequestTo'
//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import ReportsList from './components/ReportsList/ReportsList.vue'

export default {
  components: {
    CustomDialog,
    ReportsList
  },

  props: {
    id: [Number, String]
  },

  data: () => ({
    reports: [],
    loading: false,
    iframe_src: null,
    iframe_loading: false,
    link: '',
    title: '',
    valid_url: false,
    activate_save: false
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
    this.loading = true
    makeRequestTo
      .get_project_reports(this.id)
      .then(({ data }) => (this.reports = data.data))
      .finally(() => (this.loading = false))
  },

  methods: {
    open_dialog() {
      this.$refs.dialog.open_dialog()
    },

    iframe_loaded() {
      this.$store.commit('set_custom_loader', false)
      this.activate_save = true
    },

    validate_url(event) {
      this.$nextTick(() => {
        this.valid_url = event.target.validity.valid
      })
    },

    on_dialog_save() {
      this.$refs.dialog.close_dialog()
      this.$store.commit('set_custom_loader', true)
      this.iframe_src = this.link
    },

    save_report() {
      makeRequestTo
        .add_project_report(this.id, {
          url: this.link,
          title: this.title
        })
        .then(({ data }) => {
          this.link = ''
          this.title = ''
          this.activate_save = false
          this.iframe_src = null
          this.reports.push(data)
        })
    }
  }
}
