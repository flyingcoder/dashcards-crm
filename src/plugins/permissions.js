import Vue from 'vue'
import store from '@/store/store'

const permissions = {
  get_all() {
    return store.getters.user.can
  },
  get(permission) {
    if (this.get_all().hasOwnProperty(permission))
      return store.getters.user.can[permission]
    return null
  }
}

Plugin.install = Vue => {
  Vue.prototype.$_permissions = permissions
}

Vue.use(Plugin)

export default Plugin
