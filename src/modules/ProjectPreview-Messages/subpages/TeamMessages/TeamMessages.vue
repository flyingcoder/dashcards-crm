<template>
  <div class="message__body team-messages">
    <div class="messages" ref="messages-container">
      <v-row no-gutters class="pa-3" v-if="noMoreData === false && !loading">
        <v-col md="12" xs="12">
          <v-spacer></v-spacer>
          <v-btn text block
          class="view__more_btn overline" 
          @click="load_previous">Load Previous Messages</v-btn>
          <v-spacer></v-spacer>
        </v-col>
      </v-row>

      <Loader :loading="loading" />

      <template v-if="items.length > 0">
        <SingleMessage
          v-for="message of messages(items)"
          :key="message.id"
          :is-my-message="message.sender.id === loggedUser.id"
          :message="message"
        />
      </template>
      <div class="no-messages" v-else>
        <Empty headline="No messages yet"></Empty>
      </div>
    </div>
    <div class="write">
      <div class="avatar-wrapper">
        <img :src="loggedUser.image_url" class="sender-avatar" />
      </div>
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
  </div>
</template>

<script>
import * as apiTo from './api'
import { global_utils } from '@/global_utils/global_utils'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import _cloneDeep from 'lodash/cloneDeep'

// Components
import Loader from '@/common/BaseComponents/Loader.vue'
import SingleMessage from '../reusable/SingleMessage.vue'
import Empty from '@/common/Empty.vue'

export default {
  mixins: [global_utils, list_functionality],
  props: {
    id: [Number, String]
  },
  components: {
    Loader,
    SingleMessage,
    Empty
  },

  data: () => ({
    loading: false,
    message: null,
    can_message: false
  }),

  computed: {
    loggedUser() {
      return this.$store.getters.user
    }
  },
  mounted() {
    this.$pusher.authenticate()
    this.subscribePusher()
  },
  beforeDestroy() {
    this.$pusher.unsubscribe(`private-project.team-message.${this.id}`)
  },
  created() {
    this.loading = true
    this.fill_table_via_url(`api/projects/${this.id}/messages?type=team`)
    setTimeout(() => { this.scrollToBottomDiv() } ,1 )
  },

  methods: {
    scrollToBottomDiv() {
      setTimeout(() => {
        const wrapper = this.$refs['messages-container']
        if (wrapper) {
          wrapper.scrollTop = wrapper.scrollHeight
        }
      }, 1)
    },
    load_previous(){
      this.load_more_via_url(`api/projects/${this.id}/messages?type=team`)
    },
    add_new_message(message) {
      if (!this.items.some(msg => msg.id === message.id)) {
        this.items.unshift(message)
      }
    },
    user_can_message(can) {
      this.can_message = can
      if (can) this.$event.$emit('open_snackbar', 'Team chat connected')
      else
        this.$event.$emit('open_snackbar', 'Team chat disconnected.', 'error')
    },
    subscribePusher() {
      const team_message_channel = this.$pusher.subscribe(
        `private-project.team-message.${this.id}`
      )
      team_message_channel.bind('ProjectTeamMessage', data => {
        if (data.type === 'team') this.add_new_message(data.message)
      })
      team_message_channel.bind('pusher:subscription_succeeded', () =>
        this.user_can_message(true)
      )
      team_message_channel.bind('pusher:subscription_error', status =>
        this.user_can_message(false)
      )
    },
    sendMessage(message) {
      if (!message) return
      this.message = null
      let payload = {
        type: 'team',
        message,
        from_id: this.loggedUser.id
      }
      apiTo.send_message(this.id, payload).then(({ data }) => {
        this.add_new_message(data)
      })
      .finally(() => {
        this.scrollToBottomDiv()
      })
    },
    messages (items) {
      return _cloneDeep(items).reverse()
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
    .avatar-wrapper {
      padding: 3px;
      .sender-avatar {
        width: 40px;
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
}
</style>
