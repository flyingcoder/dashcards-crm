import moment from 'moment'

export const initial_state = () => ({
    invoice: {
        company_logo: null,
        invoice_id: null,
        title: '',
        billed_to: null,
        billed_from: null,
        rows: [],
        selected_project: null,
        type: 'monthly',
        due_date: moment().endOf('month').format('YYYY-MM-DD'),
        date: moment().startOf('month').format('YYYY-MM-DD'),
        total_amount: 0,
        notes: '',
        terms: '',
        tax: {
            symbol: '%',
            value: null,
            show: false
        },
        discount: {
            symbol: '%',
            value: null,
            show: false
        },
        shipping: {
            value: null,
            show: false
        },
        props: {
            template: 1,
            send_email: 'no'
        },
        parent: null,
        is_recurring: 0
    },
    copy_invoice: null,
    invoice_to_edit: null,
    dialog: {
        type: null,
        open: false
    },
    toolbar: {
        title: null
    },
    projects: []
})