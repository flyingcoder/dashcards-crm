import auth from '../middleware/auth'

export const member_profile = {
    path: 'team/profile/:user_id',
    name: 'team/profile',
    props: true,
    component: () => import('@/modules/MemberProfile/MemberProfile.vue'),
    meta: {
        middleware: [auth]
    }
}
