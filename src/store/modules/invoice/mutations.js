import moment from 'moment/moment'
import _cloneDeep from 'lodash/cloneDeep'
import { initial_state } from './initial_state'

export const mutations = {
    set_company_logo: (state, payload) => (state.invoice.company_logo = payload),
    set_dialog: (state, payload) => (state.dialog = payload),
    set_invoice_id: (state, payload) => (state.invoice.invoice_id = payload),
    set_toolbar: (state, payload) => (state.toolbar = payload),
    add_new_row: (state, payload) => state.invoice.rows.push(payload),
    add_rows: (state, payload) => state.invoice.rows.push(...payload),
    delete_row: (state, index) => state.invoice.rows.splice(index, 1),
    update_row: (state, { row, index }) => state.invoice.rows.splice(index, 1, row),
    clear_rows: state => (state.invoice.rows = []),
    set_projects: (state, payload) => (state.projects = payload),
    set_selected_project: (state, payload) => (state.invoice.selected_project = payload),
    set_type: (state, payload) => (state.invoice.type = payload),
    update_date: (state, { date, field }) => (state.invoice[field] = date),
    init_date: state => (state.invoice.date = moment().format('YYYY-MM-DD')),
    set_total_amount: (state, payload) => (state.invoice.total_amount = payload),
    set_textarea: (state, { new_val, field }) => (state.invoice[field] = new_val),
    set_title: (state, newtitle) => (state.invoice.title = newtitle),
    set_billed_to: (state, payload) => (state.invoice.billed_to = payload),
    set_billed_from: (state, payload) => (state.invoice.billed_from = payload),
    set_props: (state, payload) => (state.invoice.props = payload),
    toggle_visibility: (state, { new_val, field }) => (state.invoice[field].show = new_val),
    set_field: (state, { new_val, field }) => (state.invoice[field].value = Number(new_val)),
    set_parent: (state, payload) => (state.invoice.set_parent = payload),
    set_is_recurring: (state, payload) => (state.invoice.is_recurring = payload),
    toggle_symbol(state, field) {
        if (state.invoice[field].symbol === '%') state.invoice[field].symbol = '$'
        else state.invoice[field].symbol = '%'
    },
    reset_state(state) {
        const initial = initial_state()
        Object.keys(initial).forEach(key => {
            if (key !== 'projects') {
                state[key] = initial[key]
            }
        })
    },
    revert_invoice(state) {
        //used when we close the edit invoice, so we revert the invoice changes
        state.invoice = _cloneDeep(state.copy_invoice)
    },
    open_invoice_for_editing(state, payload) {
        state.copy_invoice = _cloneDeep(state.invoice)
        state.invoice.invoice_id = payload.id
        state.invoice.billed_from = payload.billed_from
        state.invoice.billed_to = payload.billed_to
        state.invoice.company_logo = payload.company_logo
        state.invoice.date = payload.date
        state.invoice.due_date = payload.due_date
        state.invoice.rows = payload.items
        state.invoice.project_id = payload.project_id || null
        state.invoice.title = payload.title
        state.invoice.type = payload.type
        state.invoice.notes = payload.notes
        state.invoice.terms = payload.terms
        state.invoice.parent = payload.parent
        state.invoice.is_recurring = payload.is_recurring
        if (!payload.props) {
          state.invoice.props = { send_email: 'no', template : 1 }
        } else {
          state.invoice.props = payload.props
        }
        state.invoice_to_edit = _cloneDeep(state.invoice)
    },
    clear(state) {
        state.copy_invoice = null
        state.invoice.invoice_id = null
        state.invoice.billed_from = null
        state.invoice.billed_to = null
        state.invoice.company_logo = null
        state.invoice.date =  moment().startOf('month').format('YYYY-MM-DD')
        state.invoice.due_date = moment().endOf('month').format('YYYY-MM-DD')
        state.invoice.rows = []
        state.invoice.project_id = null
        state.invoice.title = ''
        state.invoice.type = 'monthly'
        state.invoice.notes = ''
        state.invoice.terms = ''
        state.invoice.parent = null
        state.invoice.is_recurring = 0
        state.invoice.props = { send_email: 'no', template : 1 }
        state.invoice_to_edit = null
    }
}