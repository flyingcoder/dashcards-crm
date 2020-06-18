<template>
  <div class="message__body team-messages">
    <div class="messages" ref="messages-container">
      <v-row no-gutters class="pa-3" v-if="noMoreData === false && !loading">
        <v-col md="12" xs="12">
          <v-spacer></v-spacer>
          <v-btn
            text
            block
            class="view__more_btn overline"
            @click="load_previous"
            >Load Previous Messages</v-btn
          >
          <v-spacer></v-spacer>
        </v-col>
      </v-row>

      <v-progress-linear
        v-if="loading"
        :indeterminate="true"
      ></v-progress-linear>

      <v-row no-gutters v-if="items.length">
        <v-col md="12" class="px-3 py-2" style="min-height: 350px;">
          <Message
            v-for="message in messages(items)"
            :message="message"
            :key="message.id"
          ></Message>
        </v-col>
      </v-row>

      <div class="no-messages" v-else>
        <Empty headline="No messages yet"></Empty>
      </div>
    </div>
    <div class="write px-3">
      <ChatField
        class="mt-2"
        :mentionables="mentionables"
        @typing=""
        @send-message="sendMessage"
      ></ChatField>
    </div>
  </div>
</template>

<script>
import * as apiTo from './api'
import { global_utils } from '@/global_utils/global_utils'
import { list_functionality } from '@/services/list-functionality/list-functionality'
import _cloneDeep from 'lodash/cloneDeep'

// Components
import Empty from '@/common/Empty.vue'
import ChatField from '@/common/ChatBox/ChatField.vue'
import Message from '@/modules/Chat/components/Message/Message.vue'

export default {
  name: 'TeamMessages',
  mixins: [global_utils, list_functionality],
  props: {
    id: [Number, String]
  },
  components: {
    Empty,
    ChatField,
    Message
  },

  data: () => ({
    loading: false,
    message: null,
    can_message: false,
    activeChat: null
  }),

  computed: {
    loggedUser() {
      return this.$store.getters.user
    },
    mentionables() {
      if (!this.activeChat) {
        return []
      }
      return this.activeChat.members
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
    setTimeout(() => {
      this.scrollToBottomDiv()
    }, 1)
    this.getConvoDetails(this.id)
  },

  methods: {
    getConvoDetails(id) {
      apiTo
        .get_client_convo_details(id)
        .then(({ data }) => {
          this.activeChat = data
        })
        .finally(() => {
          this.loading = false
        })
    },
    scrollToBottomDiv() {
      setTimeout(() => {
        const wrapper = this.$refs['messages-container']
        if (wrapper) {
          wrapper.scrollTop = wrapper.scrollHeight
        }
      }, 1)
    },
    load_previous() {
      this.load_more_via_url(`api/projects/${this.id}/messages?type=team`)
    },
    add_new_message(message) {
      if (!this.items.some(msg => msg.id === message.id)) {
        this.items.unshift(message)
      }
    },
    user_can_message(can) {
      this.can_message = can
      if (can) console.log('Client chat connected')
      else this.$event.$emit('open_snackbar', 'Team chat unavailable.', 'error')
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
    sendMessage(data) {
      let formData = new FormData()
      formData.append('message', data.message)
      formData.append('type', 'team')
      formData.append('from_id', this.loggedUser.id)

      if (data.files.length > 0) {
        formData.append('file', data.files[0])
      }

      apiTo
        .send_message(this.id, formData)
        .then(({ data }) => {
          this.add_new_message(data)
        })
        .finally(() => {
          this.scrollToBottomDiv()
          this.$event.$emit('btnsending_off', false)
        })
    },
    messages(items) {
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
