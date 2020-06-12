import { list_functionality } from '@/services/list-functionality/list-functionality'
import isEmpty from 'lodash/isEmpty'
import { api_to } from './api'
//Components
import Breadcrumb from '@/common/Breadcrumb.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import TableHeader from '@/common/TableHeader.vue'
import AddPicture from './components/AddPicture.vue'

export default {
    name: 'Company',
    mixins: [list_functionality],
    components: {
        Breadcrumb,
        DeleteDialog,
        TableHeader,
        AddPicture
    },
    data: () => ({
        paths: [
            { text: 'Settings', disabled: false, router_name: 'settings' },
            { text: 'Company', disabled: true, router_name: null }
        ],
        company: null,
        search: '',
        open_add_picture: false,
        defaultCountryCode: null,
        btnloading: false,
        telephone_is_valid: false,
        contact_number: null
    }),
    mounted() {
        this.getCompanyDetails()
    },
    computed: {
        user() {
            return this.$store.getters.user
        },
        can_update() {
            if (this.user.is_company_owner || this.user.is_admin || this.user.is_manager) return true
            return false
        },
        company_logo: {
            get() {
                return this.company.company_logo
            },
            set(val) {
                this.company.company_logo = val
            }
        }
    },
    watch :{ 
        company(val){
            this.contact_number = val.contact ? val.contact.phoneNumber : null
            this.defaultCountryCode = val.contact ? val.contact.countryCode : null
        }
    },
    methods: {
        image_clicked() {
            this.open_add_picture = true
        },
        getCompanyDetails() {
            api_to.get_company_info(this.user.company_id)
                .then(({ data }) => {
                    this.company = data
                })
        },
        showUpdate(payload) {
            this.telephone_is_valid = payload.isValid
            this.company.contact = payload.isValid ? payload : null
        },
        telephone_on_blur() {
            if (!this.telephone_is_valid) {
                this.$event.$emit('open_snackbar', 'Invalid phone format', 'error')
            }
        },
        is_valid() {
            if (this.company.contact && !this.telephone_is_valid) return false
            return (this.company.name && this.company.name !== '')
        },
        getFields() {
            return {
                name: this.company.name,
                short_description: this.company.short_description,
                long_description: this.company.long_description,
                domain: this.company.domain,
                address: this.company.address,
                contact: this.company.contact,
                email: this.company.email
            }
        },
        update_company() {
            if (!this.is_valid()) {
                this.$event.$emit('open_snackbar', 'Please fill in required field *', 'error')
                return
            }
            this.btnloading = true
            api_to.update_company_profile(this.user.company_id, this.getFields())
                .then(({ data }) => {
                    this.company = data
                    this.$event.$emit('open_snackbar', 'Company info updated.')
                })
                .finally(() => this.btnloading = false)
        }
    }
}