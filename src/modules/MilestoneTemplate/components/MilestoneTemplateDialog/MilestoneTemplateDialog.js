import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    name: 'MilestoneTemplateDialog',
    components: {
        CustomDialog
    },

    props: {
        dialog: Boolean,
        title: String,
        isEditDialog: {type: Boolean, default: false},
        fieldsToEdit: Object
    },

    data: () => ({
        open: false,
        name: null,
        status: 'active'
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
                if (this.isEditDialog) {
                    this.name = new_val.name
                    this.status = new_val.status
                }
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
                name: this.name,
                status: this.status
            }
            this.$emit('save', fields_to_save)
        },

        update_fields({fields}) {
            const new_fields = Object.assign({}, fields)
            this.name = new_fields.name
            this.status = new_fields.status
        },

        clear_and_close() {
            Object.assign(this.$data, this.$options.data.apply(this))
            this.cancel() //close the modal
        }
    }
}
