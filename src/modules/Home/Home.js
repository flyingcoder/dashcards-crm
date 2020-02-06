import store from '@/store/store'
import router from '@/router/router'

export default {
	data () {
		return {
			dialog: false,
			loading: true
		}
	},
	created () {
		if(store.getters.is_user_logged){
			router.push({ name: 'default-content' })
		}
	}
}