import Vue from 'vue'
import Pusher from 'pusher-js'

let pusher = null

export const broadcast = {
  authenticate() {
    pusher = new Pusher('0594afc8c3bfe95e8a06', {
      cluster: 'ap1',
      encrypted: true,
      authEndpoint: 'https://api.dashcards.com/api/broadcasting/auth',
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
