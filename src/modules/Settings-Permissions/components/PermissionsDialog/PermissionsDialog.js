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
    permission_name : null,
    selected_permission: null,
    selected_group: null,
    permissions: [],
    group_items: [],
    loading_permissions: false,
    slug: {
      create: false,
      view: false,
      update: false,
      delete: false
    }
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
    },
    'slug.create'(val) {
      if (val) {
        this.slug.view = true
      } else {
        this.slug.update = false
      }
    },
    'slug.update'(val) {
      if (val) {
        this.slug.create = true
      } else {
        this.slug.delete = false
      }
    },
    'slug.delete'(val) {
      if (val) {
        this.slug.update = true
      }
    },
    'slug.view'(val) {
      if (!val) {
        this.slug = {
          create: false,
          view: false,
          update: false,
          delete: false
        }
      }
    }
  },

  created() {
    this.loading_permissions = true
    api_to
      .get_default_permissions()
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
        permission_id: this.selected_permission,
        group: this.selected_group,
        description: this.description,
        slug: this.slug
      }
      this.$emit('save', fields_to_save)
    },

    update_fields({ fields }) {
      const new_fields = cloneDeep(fields)
      this.selected_group = new_fields.selected_group
      this.description = new_fields.description
      this.slug = new_fields.slug
      this.permission_name = new_fields.name
    },

    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel() //close the modal
    }
  }
}
