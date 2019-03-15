import request from '@/services/axios_instance'

export default {
  name: 'SelectTemplateDialog',
  props: {
    open: Boolean,
    title: String,
    dialogTitle: String
  },
  data: () => ({
    loading: false,
    templates: [],
    selected_template: null
  }),

  computed: {
    is_disabled() {
      return this.loading || !this.selected_template
    }
  },

  watch: {
    open(val) {
      val && this.fill_dropdown()
    }
  },
  methods: {
    fill_dropdown() {
      this.loading = true
      request
        .get('api/template?all=true&type=milestone')
        .then(response => (this.templates = response.data))
        .finally(() => (this.loading = false))
    },

    cancel() {
      this.$emit('update:open', false)
    },

    save() {
      if (this.is_disabled) return
      this.$emit('save', this.selected_template)
    }
  }
}
