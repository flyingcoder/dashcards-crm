<template>
  <v-app class="buzzooka" id="buzzooka">
    <custom-loader />
    <snackbar></snackbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
import makeRequestTo from '@/services/makeRequestTo'
import snackbar from './common/snackbar/snackbar.vue'
import CustomLoader from './common/CustomLoader.vue'

export default {
  name: 'App',
  components: { snackbar, CustomLoader },
  data: () => ({
    user_moved_mouse: 0
  }),

  created() {
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification')
    } else if (Notification.permission !== 'denied') {
      this.request_notification_permission()
    }
    this.fetch_online_users()
  },

  watch: {
    user_moved_mouse(val) {
      if (val >= 1800000) {
        //if user is idle for 30 mins
        let notification = new Notification('You were idle for 30 mins')
        setTimeout(() => {
          notification.close()
        }, 4500)
      }
    }
  },

  mounted() {
    document.addEventListener('mousemove', this.reset_timer)
    setInterval(() => {
      this.user_moved_mouse += 1000
    }, 10000)
  },

  methods: {
    reset_timer() {
      this.user_moved_mouse = 0
    },
    request_notification_permission() {
      Notification.requestPermission().then(function(permission) {
        if (permission === 'denied') {
          this.request_notification_permission()
        }
      })
    },
    fetch_online_users() {
      makeRequestTo
        .get_online_users()
        .then(({ data }) => this.$store.commit('set_online_users', data))
    }
  }
}
</script>
