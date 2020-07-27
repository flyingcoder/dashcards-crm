import HeaderHamburger from './HeaderHamburger/HeaderHamburger.vue'
import HeaderSearch from './HeaderSearch/HeaderSearch.vue'
import HeaderMenu from './HeaderMenu/HeaderMenu.vue'
import {mapGetters} from "vuex";

export default {
    name: 'DashboardHeader',
    components: {HeaderHamburger, HeaderSearch, HeaderMenu},
    data: () => ({
        paths: [
            {text: 'Dashboard', disabled: false, router_name: 'default-content'}
        ]
    }),
    computed: {
        ...mapGetters(['user']),
        company_logo() {
            // if (this.user && this.user.company.company_logo) {
            //     return this.user.company.company_logo
            // } else {
            // }
            return require('@/assets/logo/buzzooka-blue.png')
        }
    },
    mounted() {
        this.$event.$on('path-change', (data) => {
            this.paths = data
        })
    },
}