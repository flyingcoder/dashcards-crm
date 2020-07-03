
export default function super_admin({ next, store }) {
    const authenticated = !!localStorage.getItem('token')

    if (!store.getters.user || !authenticated) {
        return next({
            name: 'login'
        })
    }
    if (!store.getters.user.is_buzzooka_super_admin) {
        return next({
            name: 'dashboard'
        })
    }
    return next()
}