import auth from '@/router/middleware/auth'

export default {
    path: 'projects-campaigns',
    name: 'client-profile-projects-campaigns',
    props: true,
    component: () => import('./ProjectsCampaigns.vue'),
    meta: {
        middleware: [auth]
    }
}
