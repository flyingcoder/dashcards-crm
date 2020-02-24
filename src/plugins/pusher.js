import Vue from 'vue'
import Pusher from 'pusher-js'
import { settings } from '@/variables'

let pusher = null

export const broadcast = {
  authenticate() {
    Pusher.logToConsole = settings.pusher.logging;

    pusher = new Pusher(settings.pusher.key, {
      cluster: settings.pusher.cluster,
      forceTLS: settings.pusher.forceTLS,
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
