import { settings } from '@/variables'
export default {
  data: () => ({
    homepage: settings.BaseURL + '/login'
  }),
  created() {
    this.$event.$emit(
      'open_snackbar',
      'The page you are looking it does not exists',
      'error'
    )
  },
  methods: {
    gotohome() {
      if (this.$store.getters.user) {
        this.$router.push(`/dashboard`)
      } else {
        this.$router.push(`/login`)
      }
    }
  }
}
