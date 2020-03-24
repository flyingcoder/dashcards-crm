import request from '@/services/axios_instance'
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

  watch: {
    dialog(newVal) {
      this.open = newVal
    },

    open(newVal) {
      this.$emit('update:dialog', newVal)
    },

    'fieldsToEdit.id'(val, old_val) {
      request.get('api/roles/' + val + '/permissions').then(({ data }) => {
        this.permissions = data.data
        this.originalPermissions = cloneDeep(data.data)
      })
    }
  },

  filters: {
    removeSlug(text) {
      return text.split('.')[0]
    }
  },

  computed: {
    does_something_changed() {
      return !(
        JSON.stringify(this.permissions) ===
        JSON.stringify(this.originalPermissions)
      )
    }
  },

  methods: {
    cancel() {
      this.open = false
    },

    save() {
      if (this.validation_passed()) {
        const fields_to_save = {
          role_id: this.fieldsToEdit.id,
          permissions: this.get_updated_permissions()
        }
        this.$emit('save', fields_to_save)
        this.cancel()
      }
    },

    validation_passed() {
      if (this.does_something_changed) {
        return true
      } else {
        this.$event.$emit('open_snackbar', 'Nothing Changed!', 'notification')
        return false
      }
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
    },

    get_updated_permissions() {
      let toBeCheck = cloneDeep(this.permissions)
      let original = cloneDeep(this.originalPermissions)
      let updatedSlugs = []
      for (let i = 0; i < toBeCheck.length; i++) {
        if (
          !(
            toBeCheck[i].slug.view === original[i].slug.view &&
            toBeCheck[i].slug.create === original[i].slug.create &&
            toBeCheck[i].slug.update === original[i].slug.update &&
            toBeCheck[i].slug.delete === original[i].slug.delete
          )
        ) {
          updatedSlugs.push(toBeCheck[i])
        }
      }
      return updatedSlugs
    }
  }
}
