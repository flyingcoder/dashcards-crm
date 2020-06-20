//Components
import Dropdown from './components/Dropdown.vue'
import AddCards from './components/DashCardsDropdown/DashCardsDropdown.vue'
import MailIcon from './components/MailIcon/MailIcon.vue'
import NotificationIcon from './components/NotificationIcon/NotificationIcon.vue'
import ChatIcon from './components/ChatIcon/ChatIcon.vue'
import LogonLabel from './components/LonOnLabel.vue'
import ConnectApp from './components/ConnectApp/ConnectApp.vue'

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
    
    methods: {
        go_to_pricing_page() {
            this.$router.push({ name: 'pricing' })
        }
    }
}