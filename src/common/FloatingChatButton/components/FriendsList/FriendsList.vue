<template>
    <v-speed-dial bottom
            right slide-y-reverse-transition
            v-model="fabs"  direction="top"
            offset-y  class="chat__position"
            width="200" transition="slide-x-reverse-transition"
    >
        <v-btn class="chat__button" :data-notify="online_users.length"
               slot="activator" v-model="fabs" color="#3b589e"
               dark fab
        >
            <v-icon v-if="fabs">mdi-close</v-icon>
            <v-icon v-else>forum</v-icon>
        </v-btn>

        <v-card class="chat__inbox">
            <div class="inbox__title">Online ({{ online_users.length }})</div>
            <div class="user new__message" v-for="user of online_users" :key="user.id"
                 @click="open_chat_box(user)"
            >
                <div class="user__img">
                    <v-img :src="user.image_url" />
                    <span class="status online" />
                </div>
                <div class="user__detail">
                    <span class="user__name">{{ user.fullname }}</span>
                </div>
            </div>
        </v-card>
    </v-speed-dial>
</template>

<script src="./FriendsList.js"></script>
<style lang="scss" scoped src="./FriendsList.scss"></style>
