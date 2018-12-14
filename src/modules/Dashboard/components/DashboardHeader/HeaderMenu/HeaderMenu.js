import HeaderIcon from './components/HeaderIcon.vue'
import Dropdown from './components/Dropdown.vue'
import AddCards from './components/AddDataCards.vue'

export default {
  name: 'HeaderMenu',

  components: {
    HeaderIcon,
    Dropdown,
    AddCards
  },

  methods: {
    go_to_pricing_page() {
      this.$router.push({ name: 'pricing' })
    }
  }
}
