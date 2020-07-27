import {list_functionality} from "../../services/list-functionality/list-functionality";
import api from "./api";
//components
import CustomTable from '@/common/CustomTable/CustomTable.vue'
import DeleteDialog from '@/common/DeleteDialog.vue'
import StaffDialog from '@/modules/Teams/components/TeamsDialog/TeamsDialog.vue'
import VueGrid from "@/common/VueGrid/VueGrid.vue"
import TableHeader from "@/common/TableHeader.vue"

export default {
    name: 'MembersTab',
    mixins: [list_functionality],
    components: {
        CustomTable,
        StaffDialog,
        DeleteDialog,
        VueGrid,
        TableHeader

    },
    inheritAttrs: false,
    props: {
        user_id: [Number, String]
    },
    data: () => ({
        add_dialog: false,
        staff_id: '',
    }),

    computed: {
        dynamic_api() {
            return `api/clients/${this.user_id}/staffs`
        }
    },

    created() {
        this.fill_table_via_url(this.dynamic_api)
    },

    methods: {
        can_be_deleted(item) {
            return !(item.is_admin || item.is_client)
        },
        load_more_users() {
            this.load_more_via_url(this.dynamic_api)
        },
        navigate_to_view_profile(id) {
            this.$router.push({name: 'client_profile', params: {user_id: id}})
        },
        handleAddStaff(payload) {
            api.add_new_staff(this.user_id, payload)
                .then(({data}) => {
                    this.items.push(data)
                })
        }
    }
}
