import Vue from 'vue'
import Vuetify from 'vuetify'
import VueClipboard from 'vue-clipboard2'
import VueCryptojs from 'vue-cryptojs'
 
import 'vuetify/dist/vuetify.min.css'
import 'srcdoc-polyfill/srcdoc-polyfill.min.js'

Vue.use(VueClipboard)
Vue.use(Vuetify)
Vue.use(VueCryptojs)

export default new Vuetify({
    theme: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    },
    iconfont: 'md', //using material design
    icons: {
        notification: 'notification_important',
        success: 'check',
        error: 'error'
    }
})