export default function auth ({ next, store }){
	const authenticated = !!localStorage.getItem('token')

 	if(!store.getters.user || !authenticated){
     	return next({
        	name: 'login'
     	})
 	}

 	return next()
}