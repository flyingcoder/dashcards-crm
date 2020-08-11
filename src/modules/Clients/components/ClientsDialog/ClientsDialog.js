import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import request from "@/services/axios_instance";

export default {
    name: 'ClientsDialog',

    components: {
        CustomDialog
    },

    props: {
        dialog: Boolean,
        dialogTitle: String,
        isEditDialog: Boolean,
        fieldsToEdit: {
            type: Object,
            default: () => {
            }
        }
    },

    data: () => ({
        open: false,
        show_password: false,
        show_repeat_password: false,
        first_name: null,
        last_name: null,
        company_name: null,
        telephone: null,
        contact_number: null,
        contact_name: null,
        email: null,
        status: 'Active',
        location: null,
        password: null,
        repeat_password: null,
        status_items: [{
            id: 1,
            text: 'Active',
            value: 'Active'
        },
            {
                id: 2,
                text: 'Inactive',
                value: 'Inactive'
            }
        ],
        telephone_is_valid: false,
        defaultCountryCode: 'CA',
        is_new_client: true,
        is_new_client_items: [
            {text: 'Add as new client', value: true},
            {text: 'Attach to existing client', value: false}
        ],
        clients_list: [],
        existing_client: null
    }),
    created() {
        this.get_all_clients()
    },
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
        is_new_client(val) {
            if (val) this.existing_client = null
        }
    },
    computed: {
        readyForSubmit() {
            return this.validation_passed()
        },
        exists_client_label() {
            return this.is_new_client ? 'Enter client details below' : 'Select from existing clients *'
        }
    },
    methods: {
        cancel() {
            this.open = false
        },
        validation_passed() {
            if (!this.is_new_client) {
                return this.existing_client && this.company_name
            }
            let tel_is_valid = true
            if (this.telephone) {
                tel_is_valid = this.telephone_is_valid
            }
            if (!this.isEditDialog) {
                return (
                    tel_is_valid &&
                    this.password &&
                    this.repeat_password &&
                    this.first_name &&
                    this.last_name &&
                    this.company_name &&
                    this.email &&
                    this.status
                )
            }

            return (
                tel_is_valid &&
                this.first_name &&
                this.last_name &&
                this.company_name &&
                this.email &&
                this.status
            )
        },
        save() {
            if (!this.is_new_client) {
                this.$emit('save', {company_name: this.company_name, client_id: this.existing_client.id})
                return
            }
            const fields_to_save = {
                first_name: this.first_name,
                last_name: this.last_name,
                company_name: this.company_name,
                telephone: this.telephone,
                contact_name: this.contact_name,
                email: this.email,
                status: this.status,
                location: this.location
            }

            if (!this.isEditDialog) {
                if (this.password !== this.repeat_password) {
                    this.$event.$emit('open_snackbar', `Passwords don't match`, 'error')
                    this.$event.$emit('btnloading_off', false)
                    return
                }
                fields_to_save.password = this.password
                fields_to_save.password_confirmation = this.repeat_password
            }
            this.$emit('save', fields_to_save)
        },

        update_fields({fields}) {
            const new_fields = Object.assign({}, fields)
            this.first_name = new_fields.first_name
            this.last_name = new_fields.last_name
            this.company_name = new_fields.company.name || null
            this.contact_name = new_fields.company.others.contact_name || null
            this.email = new_fields.email
            this.status = new_fields.props.status || 'Active'
            this.location = new_fields.props.location || null

            if (new_fields.telephone) {
                this.contact_number = new_fields.telephone.phoneNumber
                this.defaultCountryCode = new_fields.telephone.countryCode
                this.telephone_is_valid = true
            } else {
                this.contact_number = null
                this.defaultCountryCode = null
            }
            this.is_new_client = true
        },
        clearAll() {
            this.first_name = ''
            this.last_name = ''
            this.company_name = ''
            this.location = ''
            this.contact_name = ''
            this.telephone = null
            this.email = ''
            this.status = 'Active'
            this.password = ''
            this.repeat_password = ''
            this.telephone_is_valid = false
            this.existing_client = null
            this.is_new_client = true

        },
        clear_and_close() {
            this.clearAll()
            this.cancel() //close the modal
        },
        showUpdate(payload) {
            this.telephone_is_valid = payload.isValid
            this.telephone = payload.isValid ? payload : null
        },
        telephone_on_blur() {
            if (!this.telephone_is_valid) {
                this.$event.$emit('open_snackbar', 'Invalid Phone format', 'error')
            }
        },
        get_all_clients() {
            request.get(`api/company/clients`)
                .then(({data}) => {
                    this.clients_list = data
                })
        }
    }
}