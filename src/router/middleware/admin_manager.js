export default function admin_manager({ next, store }) {
    const authenticated = !!localStorage.getItem('token')

    if (!store.getters.user || !authenticated) {
        return next({
            name: 'login'
        })
    }

    if (store.getters.user.is_admin || store.getters.user.is_manager) {
        return next()
    }

    return next({ name: 'default-content'})
}