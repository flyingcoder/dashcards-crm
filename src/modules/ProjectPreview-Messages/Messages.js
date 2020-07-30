import { table_functionality } from '@/services/table-functionality/table-functionality'
import { is_screen_utils } from '@/global_utils/is_screen_utils'
//Components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import UsersList from './components/UsersList.vue'

export default {
    name: 'MessagesTab',
    mixins: [table_functionality, is_screen_utils],
    components: {
        CustomTable,
        UsersList
    },

    props: {
        id: [Number, String]
    },

    data() {
        const _this = this;
        return {
            active_tab: null,
            tabs: _this.getTabs(),
            texts: [
                { title: 'Client Messages', content: 'Client messages ...' },
                { title: 'Team Messages', content: 'Team messages ...' }
            ],
            sortList: [
                { title: 'Sort by Client' },
                { title: 'Sort by Task' },
                { title: 'Sort by Services' },
                { title: 'Sort by Time' },
                { title: 'Sort by Date' }
            ],
            headers: [
                { text: 'Client', value: 'client', sortable: true, align: 'left' },
                { text: 'Subject', value: 'subject', sortable: true, align: 'left' },
                { text: 'Date', value: 'date', sortable: true, align: 'left' },
                { is_action: true }
            ],
            friends: [],
        }
    },

    methods: {
        getTabs() {
            let type = this.$route.params.type || 'project';
            return [{
                    name: 'Client Messages',
                    route: `/dashboard/${type}/preview/${this.id}/messages`
                },
                {
                    name: 'Team Messages',
                    route: `/dashboard/${type}/preview/${this.id}/messages/team-messages`
                }
            ]
        }
    }
}