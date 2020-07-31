import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    name: 'MilestoneDialog',
    components: {
        CustomDialog
    },

    props: {
        dialog: Boolean,
        dialogTitle: String,
        isEditDialog: Boolean,
        fieldsToEdit: {
            type: Object, default: () => {
            }
        }
    },

    data: () => ({
        open: false,
        title: null,
        status: 'Active',
        days_init_value: 1,
        disabled: false,
        btnloading: false
    }),

    computed: {
        days: {
            get: function () {
                return this.days_init_value
            },
            set: function (newValue) {
                if (parseInt(newValue) < 1) {
                    this.days_init_value = 1
                    return
                }
                this.days_init_value = newValue
            }
        },
        days_label() {
            return this.disabled ? 'Days' : 'Days *'
        },
        disabled_btn() {
            return !this.title || !this.status
        }
    },

    watch: {
        dialog(new_val) {
            this.open = new_val
            this.btnloading = false
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
                status: this.status,
                days: this.disabled ? 0 : this.days
            }
            this.btnloading = true
            this.$emit('save', fields_to_save)
            console.log(fields_to_save)
        },

        update_fields({fields}) {
            const new_fields = Object.assign({}, fields)
            this.title = new_fields.title
            this.status = new_fields.status
            this.days = this.disabled ? 0 : new_fields.days
            console.log(new_fields)
        },

        clear_and_close() {
            Object.assign(this.$data, this.$options.data.apply(this))
            this.cancel() //close the modal
        }
    }
}
