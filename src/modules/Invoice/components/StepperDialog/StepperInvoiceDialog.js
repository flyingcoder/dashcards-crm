import { mapGetters, mapMutations } from 'vuex'
import { api_to } from '@/modules/Invoice/api'
//components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import StepOne from './StepOne.vue'
import StepTwo from './StepTwo.vue'
import StepThree from './StepThree.vue'

export default {
    name: 'StepperInvoiceDialog',
    components: {
        CustomDialog,
        StepOne,
        StepTwo,
        StepThree
    },
    data: () => ({
        open: false,
        stepper: 1,
        btnloading: false,
    }),
    props: {
        type: { type: String, default: 'create' },
        projectLock: { type: Boolean, default: false }
    },
    computed: {
        ...mapGetters(['user']),
        ...mapGetters('invoice', [
            'billed_to',
            'selected_project',
            'due_date',
            'date',
            'billed_from',
            'company_logo',
            'title',
            'rows',
            'toolbar',
            'can_create_invoice',
            'can_edit_invoice',
            'dialog',
            'invoice'
        ]),
        dialogTitle() {
            return this.toolbar.title
        },
        can_proceed_two() {
            return this.stepOneRules()
        },
        can_proceed_three() {
            return this.stepTwoRules()
        },
        can_submit() {
            if (this.dialog.type === 'create') return this.can_create_invoice
            if (this.dialog.type === 'edit') return this.can_edit_invoice
            return false
        },
        buttonLabel() {
            return this.dialog.type === 'create' ? 'Create' : 'Save'
        }
    },
    methods: {
        ...mapMutations('invoice', ['set_dialog', 'revert_invoice']),
        openDialog() {
            this.open = true
            this.btnloading = false
            this.stepper = 1
            if (this.dialog.type === 'create') {
                this.$store.commit('invoice/clear')
            }
        },
        closeDialog() {
            this.open = false
            if (['edit'].includes(this.dialog.type)) this.revert_invoice()
            this.set_dialog({ type: null })
        },
        stepOneRules() {
            return !!(this.billed_from && this.billed_to && this.due_date && this.date && this.title);

        },
        stepTwoRules() {
            return this.rows.length > 0;
        },
        save_invoice() {
            if (!this.can_submit) return
            this.dialog.type === 'create' && this.create_invoice()
            this.dialog.type === 'edit' && this.update_invoice()
        },

        create_invoice() {
            this.btnloading = true
            api_to
                .create_invoice(this.get_invoice())
                .then(({ data }) => this.$emit('created', data))
                .finally(() => {
                    this.$store.commit('invoice/reset_state')
                    this.closeDialog()
                    this.$store.commit('invoice/clear')
                    this.btnloading = false
                })
        },

        update_invoice() {
            this.btnloading = true
            api_to
                .update_invoice(this.get_invoice(), this.invoice.invoice_id)
                .then(({ data }) => this.$emit('updated', data))
                .finally(() => {
                    this.$store.commit('invoice/reset_state')
                    this.closeDialog()
                    this.$store.commit('invoice/clear')
                    this.btnloading = false
                })
        },

        get_invoice() {
            let formData = new FormData()
            formData.append('company_logo', this.invoice.company_logo)
            formData.append('project_id', this.invoice.selected_project || 0)
            formData.append('type', this.invoice.type)
            formData.append('title', this.invoice.title)
            formData.append('billed_to', this.invoice.billed_to)
            formData.append('billed_from', this.invoice.billed_from)
            formData.append('date', this.invoice.date)
            formData.append('due_date', this.invoice.due_date)
            formData.append('total_amount', this.invoice.total_amount)
            formData.append('items', JSON.stringify(this.invoice.rows))
            formData.append('terms', this.invoice.terms)
            formData.append('notes', this.invoice.notes)
            formData.append('parent', this.invoice.parent)
            formData.append('is_recurring', this.invoice.is_recurring)

            let tax = this.calculate_field(this.invoice, 'tax');
            let discount = this.calculate_field(this.invoice, 'discount');
            let shipping = this.calculate_field(this.invoice, 'shipping');
            formData.append('tax', tax === 0 ? 0 : tax.value)
            formData.append('discount', discount === 0 ? 0 : discount.value)
            formData.append('shipping', shipping === 0 ? 0 : shipping.value)
            formData.append('symbol', tax === 0 ? '' : tax.symbol)
            formData.append('send_email', this.invoice.props.send_email)
            formData.append('template', this.invoice.props.template)
            return formData
        },

        calculate_field(state, field, has_symbol = true) {
            if (state[field].show && has_symbol)
                return {
                    value: state[field].value,
                    symbol: state[field].symbol
                }
            if (state[field].show && !has_symbol)
                return {
                    value: state[field].value
                }
            return 0
        },
    }
}