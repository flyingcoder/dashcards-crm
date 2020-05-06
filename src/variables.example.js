const developmentApp = {
  localhost: {
    BaseURL: 'http://localhost:8080',
    apiHostBaseURL: 'http://localhost:8000' //for local dev,
  },
  staging: {
    BaseURL: 'https://crm.bizzooka.com',
    apiHostBaseURL: 'https://api.bizzooka.com'
  },
  live: {
    BaseURL: 'https://crm.dashcards.com',
    apiHostBaseURL: 'https://api.dashcards.com'
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
  allowedImageType: ['image/jpg', 'image/png', 'image/jpeg', 'image/gif'],
  fileSizeMaxUploadLimit: '10MB',
  pusher: {
    key: 'ef1f370c90ad3e704acd',
    cluster: 'ap1', //pusher cluster
    forceTLS: true,
    logging: false
  },
  defaultCurrency: {
    name: 'US Dollar',
    symbol: '$'
  },
  googleApi: {
    developerKey: 'AIzaSyChEl_W4HJHupuW4UinOCAFh5llhfFlLAk',
    clientId:
      '409212750360-f6o63kfb43pssv39sblluiv46kg3rfgk.apps.googleusercontent.com',
    clientSecret: 'isg_rsTjWB8Z-KdrOsPC7v59',
    scope: [
      'email',
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file'
    ],
    redirectUris: [
      'http://localhost:8080/dashboard/cloud',
      'https://crm.bizooka.com/dashboard/cloud',
      'https://crm.dashcards.com/dashboard/cloud'
    ]
  }
}

export const settings = Object.assign({}, variables, dev)
