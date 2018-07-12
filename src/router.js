import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Login from './views/Login/Login.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },

        {
            path: '/',
            name: 'home',
            component: Home
        }
    ],
    mode: 'history'
})
