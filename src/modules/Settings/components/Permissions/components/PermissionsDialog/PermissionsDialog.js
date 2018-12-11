import cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'PermissionDialog',

  props: {
    dialog: Boolean,
    title: String,
    isEditDialog: Boolean,
    fieldsToEdit: { type: Object, default: () => {} }
  },

  data: () => ({
    open: false,
    name: null,
    description: null,
    slug: {
      create: false,
      view: false,
      update: false,
      delete: false
    }
  }),

  watch: {
    dialog(new_val) {
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

  methods: {
    cancel() {
      this.open = false
    },
    save() {
      const fields_to_save = {
        name: this.name,
        description: this.description,
        slug: this.slug
      }
      this.$emit('save', fields_to_save)
    },

    update_fields({ fields }) {
      const new_fields = cloneDeep(fields)
      this.name = new_fields.name
      this.description = new_fields.description
      this.slug = new_fields.slug
    },

    clear_and_close() {
      this.name = ''
      this.description = ''
      this.slug = {
        create: false,
        view: false,
        update: false,
        delete: false
      }
      this.cancel() //close the modal
    }
  }
}
