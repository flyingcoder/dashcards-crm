<template>
    <div class="chatbox">
        <v-card class="chat__header" @click="toggle_chat_box(conv.id)">
            <div class="user-info">
                <div class="user__img">
                    <v-img :src="conv.user.image_url" />
                    <span class="status" :class="{online : is_contact_online}" />
                </div>
                <div class="user__detail">
                    <div class="user__name">{{ conv.user.fullname | ucwords }}</div>
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
                        <v-progress-circular indeterminate color="primary" v-if="scroll_load" />
                    </div>
                    <div class="no-messages" v-if="!conv.messages.length">
                        <empty headline="No message yet! Say Hi!" icon="mdi-chat" />
                    </div>
                    <template v-else v-for="message of conv.messages">
                        <div class="single-message me" :key="message.id" v-if="message.user_id === user.id">
                            <div class="sender">
                                <div class="sender__img">
                                    <v-img :src="message.sender.image_url" />
                                    <span class="status online" />
                                </div>
                                <h5 class="sender__name">Me</h5>
                                <v-spacer />
                                <span class="date">  {{ message.created_at | chat_format }}  </span>
                            </div>
                            <div class="sender__message">
                                <div v-html="message.body" class="body-2 px-2" />
                                <div v-if="message.media">
                                    <Images v-if="message.media.category === `images`" :media="message.media" />
                                    <Docs v-if="message.media.category === `documents`" :media="message.media" />
                                    <Link v-if="message.media.category === `links`" :media="message.media" />
                                    <Video v-if="message.media.category === `videos`" :media="message.media" />
                                    <Other v-if="message.media.category === `others`" :media="message.media" />
                                </div>
                            </div>
                        </div>
                        <div class="single-message" :key="message.id" v-else>
                            <div class="sender">
                                <div class="sender__img">
                                    <v-img :src="message.sender.image_url" />
                                    <span class="status" :class="{online : is_contact_online}" />
                                </div>
                                <h5 class="sender__name">{{ conv.user.fullname | ucwords }}</h5>
                                <v-spacer />
                                <span class="date"> {{ message.created_at | chat_format }} </span>
                            </div>
                            <div class="sender__message">
                                <div v-html="message.body" class="body-2 px-2" />
                                <div v-if="message.media">
                                    <Images v-if="message.media.category === `images`" :media="message.media" />
                                    <Docs v-if="message.media.category === `documents`" :media="message.media" />
                                    <Link v-if="message.media.category === `links`" :media="message.media" />
                                    <Video v-if="message.media.category === `videos`" :media="message.media" />
                                    <Other v-if="message.media.category === `others`" :media="message.media" />
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div :class="['typing-indicator', { active: typing }]" v-show="typing">
                    ... {{ conv.user.fullname.split(',')[1] }} is typing
                </div>

                <div class="write px-1">
                    <ChatField
                            class="mt-2"
                            :hasAvatar="false"
                            :small="true"
                            :mentionables="[]"
                            @typing="user_typing"
                            @send-message="send_message"
                    />
                </div>
            </v-card>
        </transition>
    </div>
</template>

<script src="./ChatBox.js"></script>
<style lang="scss" scoped src="./ChatBox.scss"></style>
