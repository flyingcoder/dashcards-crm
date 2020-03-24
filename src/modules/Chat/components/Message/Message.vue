<template>
  <div class="message" :class="me_sender">
    <v-layout wrap class="sender">
      <v-flex xs3 class="sender__img">
        <v-img :src="message.sender.image_url" />
        <span class="status" :class="is_user_online"></span>
      </v-flex>
      <v-flex xs5 class="sender__name">
        <h5 v-if="!mine">{{ message.sender.fullname }}</h5>
        <h5 v-else>Me</h5>
      </v-flex>
      <v-flex xs4 class="date"> {{ message.created_at | from_now }}</v-flex>
    </v-layout>
    <div class="sender__message">
      {{ message.body }}
    </div>
  </div>
</template>
<style lang="scss" scoped src="./Message.scss"></style>

<script type="text/javascript">
import { global_utils } from '@/global_utils/global_utils'

export default {
  mixins: [global_utils],
  props: {
    id: Number,
    message: Object
  },
  computed: {
    mine() {
      return this.message.sender.id === this.$store.getters.user.id
    },
    me_sender() {
      return this.mine ? 'me' : ''
    },
    is_user_online() {
      return this.message.sender.is_online ? 'online' : 'offline'
    }
  }
}
</script>
