<template>
    <v-snackbar
        v-model="snackbar"
        :color="color"
        :timeout="timeout"
    >
        <v-icon color="white" medium>{{icon}}</v-icon>
        {{ text }}
        <v-icon color="white" @click="snackbar = false" medium>{{$vuetify.icons.clear}}</v-icon>
    </v-snackbar>
</template>
<script>
  export default {
    data() {
      return {
        snackbar: false,
        text: null,
        color: null,
        timeout: null,
        icon: null
      }
    },

    created() {
      this.$event.$on('open_snackbar', (text = 'Default Text', color = '', icon = 'notification', timeout = 6000, mode = '') => {
        this.snackbar = true
        this.text = text
        this.color = color || ''
        this.mode = mode
        this.timeout = timeout
        this.icon = this.$vuetify.icons[icon]
      })
    }

  }
</script>
