import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'

export default {
    name: 'ServicePreview',
    mixins: [is_screen_medium_and_down],

    props: {
        id: [Number, String] //from route prop
    },

    data() {
        return {
            active_tab: null,
            tabs: [{
                    id: 1,
                    name: 'HQ',
                    route: `/dashboard/service-preview/${this.id}`
                },
                {
                    id: 2,
                    name: 'Files',
                    route: `/dashboard/service-preview/${this.id}/files`
                },
                {
                    id: 3,
                    name: 'Members',
                    route: `/dashboard/service-preview/${this.id}/members`
                },
                {
                    id: 4,
                    name: 'Messages',
                    route: `/dashboard/service-preview/${this.id}/messages`
                },
                {
                    id: 5,
                    name: 'Milestones',
                    route: `/dashboard/service-preview/${this.id}/milestones`
                },
                {
                    id: 6,
                    name: 'Tasks',
                    route: `/dashboard/service-preview/${this.id}/tasks`
                },
                {
                    id: 7,
                    name: 'Reports',
                    route: `/dashboard/service-preview/${this.id}/reports`
                },
                {
                    id: 8,
                    name: 'Timer',
                    route: `/dashboard/service-preview/${this.id}/timer`
                },
                {
                    id: 9,
                    name: 'Invoice',
                    route: `/dashboard/service-preview/${this.id}/invoice`
                }
            ]
        }
    },
    // beforeRouteEnter(to, from, next) {
    //     next(vm => {
    //         vm.verifyService(to, from, next, 'service')
    //     })
    // }
}