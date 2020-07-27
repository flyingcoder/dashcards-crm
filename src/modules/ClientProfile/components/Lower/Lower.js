import {is_screen_utils} from "@/global_utils/is_screen_utils";

export default {
    name: 'ProfileLower',
    mixins: [is_screen_utils],

    props: {
        user_id: [Number, String] //from route prop
    },

    data() {
        return {
            active_tab: '',
            tabs: [
                {
                    id: 1,
                    name: 'Task',
                    icon: 'mdi-clipboard-list-outline',
                    route: `/dashboard/clients/profile/${this.user_id}`
                },
                {
                    id: 2,
                    name: 'Invoice',
                    icon: 'mdi-cash-register',
                    route: `/dashboard/clients/profile/${this.user_id}/invoice`
                },
                {
                    id: 3,
                    name: 'Staffs',
                    icon: 'mdi-account-group-outline',
                    route: `/dashboard/clients/profile/${this.user_id}/staffs`
                },
                {
                    id: 4,
                    name: 'Company',
                    icon: 'mdi-city-variant-outline',
                    route: `/dashboard/clients/profile/${this.user_id}/company`
                }
            ]
        }
    }
}
