import cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'

export default {
  name: 'GroupsDialog',

  props: {
    dialog: Boolean,
    title: String,
    isEditDialog: Boolean,
    fieldsToEdit: { type: Object, default: () => {} }
  },

  data: () => ({
    open: false,
    name: '',
    description: '',
    permission_items: [],
    selected_permission: null
  }),

  computed: {
    are_fields_valid() {
      return (
        !!(this.name && this.description && this.selected_permission) &&
        this.does_something_changed
      )
    },
    does_something_changed() {
      if (!this.isEditDialog) return true //if it is not Edit Dialog
      return (
        this.name !== this.fieldsToEdit.fields.name ||
        this.description !== this.fieldsToEdit.fields.description ||
        this.selected_permission !==
          this.fieldsToEdit.fields.selected_permission
      )
    }
  },

  watch: {
    dialog(new_val) {
      this.open = new_val
    },
    open(new_val) {
      this.$emit('update:dialog', new_val)
      new_val && this.fill_dropdown()
    },
    fieldsToEdit: {
      handler(new_val) {
        this.isEditDialog && this.update_fields(new_val)
      },
      deep: true
    }
  },

  methods: {
    cancel() {
      this.open = false
    },
    save() {
      if (this.validation_passed()) {
        let name = this.name
        let description = this.description
        let permission_id = this.selected_permission
        this.$emit('save', { name, description, permission_id })
      }
    },
    validation_passed() {
      if (
        this.name &&
        this.description &&
        this.selected_permission &&
        this.does_something_changed
      ) {
        return true
      }
      this.$event.$emit('open_snackbar', 'Nothing Changed!')
      return false
    },
    update_fields({ fields }) {
      const new_fields = cloneDeep(fields)
      this.name = new_fields.name
      this.description = new_fields.description
      this.selected_permission = new_fields.selected_permission
    },

    clear_and_close() {
      this.name = ''
      this.description = ''
      this.selected_permission = ''
      this.cancel() //close the modal
    },

    fill_dropdown() {
      this.loading = true
      request
        .get('api/permission?all=true')
        .then(response => (this.permission_items = response.data))
        .finally(() => (this.loading = false))
    }
  }
}
