<template>
  <div class="message__body team-messages">
    <div class="messages" ref="messages-container">
      <v-row no-gutters class="pa-3">
        <v-spacer></v-spacer>
        <v-col>
          <v-btn text 
          v-if="noMoreData === false && !loading"
          class="view__more_btn overline" 
          @click="load_previous">Load Previous Messages</v-btn>
        </v-col>
        <v-spacer></v-spacer>
        <v-col md="1">
          <v-menu bottom left offset-y>
            <template v-slot:activator="{ on }">
              <v-btn  outlined icon v-on="on" >
                <v-icon small>settings</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item @click="open_manage_member_dialog" >
                <v-list-item-title>Manage Members</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
      <Loader :loading="loading" />
      <template v-if="items.length">
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

    <ManageClientChatMember
      ref="manage_group_members_dialog"
      :conversation="activeChat"
    ></ManageClientChatMember>
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
import ManageClientChatMember from '@/modules/ProjectPreview-Messages/components/ManageClientChatMember.vue'

export default {
  mixins: [global_utils, list_functionality],
  props: {
    id: [Number, String]
  },
  components: {
    Loader,
    SingleMessage,
    Empty,
    ManageClientChatMember
  },

  data: () => ({
    loading: false,
    message: null,
    can_message: false,
    activeChat : null
  }),

  computed: {
    loggedUser() {
      return this.$store.getters.user
    },
  },

  created() {
    this.loading = true
    this.fill_table_via_url(`api/projects/${this.id}/messages?type=client`)
    setTimeout(() => { this.scrollToBottomDiv() } ,1 )
    this.getConvoDetails(this.id)
  },
  mounted() {
    this.$pusher.authenticate()
    this.subscribePusher()
  },
  beforeDestroy() {
    this.$pusher.unsubscribe(`private-project.client-message.${this.id}`)
  },
  methods: {
    open_manage_member_dialog(){
      this.$refs.manage_group_members_dialog.open_dialog()
    },
    getConvoDetails(id) {
      apiTo.get_client_convo_details(id)
      .then(({ data }) => {
        this.activeChat = data
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
    load_previous(){
      this.load_more_via_url(`api/projects/${this.id}/messages?type=client`)
    },
    add_new_message(message) {
      if (!this.items.some(msg => msg.id === message.id)) {
        this.items.unshift(message)
      }
    },
    user_can_message(can) {
      this.can_message = can
      if (can) this.$event.$emit('open_snackbar', 'Client chat connected')
      else
        this.$event.$emit(
          'open_snackbar',
          'Client chat unavailable for you.',
          'error'
        )
    },
    subscribePusher() {
      const client_message_channel = this.$pusher.subscribe(
        `private-project.client-message.${this.id}`
      )
      client_message_channel.bind('ProjectClientMessage', data => {
        if (data.type === 'client') this.add_new_message(data.message)
      })
      client_message_channel.bind('pusher:subscription_succeeded', () =>
        this.user_can_message(true)
      )
      client_message_channel.bind('pusher:subscription_error', status =>
        this.user_can_message(false)
      )
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
      }).
      finally(() => {
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

  .no-messages {
    padding: 20px;
    text-align: center;
  }
}
</style>
