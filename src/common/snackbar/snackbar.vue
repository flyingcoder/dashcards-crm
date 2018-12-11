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
    this.$event.$on(
      'open_snackbar',
      (text, color = '', icon = 'notification', timeout = 6000, mode = '') => {
        if (!text) return
        this.snackbar = true
        this.text = text
        this.color = color || ''
        this.mode = mode
        this.timeout = timeout
        this.icon = this.$vuetify.icons[icon]
      }
    )
  },

  computed: {
    snackbar_store() {
      return this.$store.getters.snackbar
    }
  },

  watch: {
    snackbar_store(snackbar) {
      snackbar.status &&
        this.$event.$emit('open_snackbar', snackbar.message, 'red')
    }
  }
}
</script>
