import {mapActions, mapMutations} from 'vuex'
//Components
import TableHeader from '@/common/TableHeader.vue'
import Upper from './components/Upper/Upper.vue'
import Lower from './components/Lower/Lower.vue'

export default {
    props: {
        user_id: [Number, String] //from route
    },

    components: {
        TableHeader,
        Upper,
        Lower
    },

    data: () => ({
        paths: [
            {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            {text: 'Client', disabled: false, route: {name: 'clients'}},
            {text: 'Profile', disabled: true, route: null}
        ]
    }),

    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.set_user_id(this.user_id)
        this.get_single_client(this.user_id)
    },

    methods: {
        ...mapMutations('memberProfile', ['set_user_id']),
        ...mapActions('memberProfile', ['get_single_client']),
        client_updated(item) {
            this.get_single_client(this.user_id)
        }
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.verifyUser(to, from, next)
        })
    }
}