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
  },
  //permission_privelege could be like 'calendars.view', use to get single permission value
  can(permission_privelege) {

  	let xploded = permission_privelege.split('.')
  	if (xploded.length < 1) {
  		return false
  	}
  	
  	if (store.getters.user.is_admin) {
  		return true;
  	}

  	if (this.get_all().hasOwnProperty(xploded[0])){
      	return store.getters.user.can[xploded[0]][xploded[1]]
  	}
  	return false
  },
  //permission_privelege could be like 'calendars.view|calendars.update' pipe separated, used to get multiple permissions value
  cans(permission_priveleges) {
  	let xploded = permission_priveleges.split('|')
  	var perQuery = {}
  	for (var i = 0; i < xploded.length; i++) {
  		perQuery.push(xploded[i],this.can(xploded[i]))
  	}
  	return perQuery
  }
}

Plugin.install = Vue => {
  Vue.prototype.$_permissions = permissions
}

Vue.use(Plugin)

export default Plugin
