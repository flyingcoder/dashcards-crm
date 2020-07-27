import request from '@/services/axios_instance'

export const files_api = {
    get_files(api) {
        return request.get(api)
    }
}
