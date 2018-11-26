import request from '@/services/axios_instance'

export const autocomplete_api = {
	fill_dropdown(action, keyword) {
		return request.get(`api/autocomplete/${action}?q=${keyword}`)
	}
}