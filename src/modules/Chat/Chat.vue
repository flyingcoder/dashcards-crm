<template>
  <div class="chat">
    <GroupChatDialog
      ref="creategroupchat"
      @newChatGroupCreated="new_groupchat_added"
    ></GroupChatDialog>

    <ManageMembersDialog
      ref="manage_group_members_dialog"
      :conversation="activeChat"
    ></ManageMembersDialog>

    <table-header :paths="paths" :noButton="true" />

    <div class="chat-container">
      <v-layout wrap class="chat__content">
        <v-flex md4 sm5 xs12 class="chat__sidebar">
          <v-card text class="chatlist">
            <v-app-bar>
              <v-img
                :src="loggeduser.image_url"
                class="chat__owner_img"
              ></v-img>
              <span class="chat__owner_name"
                >{{ loggeduser.first_name }} {{ loggeduser.last_name }}</span
              >
              <v-spacer></v-spacer>

              <v-btn icon @click="$refs.creategroupchat.open_dialog()">
                <v-icon>add</v-icon>
              </v-btn>
            </v-app-bar>

            <v-card text class="mx-auto">
              <div class="friend__list">
                <v-skeleton-loader
                  v-if="userLoading"
                  v-for="n in [1, 2, 3, 4, 5]"
                  ref="skeleton"
                  type="list-item-avatar-two-line"
                  class="mx-auto"
                ></v-skeleton-loader>
                <v-list subheader dense v-if="all_groups.length > 0">
                  <v-list-item
                    v-for="conv of all_groups"
                    :key="conv.id"
                    @click="open_conversation(conv)"
                  >
                    <v-list-item-content>
                      <div class="friend user" @click="open_conversation(conv)">
                        <div class="user-wrap">
                          <div class="user__img">
                            <svg viewBox="0 0 250 250">
                              <path class="icon" :d="group_icon" />
                            </svg>
                          </div>
                          <span class="user__name">{{ conv.fullname }}</span>
                        </div>
                      </div>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon
                        color="success"
                        class="has_message"
                        title="New message"
                        v-show="conv.message_count > 0"
                        >mail</v-icon
                      >
                    </v-list-item-icon>
                  </v-list-item>
                </v-list>
                <v-divider></v-divider>
                <v-list subheader dense>
                  <v-list-item
                    v-for="user of sorted(all_users)"
                    :key="user.id"
                    @click="open_conversation(user)"
                  >
                    <v-list-item-content>
                      <div class="friend user" @click="open_conversation(user)">
                        <div class="user-wrap">
                          <div class="user__img">
                            <v-img :src="user.image_url" color="grey">
                              <template v-slot:placeholder>
                                <span class="black--text">{{user.fullname.charAt(0)}}</span>
                              </template>
                            </v-img>
                            <span
                              class="status"
                              :class="[user.is_online ? 'online' : 'offline']"
                            ></span>
                          </div>
                          <span class="user__name">{{ user.fullname }}</span>
                        </div>
                      </div>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon
                        color="success"
                        class="has_message"
                        title="New message"
                        v-show="user.message_count > 0"
                        >mail</v-icon
                      >
                    </v-list-item-icon>
                  </v-list-item>
                </v-list>
              </div>

              <v-card-actions>
                <v-btn text normal class="mx-auto view__more_btn"
                  >VIEW MORE</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-card>
        </v-flex>

        <v-flex md8 sm7 xs12 class="chat__message">
          <v-card
            class="mx-auto message__content"
            v-if="!activeChat && !cardLoading"
            style="height: 100%;background:#f5f7fa;"
          >
            <Empty headline="Send a message now"></Empty>
          </v-card>
          <v-card text class="mx-auto message__content" v-else-if="activeChat">
            <v-toolbar color="#3b589e">
              <v-layout wrap class="message__header">
                <v-flex xs2 class="sender__img">
                  <svg viewBox="0 0 250 250" v-if="activeChat.type === 'group'">
                    <path class="icon" :d="group_icon" />
                  </svg>
                  <v-img :src="activeChat.image_url" v-else></v-img>
                  <span
                    class="status"
                    :class="[activeChat.is_online ? 'online' : 'offline']"
                  ></span>
                </v-flex>

                <v-toolbar-title>{{ activeChat.fullname }}</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-menu
                  class="friend__info"
                  left
                  offset-x
                  :close-on-content-click="false"
                >
                  <template v-slot:activator="{ on }">
                    <v-btn fab icon v-on="on" color="#ffffff">
                      <v-icon>settings</v-icon>
                    </v-btn>
                  </template>

                  <v-card class="hover__info">
                    <div class="info__one">
                      <div class="h__img">
                        <svg
                          viewBox="0 0 250 250"
                          v-if="activeChat.type === 'group'"
                        >
                          <path class="icon" :d="group_icon" />
                        </svg>
                        <v-img :src="activeChat.image_url" v-else />
                      </div>
                      <div class="h__details">
                        <h2 class="h__name">{{ activeChat.fullname }}</h2>
                        <p class="h__job">
                          {{
                            activeChat.type === 'group'
                              ? current_members.length + ' members'
                              : activeChat.job_title
                          }}
                        </p>
                        <div
                          class="info__anchor"
                          v-show="activeChat.type !== 'group'"
                        >
                          <v-icon>email</v-icon>
                          <a :href="'mailto:' + activeChat.email">{{
                            activeChat.email
                          }}</a>
                        </div>
                        <div
                          class="info__anchor"
                          v-show="activeChat.type !== 'group'"
                        >
                          <v-icon>location_on</v-icon>
                          <span>{{ activeChat.location }}</span>
                        </div>
                        <div
                          class="info__anchor"
                          v-show="activeChat.type === 'group'"
                        >
                          <v-btn
                            text
                            small
                            outlined
                            @click="
                              $refs.manage_group_members_dialog.open_dialog()
                            "
                          >
                            <v-icon small>settings</v-icon> Manage Members
                          </v-btn>
                        </div>
                      </div>
                    </div>
                    <div class="info__two" v-show="activeChat.type !== 'group'">
                      <div class="info__cta">
                        <div class="info__anchor">
                          <v-icon>person</v-icon>
                          <a
                            href="javascript::void(0)"
                            @click="go_to_profile(activeChat)"
                            >View Profile</a
                          >
                        </div>
                        <div class="info__anchor">
                          <v-icon>email</v-icon>
                          <a :href="'mailto:' + activeChat.email">Email</a>
                        </div>
                        <div class="info__anchor">
                          <v-icon>message</v-icon>
                          <a
                            href="javascript::void(0)"
                            @click="open_conversation(activeChat)"
                            >Chat</a
                          >
                        </div>
                      </div>
                    </div>

                    <div
                      class="info__three"
                      v-show="activeChat.type !== 'group'"
                    >
                      <div class="total">
                        <p>Total Hours</p>
                        <h2>10</h2>
                      </div>
                      <div class="total">
                        <p>Total Amount</p>
                        <h2>$2,758.93</h2>
                      </div>
                    </div>
                  </v-card>
                </v-menu>
              </v-layout>
            </v-toolbar>

            <v-flex xs12 sm12 class="message__body">
              <v-skeleton-loader
                v-if="cardLoading"
                ref="skeleton"
                type="card-avatar"
                class="mx-auto"
              ></v-skeleton-loader>

              <div
                class="messages"
                v-else-if="all_messages.length > 0"
                id="messageContainer"
              >
                <div class="view__more" v-show="has_more_message">
                  <v-btn
                    class="overline"
                    block
                    text
                    dense
                    :disabled="view__more_loading"
                    :loading="view__more_loading"
                    @click="get_previous_message"
                    >VIEW MORE</v-btn
                  >
                </div>

                <Message
                  v-for="message in all_messages"
                  :message="message"
                  :key="message.id"
                ></Message>
              </div>

              <div class="messages-empty" color="#f5f7fa" v-else>
                <Empty
                  slug="empty-chat"
                  headline="Start sending messages"
                ></Empty>
              </div>

              <div class="write" v-if="!cardLoading">
                <div class="avatar-wrapper">
                  <img :src="loggeduser.image_url" class="sender-avatar" />
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
                  <v-icon class="action insert__emoticon"
                    >insert_emoticon</v-icon
                  >
                  <v-icon class="action attach_file">attach_file</v-icon>
                  <v-icon class="action send" @click="sendMessage(message)"
                    >send</v-icon
                  >
                </div>
              </div>
            </v-flex>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script src="./Chat.js"></script>
<style lang="scss" scoped src="./Chat.scss"></style>
<style scoped src="./Chat.css"></style>
