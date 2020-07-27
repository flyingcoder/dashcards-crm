<template>
    <div class="chat">
        <GroupChatDialog ref="creategroupchat" @newChatGroupCreated="new_groupchat_added"/>
        <ManageMembersDialog ref="manage_group_members_dialog" :conversation="activeChat"/>
        <table-header :paths="paths" :noButton="true"/>
        <div class="chat-container">
            <v-layout wrap class="chat__content">
                <v-flex md4 sm5 xs12 class="chat__sidebar">
                    <v-card text class="chatlist">
                        <v-app-bar>
                            <v-img :src="loggeduser.image_url" class="chat__owner_img"/>
                            <span class="chat__owner_name">{{ loggeduser.first_name }} {{ loggeduser.last_name }}</span>
                            <v-spacer/>
                            <v-tooltip left>
                                <template v-slot:activator="{ on }">
                                    <v-btn icon v-on="on" @click="$refs.creategroupchat.open_dialog()">
                                        <v-icon color="primary">mdi-comment-plus</v-icon>
                                    </v-btn>
                                </template>
                                <span>New Group Chat</span>
                            </v-tooltip>
                        </v-app-bar>
                        <v-card outlined class="mx-auto">
                            <div class="friend__list">
                                <v-skeleton-loader v-if="userLoading" v-for="n in [1, 2, 3, 4, 5]" :key="n"
                                                   ref="skeleton" type="list-item-avatar-two-line"
                                                   class="mx-auto"
                                />
                                <v-list subheader dense v-if="all_groups.length > 0">
                                    <v-list-item v-for="conv of all_groups" :key="conv.id"
                                                 @click="open_conversation(conv)"
                                    >
                                        <v-list-item-content>
                                            <div class="friend user" @click="open_conversation(conv)">
                                                <div class="user-wrap">
                                                    <div class="user__img">
                                                        <svg viewBox="0 0 250 250">
                                                            <path class="icon" :d="group_icon"/>
                                                        </svg>
                                                    </div>
                                                    <span class="user__name">{{ conv.fullname }}</span>
                                                </div>
                                            </div>
                                        </v-list-item-content>
                                        <v-list-item-icon>
                                            <v-icon color="success" class="has_message" title="New message"
                                                    v-show="conv.message_count > 0"
                                            >
                                                mail
                                            </v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>
                                </v-list>
                                <v-divider/>
                                <v-list subheader dense>
                                    <v-list-item v-for="user of sorted(all_users)" :key="user.id"
                                                 @click="open_conversation(user)"
                                    >
                                        <v-list-item-content>
                                            <div class="friend user" @click="open_conversation(user)">
                                                <div class="user-wrap">
                                                    <div class="user__img">
                                                        <v-img :src="user.image_url" color="grey">
                                                            <template v-slot:placeholder>
                                                                <span class="black--text">{{
                                                                    user.fullname.charAt(0)
                                                                    }}</span>
                                                            </template>
                                                        </v-img>
                                                        <span class="status"
                                                              :class="[user.is_online ? 'online' : 'offline']"
                                                        />
                                                    </div>
                                                    <span class="user__name">{{ user.fullname }}</span>
                                                </div>
                                            </div>
                                        </v-list-item-content>
                                        <v-list-item-icon>
                                            <v-icon color="success" class="has_message" title="New message"
                                                    v-show="user.message_count > 0"
                                            >
                                                mail
                                            </v-icon>
                                        </v-list-item-icon>
                                    </v-list-item>
                                </v-list>
                            </div>
                            <v-card-actions>
                                <v-btn text normal class="mx-auto view__more_btn">VIEW MORE</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-card>
                </v-flex>
                <v-flex md8 sm7 xs12 class="chat__message">

                    <v-card class="mx-auto message__content" v-if="!activeChat && !cardLoading"
                            style="height: 100%;background:#f5f7fa;"
                    >
                        <Empty icon="mdi-message-plus-outline" headline="Send a message now"/>

                    </v-card>
                    <v-card outlined class="mx-auto message__content" v-else-if="activeChat">
                        <v-toolbar color="#3b589e">
                            <v-row class="message__header">
                                <v-flex xs2 class="sender__img">
                                    <svg viewBox="0 0 250 250" v-if="activeChat.type === 'group'">
                                        <path class="icon" :d="group_icon"/>
                                    </svg>
                                    <v-img :src="activeChat.image_url" v-else/>
                                    <span class="status" :class="[activeChat.is_online ? 'online' : 'offline']"/>
                                </v-flex>
                                <v-toolbar-title>{{ activeChat.fullname }}</v-toolbar-title>
                                <v-spacer/>
                                <v-menu class="friend__info" left offset-x :close-on-content-click="false">
                                    <template v-slot:activator="{ on }">
                                        <v-btn fab icon v-on="on" color="#ffffff">
                                            <v-icon>settings</v-icon>
                                        </v-btn>
                                    </template>
                                    <v-card class="hover__info">
                                        <div class="info__one">
                                            <div class="h__img">
                                                <svg viewBox="0 0 250 250" v-if="activeChat.type === 'group'">
                                                    <path class="icon" :d="group_icon"/>
                                                </svg>
                                                <v-img :src="activeChat.image_url" v-else/>
                                            </div>
                                            <div class="h__details">
                                                <h2 class="h__name">{{ activeChat.fullname }}</h2>
                                                <p class="h__job subtitle">
                                                    {{
                                                    activeChat.type === 'group'
                                                    ? current_members.length + ' members'
                                                    : activeChat.job_title
                                                    }}<br>
                                                    {{
                                                    activeChat.type === 'group'
                                                    ? 'Admin : ' +
                                                    creator(activeChat.data.group_creator.id)
                                                    : ''
                                                    }}
                                                </p>
                                                <div class="info__anchor" v-show="activeChat.type !== 'group'">
                                                    <v-icon>email</v-icon>
                                                    <a :href="'mailto:' + activeChat.email">{{
                                                        activeChat.email
                                                        }}</a>
                                                </div>
                                                <div class="info__anchor" v-show="activeChat.type !== 'group'">
                                                    <v-icon>location_on</v-icon>
                                                    <span>{{ activeChat.location }}</span>
                                                </div>
                                                <div class="info__anchor" v-if="activeChat.type === 'group'">
                                                    <v-btn v-if="
                              loggeduser.id === activeChat.data.group_creator.id
                            " text small outlined @click="
                              $refs.manage_group_members_dialog.open_dialog()
                            "
                                                    >
                                                        <v-icon small>settings</v-icon>
                                                        Manage Members
                                                    </v-btn>
                                                </div>
                                                <Avatars v-if="activeChat.type === 'group'"
                                                         :items="activeChat.members"
                                                         class="mt-1" :count="6"
                                                />
                                            </div>
                                        </div>
                                        <div class="info__two" v-show="activeChat.type !== 'group'">
                                            <div class="info__cta">
                                                <div class="info__anchor">
                                                    <v-icon>person</v-icon>
                                                    <a href="javascript::void(0)"
                                                       @click="go_to_profile(activeChat)">View
                                                        Profile</a>
                                                </div>
                                                <div class="info__anchor">
                                                    <v-icon>email</v-icon>
                                                    <a :href="'mailto:' + activeChat.email">Email</a>
                                                </div>
                                                <div class="info__anchor">
                                                    <v-icon>message</v-icon>
                                                    <a href="javascript::void(0)"
                                                       @click="open_conversation(activeChat)"
                                                    >Chat</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="info__three" v-show="activeChat.type !== 'group'">
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
                            </v-row>
                        </v-toolbar>
                        <v-flex xs12 sm12 class="message__body">
                            <v-skeleton-loader v-if="cardLoading" ref="skeleton" type="card-avatar"
                                               class="mx-auto"
                            />
                            <div class="messages" v-else-if="all_messages.length > 0" id="messageContainer">
                                <div class="view__more" v-show="has_more_message">
                                    <v-btn class="overline" block text dense :disabled="view__more_loading"
                                           :loading="view__more_loading" @click="get_previous_message"
                                    >
                                        VIEW MORE
                                    </v-btn>
                                </div>
                                <Message v-for="message in all_messages" :message="message" :key="message.id"/>
                            </div>
                            <div class="messages-empty" color="#f5f7fa" v-else>
                                <Empty icon="mdi-message-plus-outline" slug="empty-chat"
                                       headline="Start sending messages"
                                />
                            </div>
                            <div class="write px-2" v-if="!cardLoading">
                                <ChatField class="mt-2" :mentionables="mentionables" @typing="handleTyping"
                                           @send-message="sendMessage"
                                />
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