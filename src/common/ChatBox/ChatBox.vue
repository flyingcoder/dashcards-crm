<template>
  <div class="chatbox">
    <v-card class="chat__header" @click="toggle_chat_box(conv.id)">
      <div class="user-info">
        <div class="user__img">
          <v-img :src="require('@/assets/temp/user.png')" />
          <span
            :class="['status', conv.user.is_online ? 'online' : 'offline']"
          ></span>
        </div>

        <div class="user__detail">
          <div class="user__name">{{ conv.user.name }}</div>
        </div>
      </div>

      <v-badge right color="#f56c6c" v-show="unread_message">
        <span slot="badge">{{ unread_message }}</span>
      </v-badge>

      <v-icon class="close__btn" @click="close_active_conv(conv.id)">
        close
      </v-icon>
    </v-card>

    <transition name="fadeHeight" mode="out-in">
      <v-card class="chat__body" v-show="conv.open">
        <div
          class="messages"
          ref="chat_box"
          :id="`chat_box${conv.id}`"
          @scroll="on_scroll"
        >
          <div class="message-loader">
            <v-progress-circular
              indeterminate
              color="primary"
              v-if="scroll_load"
            ></v-progress-circular>
          </div>

          <div class="no-messages" v-if="!conv.messages.length">
            No messages yet
          </div>

          <template v-else v-for="message of conv.messages">
            <div
              class="message me"
              :key="message.id"
              v-if="message.user_id === user.id"
            >
              <div class="sender">
                <div class="sender__img">
                  <v-img :src="require('@/assets/temp/user.png')" />
                  <span class="status online"></span>
                </div>
                <h5 class="sender__name">Me</h5>
                <span class="date">
                  {{ message.created_at | chat_format }}
                </span>
              </div>
              <p class="sender__message">{{ message.body }}</p>
            </div>

            <div class="message" :key="message.id" v-else>
              <div class="sender">
                <div class="sender__img">
                  <v-img :src="require('@/assets/temp/user.png')" />
                  <span
                    :class="[
                      'status',
                      conv.user.is_online ? 'online' : 'offline'
                    ]"
                  ></span>
                </div>
                <h5 class="sender__name">{{ conv.user.name }}</h5>
                <span class="date">
                  {{ message.created_at | chat_format }}
                </span>
              </div>
              <p class="sender__message">{{ message.body }}</p>
            </div>
          </template>
        </div>

        <div :class="['typing-indicator', { active: typing }]" v-show="typing">
          ... {{ conv.user.name.split(',')[1] }} is typing
        </div>

        <div class="write">
          <v-text-field
            solo
            flat
            hide-details
            color="#667187"
            label="Type a message..."
            v-model.trim="message"
            @keydown.exact="user_typing"
            @keydown.enter="send_message"
          ></v-text-field>

          <v-icon
            :disabled="!message"
            color="#3b589e"
            class="send"
            @click="send_message"
            >send</v-icon
          >
        </div>
      </v-card>
    </transition>
  </div>
</template>

<script src="./ChatBox.js">
</script>
<style lang="scss" scoped src="./ChatBox.scss">
</style>
