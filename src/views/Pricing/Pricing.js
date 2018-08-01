import DashboardLogo from '@/components/DashboardLogo/DashboardLogo.vue'
import DashboardHeader from '@/components/DashboardHeader/DashboardHeader.vue'

export default {
  components: {DashboardLogo, DashboardHeader},
  data () {
    // TODO review by roland making it functional component
    return {
      prices: [
        { type: 'Pro', price: '$14.99', discount: '($290/year - You save $8)', description: 'A limited number of reports to monitor up to 3 locations', button: 'SELECT PLAN' },
        { type: 'Business', price: '$24.99', discount: '($290/year - You save $8)', description: 'A limited number of reports to monitor up to 3 locations', button: 'SELECT PLAN' },
        { type: 'Guro', price: '$49.99', discount: '($290/year - You save $8)', description: 'A limited number of reports to monitor up to 3 locations', button: 'SELECT PLAN' },
        { type: 'Enterprise', price: 'Need More?', discount: '', description: 'A limited number of reports to monitor up to 3 locations', button: 'SELECT PLAN' },
      ],
    }
  },
}