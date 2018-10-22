// "use strict";
//
// import Vue from 'vue';
// import axios from "axios";
// import store from '../store/store'
//
// // Full config:  https://github.com/axios/axios#request-config
// // axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//
// let config = {
//   baseURL: 'http://api.bizzooka.ca', //process.env.baseURL || process.env.apiUrl || ""
//   timeout: 5000, // Timeout
//   // withCredentials: true, // Check cross-site Access-Control
// };
//
// const _axios = axios.create(config);
//
// //request interceptor
// _axios.interceptors.request.use(config => {
//   const token = store.state.token
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// }, error => {
//   return Promise.reject(error)
// });
//
// // response interceptor
// _axios.interceptors.response.use(response => {
//   return response
// }, error => {
//   //Here we can manage the error response
// })
//
//
// Plugin.install = function(Vue, options) {
//   Vue.axios = _axios;
//   window.axios = _axios;
//   Object.defineProperties(Vue.prototype, {
//     $http: {
//       get: () => _axios
//     }
//   });
// };
//
// Vue.use(Plugin)
//
// export default Plugin;
