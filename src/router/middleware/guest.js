export default function guest({ next, store }) {
  if (store.getters.user) {
    return next({
      path: '/dashboard'
    })
  }

  return next()
}
