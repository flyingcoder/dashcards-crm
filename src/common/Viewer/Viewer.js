import Empty from '@/common/Empty'

export default {
  name: 'Viewer',
  components: {
    Empty
  },
  props: {
    modalWidth: {
      type: Number,
      default: 800
    },
    modalHeight: {
      type: Number,
      default: 600
    },
    media: [Array]
  },

  data: () => ({
    dialog: false,
    btnloading: false,
    overlay: false
  }),
  mounted() {
    this.overlay = true
  },
  created() {
    // console.log(this.item)
  },
  computed: {
    showArrows() {
      return this.allowed_display.length > 1
    },
    allowed_display() {
      const allows = [
        'project.files.videos',
        'project.files.images',
        'project.files.links'
      ]
      var items = this.media.filter(item => {
        return allows.includes(item.collection_name)
      })

      return items.filter(item => {
        if (
          item.collection_name === 'project.files.links' &&
          !item.custom_properties.embed
        ) {
          return false
        }
        return true
      })
    }
  },
  methods: {
    closeAllIframe() {
      const iframes = document.getElementsByTagName('iframe')
      if (iframes != null) {
        for (var i = 0; i < iframes.length; i++) {
          iframes[i].src = iframes[i].src
        }
      }
    },
    openDialog() {
      this.dialog = true
    },
    closeDialog() {
      this.closeAllIframe()
      this.dialog = false
    }
  }
}
