export default {
    name: 'ConnectApp',

    data: () => ({
        showApps: false,
        activeApp: false,
        apps: [
            {
                id: 1,
                logo: require('@/assets/logo/mini-blue.png'),
                name: "Google Drive"
            },
            {
                id: 2,
                logo: require('@/assets/logo/mini-blue.png'),
                name: "Stripe"
            },
            {
                id: 3,
                logo: require('@/assets/logo/mini-blue.png'),
                name: "Dropbox"
            },
            {
                id: 4,
                logo: require('@/assets/logo/mini-blue.png'),
                name: "Seo Profiler"
            },
            {
                id: 5,
                logo: require('@/assets/logo/mini-blue.png'),
                name: "Apps"
            },
            {
                id: 6,
                logo: require('@/assets/logo/mini-blue.png'),
                name: "Apps"
            },
        ]
    }),
}