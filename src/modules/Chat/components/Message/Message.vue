<template>
  <div class="msg" :class="me_sender">

    <Avatar iconOnly :user="message.sender" v-if="!mine"></Avatar>
    
    <div class="msg-bubble">
      <div class="msg-info" v-if="mine">
        <div class="msg-info-time caption">{{ message.created_at | from_now }}</div>
        <div class="msg-info-name subtitle-2">Me</div>
      </div>
      <div class="msg-info" v-else>
        <div class="msg-info-name subtitle-2">{{ message.sender.fullname }}</div>
        <div class="msg-info-time caption">{{ message.created_at | from_now }}</div>
      </div>

      <div class="msg-text" >
        <div v-html="message.body" class="body-2"></div>
        <div v-if="message.media">
          <Images v-if="isImage" :media="message.media"></Images>
          <Docs v-if="isDocs" :media="message.media"></Docs>
          <Link v-if="isLink" :media="message.media"></Link>
          <Video v-if="isVideo" :media="message.media"></Video>
          <Other v-if="isOther" :media="message.media"></Other>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src="./MessageV2.scss"></style>

<script type="text/javascript">
import { global_utils } from '@/global_utils/global_utils'
import Images from './Images.vue'
import Docs from './Docs.vue'
import Link from './Link.vue'
import Other from './Other.vue'
import Video from './Video.vue'

export default {
  mixins: [global_utils],
  components : {
    Images,
    Docs,
    Link,
    Other,
    Video,
  },
  props: {
    id: Number,
    message: Object
  },
  computed: {
    onlineUsers() {
      return this.$store.getters['onlineUsers/all_users']
    },
    mine() {
      return this.message.sender.id === this.$store.getters.user.id
    },
    me_sender() {
      return this.mine ? 'right-msg' : 'left-msg'
    },
    is_user_online() {
      let inx = this.onlineUsers.findIndex(
        ii => ii.id === this.message.sender.id
      )
      return ~inx ? 'online' : 'offline'
    },
    isImage(){
      return this.message.media.category === `images`
    },
    isVideo(){
      return this.message.media.category === `videos`
    },
    isOther(){
      return this.message.media.category === `others`
    },
    isLink(){
      return this.message.media.category === `links`
    },
    isDocs(){
      return this.message.media.category === `documents`
    }
  }
}
</script>
