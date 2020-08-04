import { mapMutations, mapActions } from 'vuex'
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
        user: '',
        paths: [
            { text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
            { text: 'Team', disabled: false, route: {name: 'team'}},
            { text: 'Profile', disabled: true, router_name: null }
        ]
    }),

    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.set_user_id(this.user_id)
        this.get_single_member(this.user_id)
    },

    methods: {
        ...mapMutations('memberProfile', ['set_user_id']),
        ...mapActions('memberProfile', ['get_single_member'])
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.verifyUser(to, from, next)
        })
    }
}