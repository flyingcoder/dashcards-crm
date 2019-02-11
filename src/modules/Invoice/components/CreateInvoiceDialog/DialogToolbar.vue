<template>
  <div class="dialog">
    <v-toolbar dark color="#3b589e" height="60">
      <v-toolbar-title class="dialog-title">Create new Invoice</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="dialog-send">
        <v-btn :disabled="disabled" dark flat @click="handle_click"
          >Submit</v-btn
        >
        <v-btn icon dark @click="$emit('close')">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    disabled: Boolean
  },

  computed: {
    ...mapGetters('invoice', ['create_dialog', 'edit_dialog'])
  },

  methods: {
    handle_click() {
      if (this.create_dialog) this.$emit('create')
      else this.$emit('edit')
    }
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
