import {mapActions} from 'vuex'
import {global_utils} from '@/global_utils/global_utils'
// Components
import SingleNotification from './SingleNotification.vue'

export default {
    mixins: [global_utils],
    components: {SingleNotification},
    props: {
        visible: {type: Number, default: 0}
    },

    data: () => ({
        notificationsFetched: false,
        boilerplate: false,
        tile: false,
        type: 'list-item-avatar-three-line',
        types: [],
        btnloading: false,
        noMoreData: false,
        current_page: 1,
        total_page: 0,
    }),
    computed: {
        notifications() {
            return this.$store.getters['chatNotifications/notification']
        },
        total_counts() {
            return this.$store.getters['chatNotifications/notification_counts']
        },
        hasMoreNotification() {
            return this.$store.getters['chatNotifications/has_more_notification']
        }
    },
    methods: {
        ...mapActions('chatNotifications', ['fetch_more_notification']),
        fetchMoreNotifications() {
            this.notificationsFetched = true
            this.fetch_more_notification()
                .then(() => {
                    this.notificationsFetched = false
                })
        },
        notificationClicked(notification, index) {
            this.$store.dispatch('chatNotifications/mark_as_read_notification', notification.id)
                .then(() => {
                    if (notification.data.url)
                        this.$router.push({path: notification.data.url})
                })
        },
        mark_all_as_read_notification() {
            this.notificationsFetched = true
            this.$store.dispatch('chatNotifications/mark_all_as_read', 'company')
                .then(() => {
                    this.notificationsFetched = false
                })
        }
    }
}