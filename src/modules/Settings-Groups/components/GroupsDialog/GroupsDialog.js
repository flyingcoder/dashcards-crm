import cloneDeep from 'lodash/cloneDeep'
import request from '@/services/axios_instance'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

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
    name: '',
    description: '',
    selected_group: null,
    group_items: []
  }),

  computed: {
    are_fields_valid() {
      return !!(this.name && this.selected_group) && this.does_something_changed
    },
    does_something_changed() {
      if (!this.isEditDialog) return true //if it is not Edit Dialog
      return (
        this.name !== this.fieldsToEdit.fields.name ||
        this.description !== this.fieldsToEdit.fields.description ||
        this.selected_group !== this.fieldsToEdit.fields.selected_group
      )
    }
  },

  watch: {
    dialog(new_val) {
      if (new_val) {
        //when dialog opens
        request
          .get(`api/groups?all=true`)
          .then(({ data }) => (this.group_items = data))
      }
      this.open = new_val
    },
    open(new_val) {
      this.$emit('update:dialog', new_val)
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
        const fields_to_save = {
          name: this.name,
          description: this.description,
          selected_group: this.selected_group
        }
        this.$emit('save', fields_to_save)
      }
    },
    validation_passed() {
      if (this.name && this.selected_group && this.does_something_changed) {
        return true
      }
      this.$event.$emit('open_snackbar', 'Nothing Changed!', 'notification')
      return false
    },
    update_fields({ fields }) {
      const new_fields = cloneDeep(fields)
      this.name = new_fields.name
      this.description = new_fields.description
      this.selected_group = new_fields.selected_group
    },

    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel() //close the modal
    }
  }
}
