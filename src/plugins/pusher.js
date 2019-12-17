import Vue from 'vue'
import Pusher from 'pusher-js'
import { settings } from '@/variables'

let pusher = null

export const broadcast = {
  authenticate() {
    pusher = new Pusher('6857db1d25c87cb2e20d', {
      cluster: 'ap1',
      encrypted: true,
      authEndpoint: settings.apiHostBaseURL + '/api/broadcasting/auth',
      auth: {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
    })
  },
  subscribe(channel_name) {
    return pusher.subscribe(channel_name)
  },
  unsubscribe(channel) {
    pusher.unsubscribe(channel)
  }
}

const pusher_auth = {
  install: Vue => {
    Vue.prototype.$pusher = broadcast
  }
}

Vue.use(pusher_auth)

export default pusher_auth
