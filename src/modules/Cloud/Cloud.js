import TableHeader from '@/common/TableHeader.vue'

export default {
  name: 'Cloud',
  components: {
    TableHeader
  },

  data: () => ({
    paths: [
      {
        text: 'Dashboard',
        disabled: false,
        router_name: 'default-content'
      },
      {
        text: 'Cloud',
        disabled: true,
        router_name: null
      }
    ],
    isGoogleSignIn: false,
    googleUser: null
  }),

  computed: {
    googleBtnLabel() {
      return this.isGoogleSignIn
        ? 'Disconnect from Google Drive'
        : 'Connect to Google Drive'
    }
  },

  mounted() {
    this.handleClientLoad()
  },

  methods: {
    handleClientLoad() {
      this.$gapi._load().then(gapi => {
        this.$gapi.isSignedIn().then(result => {
          this.isGoogleSignIn = result
          if (result) {
            this.$gapi.currentUser().then(user => {
              this.googleUser = user
            })
          }
        })
      })
    },
    handleGooglebtn() {
      if (!this.isGoogleSignIn) {
        this.handleSignInGoogle()
      } else {
        this.handleSignOutGoogle()
      }
    },
    handleSignInGoogle() {
      if (!this.isGoogleSignIn) {
        this.$gapi
          .signIn()
          .then(user => {
            this.googleUser = user
            this.isGoogleSignIn = true
            this.$event.$emit(
              'open_snackbar',
              'Successfully connected! ',
              'success'
            )
          })
          .catch(err => {
            this.$event.$emit('open_snackbar', 'Error! ' + err.error, 'error')
          })
      }
    },
    handleSignOutGoogle() {
      if (this.isGoogleSignIn) {
        this.$gapi
          .signOut()
          .then(() => {
            this.isGoogleSignIn = false
            this.googleUser = null
            this.$event.$emit(
              'open_snackbar',
              'Successfully disconnected! ',
              'success'
            )
          })
          .catch(err => {
            this.$event.$emit('open_snackbar', 'Error! ' + err.error, 'error')
          })
      }
    }
  }
}
