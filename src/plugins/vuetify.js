import Vue from 'vue'
import Vuetify from 'vuetify'
// import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
// import 'tiptap-vuetify/dist/main.css'
import 'vuetify/dist/vuetify.min.css'

// const vuetify = new Vuetify()

Vue.use(Vuetify)

// Vue.use(TiptapVuetifyPlugin, { vuetify, iconsGroup: 'md' })

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