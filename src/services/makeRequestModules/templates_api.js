import request from '@/services/axios_instance'

export const templates_api = {
    get_milestone_templates(payload) {
        return request.get('/api/template', payload)
    },

    add_new_milestone_template(payload) {
        return request.post('/api/template', payload)
    },

    edit_milestone_template(id, payload) {
        return request.put(`/api/template/${id}`, payload)
    },

    delete_milestone_template(id) {
        return request.delete(`/api/template/${id}`)
    },

    bulk_delete_milestone_template(payload) {
        return request.delete(`/api/template/bulk-delete`, payload)
    },

    delete_invoice_template(id) {
        return request.delete(`api/template/invoices/${id}`)
    },

    delete_report_template(id) {
        return request.delete(`api/template/reports/${id}`)
    },
}
