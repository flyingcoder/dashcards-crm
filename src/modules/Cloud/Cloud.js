import request from '@/services/axios_instance'
import { settings } from '@/variables'
//components
import TableHeader from '@/common/TableHeader.vue'

export default {
    name: 'Cloud',
    components: {
        TableHeader
    },

    data: () => ({
        paths: [{
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
        googleUser: null,
        stripeUser: null,
        showGoogleDesc: false,
        showStripeDesc: false
    }),

    computed: {
        googleBtnLabel() {
            return this.isGoogleSignIn ?
                'Disconnect Google Drive' :
                'Connect to Google Drive'
        },
        stripeConnect() {
          return `https://connect.stripe.com/oauth/authorize?response_type=code&client_id=${settings.stripe.client_id}&scope=read_write&redirect_uri=${settings.stripe.redirect_uri}`
        }
    },

    mounted() {
        this.handleClientLoad()
        if (this.$route.query.code) {
          this.handleStripeConnectCode(this.$route.query.code)
        } else {
          this.getStripeConnectedAccount()
        }
    },

    methods: {
        handleStripeConnectCode(code){
          request.post(`api/stripe/connect`, { code : code })
          .then(({data}) => {
            this.stripeUser = data
            this.$event.$emit('open_snackbar', 'Successfully connect Stripe account')
          })
          .finally(() => {
            this.$router.replace({ query: {} });
          })
        },
        handleStripeDisconnectAccount(){
          request.post(`api/stripe/disconnect`)
          .then(({data}) => {
            this.stripeUser = null
            this.$event.$emit('open_snackbar', data.message)
          })
        },
        getStripeConnectedAccount(){
          request.get(`api/stripe/account`)
          .then(({data}) => {
            this.stripeUser = data
          })
        },
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