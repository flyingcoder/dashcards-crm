export const settings = {
  apiHostBaseURL: 'https://api.dashcards.com',
  BaseURL: 'https://bizzooka.com',
  SiteName: 'Dashcards',
  // apiHostBaseURL: 'http://localhost:8000', //for local dev,
  allowedImageType: ['image/jpg', 'image/png', 'image/jpeg', 'image/gif'],
  fileSizeMaxUploadLimit: '10MB',
  pusher: {
    key: 'ef1f370c90ad3e704acd', //pusher-key'
    cluster: 'ap1', //pusher cluster
    forceTLS: true,
    logging: false
  },
  defaultCurrency: { name: 'US Dollar', symbol: '$' }
}
