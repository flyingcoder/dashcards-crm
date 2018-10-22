import {check_user} from "../route_guard";

export const signup = {
	path: '/signup',
		name: 'signup',
		component: () => import('@/modules/Signup/Signup.vue'),
		beforeEnter(to, from, next) {
		if (check_user.is_user_logged()) {
			next({name: 'not_found'})
		}else {
			next()
		}
	}
}