import {check_user} from "../route_guard";

export const login = {
	path: '/login',
	name: 'login',
	component: () => import('@/modules/Login/Login.vue'),
	beforeEnter(to, from, next) {
		if (check_user.is_user_logged()) {
			next({name: 'not_found'})
		} else {
			next()
		}
	}
}