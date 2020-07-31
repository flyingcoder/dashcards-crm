import {validations} from './validations'
import makeRequestTo from '@/services/makeRequestTo'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    name: 'TeamsDialog',
    mixins: [validations],
    props: {
        dialog: Boolean,
        title: String,
        isEditDialog: {
            type: Boolean,
            default: false
        },
        fieldsToEdit: {
            type: Object,
            default: () => {
            }
        }
    },

    components: {
        CustomDialog
    },

    created() {
        this.$event.$on('btnloading_off', status => (this.btnloading = status))
        this.show_create_password = this.isEditDialog
        this.$event.$on('new-user-group-added', data => {
            this.group_items.push(data)
        })
    },
    computed: {
        disabled_btn() {
            return this.$v.$invalid && (this.telephone && !this.telephone_is_valid)
        }
    },
    data: () => ({
        btnloading: false,
        open: false,
        first_name: '',
        last_name: '',
        group_name: '',
        job_title: '',
        email: '',
        contact_number: null,
        telephone: null,
        defaultCountryCode: null,
        rate: '',
        address: '',
        password: '',
        repeat_password: '',
        group_items: [],
        show_password: false,
        show_repeat_password: false,
        loading: false,
        telephone_is_valid: false,
        show_create_password: false,
        show_create_password_label: [
            {text: 'Let user set their password', value: false},
            {text: 'Manually set user password', value: true}
        ]

    }),

    watch: {
        dialog(new_val) {
            this.open = new_val
            new_val && this.fill_group_items()
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
        show_create_password(new_val) {
            if (!this.show_create_password) {
                this.password = this.repeat_password = ''
            }
        }
    },

    methods: {
        fill_group_items() {
            this.loading = false
            makeRequestTo
                .get_all_groups()
                .then(({data}) => {
                    this.group_items = data.filter(i => !i.slug.includes('client'))
                })
                .finally(() => (this.loading = false))
        },

        cancel() {
            this.open = false
            this.btnloading = false
            this.$emit('close-dialog')
        },

        save() {
            if (this.all_validations_passed()) {
                this.btnloading = true
                const fields_to_save = this.get_fields()
                this.$emit('save', fields_to_save)
            }
        },

        update_fields({fields}) {
            fields['rate'] = 'rate' in fields.meta ? fields.meta.rate.value : ''
            fields['address'] = 'address' in fields.meta ? fields.meta.address.value : ''
            this.password = 'dummypassword1'
            this.repeat_password = 'dummypassword1'
            const new_fields = Object.assign({}, fields)
            this.first_name = new_fields.first_name
            this.last_name = new_fields.last_name
            this.email = new_fields.email
            this.rate = new_fields.rate
            this.address = new_fields.address
            if (new_fields.telephone) {
                this.contact_number = new_fields.telephone.phoneNumber
                this.defaultCountryCode = new_fields.telephone.countryCode
            } else {
                this.contact_number = null
                this.defaultCountryCode = null
            }
            this.telephone = new_fields.telephone
            this.group_name = new_fields.group_name
            this.job_title = new_fields.job_title
        },

        get_fields() {
            let fields = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                rate: this.rate,
                address: this.address,
                telephone: this.telephone,
                group_name: this.group_name,
                job_title: this.job_title
            }
            if (this.isEditDialog) {
                fields.id = this.fieldsToEdit.id
            }
            fields.admin_set_password = false
            if (this.show_create_password) {
                fields.admin_set_password = true
                fields.password = this.password
                fields.password_confirmation = this.repeat_password
            }
            return fields
        },

        clear_and_close() {
            this.first_name = this.last_name = this.group_name = ''
            this.job_title = this.email = this.contact_number = ''
            this.password = this.repeat_password = ''
            this.rate = this.address = ''
            this.cancel() //close the modal
        }
    }
}