export default {
    name: 'ConnectApp',

    data: () => ({
        showApps: false,
        activeApp: false,
        apps: [
            {
                id: 1,
                logo: require('@/assets/appIcons/google-drive-icon.svg'),
                name: "Google Drive"
            },
            {
                id: 2,
                logo: require('@/assets/appIcons/stripe-icon.svg'),
                name: "Stripe"
            },
            {
                id: 3,
                logo: require('@/assets/appIcons/dropbox-icon.svg'),
                name: "Dropbox"
            },
            {
                id: 4,
                logo: require('@/assets/appIcons/google-meet-icon.svg'),
                name: "Google Meet"
            },
            {
                id: 5,
                logo: require('@/assets/appIcons/zoom-logo-icon.svg'),
                name: "Zoom"
            },
            {
                id: 6,
                logo: require('@/assets/appIcons/seoprofiler-icon.png'),
                name: "SEOprofiler"
            },
            {
                id: 7,
                logo: require('@/assets/appIcons/skype-icon.svg'),
                name: "Skype"
            },
        ]
    }),
}