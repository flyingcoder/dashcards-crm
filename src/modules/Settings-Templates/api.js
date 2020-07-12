import request from '@/services/axios_instance'

export const api_to = {
    get_email_templates(){
    	return request.get(`api/template/email-templates`)
    },
    save_changes(payload){
    	return request.post(`api/template/email-templates`, payload)
    }	
}