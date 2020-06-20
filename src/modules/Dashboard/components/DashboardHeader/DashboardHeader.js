import HeaderHamburger from './HeaderHamburger/HeaderHamburger.vue'
import HeaderSearch from './HeaderSearch/HeaderSearch.vue'
import HeaderMenu from './HeaderMenu/HeaderMenu.vue'

export default {
    name: 'DashboardHeader',
    components: { HeaderHamburger, HeaderSearch, HeaderMenu },
    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' }
        ]
    }),
    mounted() {
        this.$event.$on('path-change', (data) => { this.paths = data })
    },
}