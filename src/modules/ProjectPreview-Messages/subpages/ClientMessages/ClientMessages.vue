<template>
  <div class="message__body team-messages">
    <div class="messages" ref="messages-container">
      <Loader :loading="loading" />
      <template v-if="messages.length">
        <SingleMessage
          v-for="message of messages"
          :key="message.id"
          :is-my-message="message.sender.id === loggedUser.id"
          :message="message"
        />
      </template>
      <div class="no-messages" v-else>
        No messages yet
      </div>
    </div>
    <div class="write" v-if="can_message">
      <v-text-field
        v-model="message"
        class="write__msg"
        solo
        flat
        hide-details
        color="#667187"
        label="Type a message..."
        @keyup.enter="sendMessage($event.target.value)"
      ></v-text-field>
      <div class="write__actions">
        <v-icon class="action insert__emoticon">insert_emoticon</v-icon>
        <v-icon class="action attach_file">attach_file</v-icon>
        <v-icon class="action send" @click="sendMessage(message)">send</v-icon>
      </div>
    </div>
    <div class="view__more">
      <v-btn flat class="view__more_btn">VIEW MORE</v-btn>
    </div>
  </div>
</template>

<script>
import * as apiTo from './api'
import { global_utils } from '@/global_utils/global_utils'
// Components
import Loader from '@/common/BaseComponents/Loader.vue'
import SingleMessage from '../reusable/SingleMessage.vue'

export default {
  mixins: [global_utils],
  props: {
    id: [Number, String]
  },
  components: {
    Loader,
    SingleMessage
  },

  data: () => ({
    loading: false,
    messages: [],
    message: null,
    can_message : false
  }),

  computed: {
    loggedUser() {
      return this.$store.getters.user
    }
  },

  created() {
    this.loading = true
    apiTo
      .get_client_messages(this.id)
      .then(({ data }) => {
        this.messages = data.data
        this.scrollToBottom(this.$refs['messages-container'])
      })
      .finally(() => (this.loading = false))
  },
  mounted(){
    this.subscribePusher()
  },
  beforeDestroy() {
    this.$pusher.unsubscribe('private-project.client-message.'+this.id)
  },
  methods: {
    add_new_message(message){
      if(!this.messages.some(msg => msg.id === message.id)){
        this.messages.push(message)
      }
      this.scrollToBottom(this.$refs['messages-container'])
    },
    user_can_message(can){
      this.can_message = can
      if (can) 
        this.$event.$emit('open_snackbar', 'Client chat connected') 
      else
        this.$event.$emit('open_snackbar', 'Client chat unavailable for you.', 'error')
    },
    subscribePusher() {
      var channel = this.$pusher.subscribe('private-project.client-message.'+this.id)
          channel.bind('ProjectClientMessage', (data) =>{ 
            if(data.type === 'client') this.add_new_message(data.message) 
          })
          channel.bind('pusher:subscription_succeeded', () => this.user_can_message(true))
          channel.bind('pusher:subscription_error',(status) => this.user_can_message(false))
    },
    sendMessage(message) {
      if (!message) return
      this.message = null
      let payload = {
        type: 'client',
        message,
        from_id: this.loggedUser.id
      }
      apiTo.send_message(this.id, payload).then(({ data }) => {
        this.add_new_message(data)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';

.message__body {
  border: 1px solid $borderLightGray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @include styledScrollFor('.messages'); //style the scroll

  .messages {
    background-color: $white;
    overflow: auto;
    max-height: 462px;
    border-bottom: 1px solid $borderLightGray;
  }

  .write {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    background-color: $white;
    .write__actions {
      .action {
        margin: 5px 7px;
        color: $lightGray-2;
        cursor: pointer;

        &:hover {
          color: $blue;
        }
      }
    }
  }

  .view__more {
    text-align: center;
    padding: 10px;
    border-top: 1px solid $borderLightGray;
    background-color: $white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    .view__more_btn {
      color: $tableDarkText;
    }
  }

  .no-messages {
    padding: 20px;
    text-align: center;
  }
}
</style>
