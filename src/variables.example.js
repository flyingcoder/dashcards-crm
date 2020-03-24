export const settings = {
  apiHostBaseURL: 'https://api.dashcards.com',
  BaseURL: 'https://bizzooka.com',
  SiteName: 'Dashcards',
  // apiHostBaseURL: 'http://localhost:8000', //for local dev,
  allowedImageType: ['image/jpg', 'image/png', 'image/jpeg', 'image/gif'],
  fileSizeMaxUploadLimit: '10MB',
  pusher: {
    key: '0594afc8c3bfe95e8a06', //pusher-key'
    cluster: 'ap1', //pusher cluster
    forceTLS: true,
    logging: false
  },
  defaultCurrency: { name: 'US Dollar', symbol: '$' }
}
