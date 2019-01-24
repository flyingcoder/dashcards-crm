import request from '@/services/axios_instance'

export const timers_api = {
  get_all_timers() {
    return request.get('api/timer?all=true')
  },

  get_timers() {
    return request.get('api/timer')
  }
}
