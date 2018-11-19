import CustomTable from '@/common/CustomTable/CustomTable.vue'
import { table_functionality } from "@/services/table-functionality";

export default {
	name: 'Members',
	mixins: [table_functionality],
	components: {
		CustomTable
	},

	data: () =>({
		headers: [
			{text: 'Member', value: 'member'},
			{text: 'Position', value: 'position'},
			{text: 'Location', value: 'location'},
			{text: 'Total Hours', value: 'total_hours'},
			{id: 4, is_action: true},
		],
		sortList: [
			{ title: 'Sort by member', },
			{ title: 'Sort by position', },
			{ title: 'Sort by location', },
			{ title: 'Sort by total hours', },
			{ title: 'Sort by total amount', }
		],
	}),

	created() {
		this.$router.replace({ name: 'project_preview', query: { tab: 'Members' }})
	},
}