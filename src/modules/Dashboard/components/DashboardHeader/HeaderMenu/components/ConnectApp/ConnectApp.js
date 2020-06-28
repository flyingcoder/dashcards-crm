export default {
    name: 'ConnectApp',

    data: () => ({
        showApps: false,
        activeApp: false,
        apps: [
            {
                id: 'google-drive',
                logo: require('@/assets/appIcons/google-drive-icon.svg'),
                name: "Google Drive"
            },
            {
                id: 'stripe',
                logo: require('@/assets/appIcons/stripe-icon.svg'),
                name: "Stripe"
            },
            {
                id: 'paypal',
                logo: require('@/assets/appIcons/paypal-favicon.png'),
                name: "Paypal"
            },
            {
                id: 'dropdown',
                logo: require('@/assets/appIcons/dropbox-icon.svg'),
                name: "Dropbox"
            },
            {
                id: 'google-meet',
                logo: require('@/assets/appIcons/google-meet-icon.svg'),
                name: "Google Meet"
            },
            {
                id: 'zoom',
                logo: require('@/assets/appIcons/zoom-logo-icon.svg'),
                name: "Zoom"
            },
            {
                id: 'seo-profiler',
                logo: require('@/assets/appIcons/seoprofiler-icon.png'),
                name: "SEOprofiler"
            },
            {
                id: 'skype',
                logo: require('@/assets/appIcons/skype-icon.svg'),
                name: "Skype"
            },
            {
                id: 'semrush',
                logo: require('@/assets/appIcons/semrush-favicon.png'),
                name: "SEMrush"
            },
            {
                id: 'brightlocal',
                logo: require('@/assets/appIcons/brightlocal-favicon.png'),
                name: "BrightLocal"
            },
            {
                id: 'google-calendar',
                logo: require('@/assets/appIcons/google-calendar-icon.png'),
                name: "Google Calendar"
            },
            {
                id: 'lastpass',
                logo: require('@/assets/appIcons/lastpass-favicon.png'),
                name: "LastPass"
            },
        ]
    }),
    methods: {
        connect(id) {
            this.$router.push({ name : 'connect' , query : { id : id }})
        }
    }
}