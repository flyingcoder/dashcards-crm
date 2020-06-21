import TableHeader from '@/common/TableHeader.vue'

export default {
    name: 'Support',
    components: { TableHeader },

    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Support', disabled: true, router_name: null }
        ]
    }),
    
    mounted() {
        this.$event.$emit('path-change', this.paths)
    }
}