
export default function super_admin({ next, store }) {
    const authenticated = !!localStorage.getItem('token')

    if (!store.getters.user || !authenticated) {
        return next({
            name: 'login'
        })
    }
    if (!store.getters.user.is_buzzooka_super_admin) {
        // store.
        return next({
            name: 'not_found'
        })
    }
    return next()
}