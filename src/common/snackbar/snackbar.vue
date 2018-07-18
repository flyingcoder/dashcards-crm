<template>
    <v-snackbar
        v-model="snackbar"
        :color="color"
        :timeout="timeout"
    >
        {{ text }}
        <v-btn
            dark
            flat
            @click="snackbar = false"
        >
            Close
        </v-btn>
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
      }
    },

    created() {
      this.$event.$on('open_snackbar', (text = 'Default Text', color = '', timeout = 6000, mode = '') => {
        this.snackbar = true
        this.text = text
        this.color = color || ''
        this.mode = mode
        this.timeout = timeout
      })
    }

  }
</script>
