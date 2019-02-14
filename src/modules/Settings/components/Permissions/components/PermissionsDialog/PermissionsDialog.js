import cloneDeep from 'lodash/cloneDeep'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import makeRequestTo from '@/services/makeRequestTo'
import { api_to } from '../../api'

export default {
  name: 'PermissionDialog',
  components: { CustomDialog },

  props: {
    dialog: Boolean,
    title: String,
    isEditDialog: Boolean,
    fieldsToEdit: { type: Object, default: () => {} }
  },

  data: () => ({
    open: false,
    description: null,
    selected_permissions: [],
    selected_group: null,
    permissions: [],
    group_items: [],
    loading_permissions: false
  }),

  watch: {
    dialog: {
      handler(new_val) {
        this.open = new_val
        new_val && this.fill_group_items()
      },
      immediate: true
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

  created() {
    this.loading_permissions = true
    api_to
      .get_permissions()
      .then(({ data }) => (this.permissions = data))
      .finally(() => (this.loading_permissions = false))
  },

  methods: {
    fill_group_items() {
      this.loading = false
      makeRequestTo
        .get_all_groups()
        .then(({ data }) => (this.group_items = data))
        .finally(() => (this.loading = false))
    },
    cancel() {
      this.open = false
    },
    save() {
      const fields_to_save = {
        group: this.selected_group,
        description: this.description,
        slug: this.permissions.filter(
          p => !this.selected_permissions.includes(p)
        )
      }
      this.$emit('save', fields_to_save)
    },

    update_fields({ fields }) {
      const new_fields = cloneDeep(fields)
      this.selected_group = new_fields.selected_group
      this.description = new_fields.description
    },

    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel() //close the modal
    }
  }
}
