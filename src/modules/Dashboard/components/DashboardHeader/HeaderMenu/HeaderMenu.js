//Components
import Dropdown from './components/Dropdown.vue'
import AddCards from './components/DashCardsDropdown/DashCardsDropdown.vue'
import MailIcon from './components/MailIcon/MailIcon.vue'
import NotificationIcon from './components/NotificationIcon/NotificationIcon.vue'
import ChatIcon from './components/ChatIcon/ChatIcon.vue'
import LogonLabel from './components/LonOnLabel.vue'
import ConnectApp from './components/ConnectApp/ConnectApp.vue'
import {mapGetters} from "vuex";

export default {
    components: {
        Dropdown,
        AddCards,
        MailIcon,
        NotificationIcon,
        LogonLabel,
        ChatIcon,
        ConnectApp
    },
    computed: {
        ...mapGetters(['user']),
        company_is_subscribed() {
            return !this.user ? false : this.user.company.company_subscribed;
        }
    },
    methods: {
        go_to_pricing_page() {
            if (this.user) {
                this.$router.push({name: 'pricing'})
            } else {
                this.$router.push({name: 'login'})
            }
        }
    }
}