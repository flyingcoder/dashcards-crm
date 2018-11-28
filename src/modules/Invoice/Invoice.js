import TableHeader from '@/common/TableHeader.vue'

export default {
	name: 'Invoice',

	components: {
		TableHeader
	},

	data: () => ({
		paths: [
			{ text: 'Dashboard', disabled: false, router_name: 'default-content' },
			{ text: 'Invoice', disabled: true, router_name: null }
		],
	}),

	methods: {},

}