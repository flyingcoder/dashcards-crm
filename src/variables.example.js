const developmentApp = {
    localhost: {
        BaseURL: 'https://crm.buzzookalocal.net:8080',
        apiHostBaseURL: 'https://api.buzzookalocal.net', //for local dev,
        pusher: {
            key: 'ef1f370c90ad3e704acd',
            cluster: 'ap1', //pusher cluster
            forceTLS: true,
            logging: false
        },
        stripe_redirect: 'https://crm.buzzookalocal.net:8080/dashboard/connect',
    },
    staging: {
        BaseURL: 'https://crm.bizzooka.com',
        apiHostBaseURL: 'https://api.bizzooka.com',
        pusher: {
            key: '67f7c7c9ef03e67434e7',
            cluster: 'ap1', //pusher cluster
            forceTLS: true,
            logging: false
        },
        stripe_redirect: 'https://crm.bizzooka.com/dashboard/connect',
    },
    live: {
        BaseURL: 'https://crm.dashcards.com',
        apiHostBaseURL: 'https://api.dashcards.com',
        pusher: {
            key: '9faf3281e9c67cce3e70',
            cluster: 'ap1', //pusher cluster
            forceTLS: true,
            logging: false
        },
        stripe_redirect: 'https://crm.dashcards.com/dashboard/connect',
    }
}
var dev = developmentApp.localhost
if (window.location.host.includes('bizzooka')) {
    dev = developmentApp.staging
} else if (window.location.host.includes('dashcards')) {
    dev = developmentApp.live
}

const variables = {
    SiteName: 'Dashcards',
    allowedImageType: ["image/jpg", "image/png", "image/jpeg", "image/gif"],
    fileSizeMaxUploadLimit: '5MB',
    defaultCurrency: {
        name: 'US Dollar',
        symbol: '$'
    },
    googleApi: {
        developerKey: 'AIzaSyChEl_W4HJHupuW4UinOCAFh5llhfFlLAk',
        clientId: '409212750360-f6o63kfb43pssv39sblluiv46kg3rfgk.apps.googleusercontent.com',
        clientSecret: 'isg_rsTjWB8Z-KdrOsPC7v59',
        scope: [
            'email',
            'https://www.googleapis.com/auth/drive',
            'https://www.googleapis.com/auth/drive.file'
        ],
        redirectUris: [
            'https://crm.buzzookalocal.net:8080/dashboard/connect',
            'https://crm.bizzooka.com/dashboard/connect',
            'https://crm.dashcards.com/dashboard/connect',
        ]
    },
    stripe: {
        pub_key: 'pk_test_belq6nyu6bc7c4jE9LFkYhYA00NmGeVEuD',
        secret_key: 'sk_test_pwcd0h85Xnf4PkRyJ2gcKqXA007Ta4jrP0',
        client_id: 'ca_HKv0JmMqwvSzh15ZaMvAQXoZOHbSgVjM',
        redirect_uri: dev.stripe_redirect
    }
}

export const settings = Object.assign({}, variables, dev)