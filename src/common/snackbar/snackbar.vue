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
      (text, type = 'success', timeout = 2500) => {
        if (!text) return
        this.snackbar = true
        this.text = text
        this.color = this.get_color(type)
        this.timeout = timeout
        this.icon = this.get_icon(type)
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
        this.$event.$emit('open_snackbar', snackbar.message, 'error')
    }
  },

  methods: {
    get_color(type) {
      const colors = {
        error: 'red',
        notification: 'orange',
        success: 'green'
      }
      return colors[type]
    },

    get_icon(type) {
	    return this.$vuetify.icons[type]
    }
  }
}
</script>
