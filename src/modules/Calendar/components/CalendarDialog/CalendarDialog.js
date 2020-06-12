import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    name: 'CalendarDialog',
    components: {
        CustomDialog
    },

    props: {
        dialog: Boolean,
        dialogTitle: String,
        isEditDialog: Boolean,
        fieldsToEdit: { type: Object, default: () => {} }
    },

    data: () => ({
        open: false,
        title: null,
        description: null,
        properties: {}
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
        }
    },

    methods: {
        cancel() {
            this.open = false
        },
        save() {
            const fields_to_save = {
                title: this.title,
                description: this.description,
                properties: this.properties
            }
            this.$emit('save', fields_to_save)
        },

        update_fields({ fields }) {
            const new_fields = Object.assign({}, fields)
            this.title = new_fields.title
            this.description = new_fields.description
            this.properties = new_fields.properties
        },

        clear_and_close() {
            Object.assign(this.$data, this.$options.data.apply(this))
            this.cancel() //close the modal
        }
    }
}