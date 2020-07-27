import request from "@/services/axios_instance";

export default {
    add_new_staff(client_id, payload) {
        return request.post(`api/clients/${client_id}/staffs`, payload)
    },
    update_staff(client_id, staff_id ,payload) {
        return request.put(`api/clients/${client_id}/staffs/${staff_id}`, payload)
    },
    delete_staff(client_id, staff_id) {
        return request.put(`api/clients/${client_id}/staffs/${staff_id}`)
    },
}