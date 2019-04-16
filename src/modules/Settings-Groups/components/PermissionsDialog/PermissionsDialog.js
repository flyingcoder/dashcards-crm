import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import { getPermissions } from '../../api'

export default {
  name: 'GroupsDialog',
  components: {
    CustomDialog
  },

  props: {
    dialog: Boolean,
    title: String,
    isEditDialog: Boolean,
    fieldsToEdit: { type: Object, default: () => {} }
  },

  data: () => ({
    open: false,
    permissions: [],
    slug: {
      create: false,
      view: false,
      update: false,
      delete: false
    }
  }),

  created() {
    getPermissions().then(({ data }) => (this.permissions = data))
  },

  watch: {
    dialog(newVal) {
      this.open = newVal
    },
    open(newVal) {
      this.$emit('update:dialog', newVal)
    },
    'permission.slug.create'(val) {
      if (val) {
        this.permission.slug.view = true
      } else {
        this.permission.slug.update = false
      }
    },
    'permission.slug.update'(val) {
      if (val) {
        this.permission.slug.create = true
      } else {
        this.permission.slug.delete = false
      }
    },
    'permission.slug.delete'(val) {
      if (val) {
        this.permission.slug.update = true
      }
    },
    'permission.slug.view'(val) {
      if (!val) {
        this.permission.slug = {
          create: false,
          view: false,
          update: false,
          delete: false
        }
      }
    }
  },

  methods: {
    cancel() {
      this.open = false
    },
    save() {
      this.open = false
    },
    clearAndClose() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel() //close the modal
    },
    snakeCaseToNormal(text) {
      return text.split('_').join(' ')
    }
  }
}
