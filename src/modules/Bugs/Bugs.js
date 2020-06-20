import TableHeader from '@/common/TableHeader.vue'
import Left from './components/Left.vue'
import Right from './components/Right.vue'

export default {
    name: 'Bugs',
    components: {
        TableHeader,
        Left,
        Right
    },
    
    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Bugs', disabled: true, router_name: null }
        ]
    }),

    mounted() {
        this.$event.$emit('path-change', this.paths)
    }
}