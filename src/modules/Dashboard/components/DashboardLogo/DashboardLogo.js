import {mapGetters} from 'vuex'

export default {
    props: {
        miniSidebar: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        ...mapGetters('configs', ['long_logo', 'square_logo']),
    },
    methods: {
        rotateIcon() {
            this.$emit('update:miniSidebar', !this.miniSidebar)
        }
    }
}