import { getPermissions } from '../../api'
import { cloneDeep } from 'lodash'
// Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
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
    originalPermissions: []
  }),

  created() {
    getPermissions().then(({ data }) => {
      this.permissions = data
      this.originalPermissions = cloneDeep(data)
    })
  },

  watch: {
    dialog(newVal) {
      this.open = newVal
    },
    open(newVal) {
      this.$emit('update:dialog', newVal)
    }
  },

  methods: {
    cancel() {
      this.open = false
    },
    save() {
      this.open = false
      console.log(this.permissions);
    },
    clearAndClose() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel() //close the modal
    },
    snakeCaseToNormal(text) {
      return text.split('_').join(' ')
    },
    viewSlug(index, value) {
      if (!value) {
        this.$set(this.permissions[index], 'slug', {
          view: false,
          create: false,
          update: false,
          delete: false
        })
      }
    },
    createSlug(index, value) {
      if (value) this.$set(this.permissions[index].slug, 'view', true)
      else {
        this.$set(this.permissions[index].slug, 'update', false)
        this.$set(this.permissions[index].slug, 'delete', false)
      }
    },
    updateSlug(index, value) {
      if (value) {
        this.$set(this.permissions[index].slug, 'create', true)
        this.$set(this.permissions[index].slug, 'view', true)
      } else this.$set(this.permissions[index].slug, 'delete', false)
    },
    deleteSlug(index, value) {
      let permissions = cloneDeep(this.permissions)
      if (value) {
        permissions[index].slug = {
          view: true,
          create: true,
          update: true,
          delete: true
        }
        this.permissions = permissions
      }
    }
  }
}
