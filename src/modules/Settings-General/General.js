export default {
    name: 'General',

    data: () => ({
        dashboard: [],
        paths: [
            { text: 'Settings', disabled: true, router_name: null },
            { text: 'General', disabled: true, router_name: null }
        ],
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
    },
}