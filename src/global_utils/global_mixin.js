import request from '@/services/axios_instance'

export default {
  verifyProject: (to, from, next) => {
    request
      .get(`api/verify/is-belong-to?type=project&id=${to.params.id}`)
      .then(({ data }) => {
        if (data.belong) {
          next()
        } else {
          next({
            path: '/404'
          })
        }
      })
  },
  verifyUser: (to, from, next) => {
    request
      .get(`api/verify/is-belong-to?type=user&id=${to.params.user_id}`)
      .then(({ data }) => {
        if (data.belong) {
          next()
        } else {
          next({
            path: '/404'
          })
        }
      })
  }
}
