<template>
  <div class="dialog">
    <v-toolbar dark color="#3b589e" height="60">
      <v-toolbar-title class="dialog-title">{{
        toolbar.title
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="dialog-send">
        <v-btn :disabled="toolbar.submit_disable" dark flat>Submit</v-btn>
        <v-btn icon dark @click="set_dialog(null)">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters('invoice', ['toolbar'])
  },
  methods: {
    ...mapMutations('invoice', ['set_dialog'])
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 599px) {
  .dialog-title {
    font-size: 16px;
  }

  .dialog-send {
    .v-btn {
      font-size: 12px;
    }
  }
}
</style>
