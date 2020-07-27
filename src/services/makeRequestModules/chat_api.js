import request from '@/services/axios_instance'

export const chat_api = {
    get_unread_messages() {
        return request.get('api/chat/unread')
    },

    get_conversation(id ) {
        return request.get(`api/chat/private/${id}`)
    },

    send_message(payload) {
        return request.post('api/chat/private', payload, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },

    get_old_messages(api) {
        return request.get(api)
    },

    mark_all_as_read() {
        return request.get('api/chat/mark-read')
    }
}
