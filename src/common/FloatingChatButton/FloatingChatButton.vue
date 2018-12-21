<template>
    <div id="chat">

    <v-menu top 
            slide-y-reverse-transition 
            v-model="fabs" 
            :close-on-content-click="false"
            :nudge-top="60"
            class="chat__position"
    >
        <v-btn class="chat__button" 
               :data-notify="dataNotify" 
               slot="activator" 
               v-model="fabs" 
               color="#3b589e" 
               dark 
               fab
        >
          <v-icon>message</v-icon>
          <v-icon>close</v-icon>
        </v-btn>

        <v-card class="chat__inbox">
            <div class="inbox__title">Inbox ({{dataNotify}})</div>
            <div class="user new__message" 
                v-for="friend in friends"
                :key="friend.id"
            >
                <div class="user__img" >
                    <v-img :src="require('@/assets/temp/user.png')"/>
                    <span class="status" :class="friend.status"></span>
                </div>

                <div class="user__detail">
                    <span class="user__name">{{friend.name}}</span>
                    <span class="user__msg">{{friend.message}}</span>
                </div>
            </div>
        </v-card>
    </v-menu>
      
    <div class="chatbox">
        <v-card class="chat__header" @click="showMessage=!showMessage">
            <div class="user__img" >
                <v-img :src="require('@/assets/temp/user.png')"/>
                <span class="status online"></span>
            </div>

            <div class="user__detail">
                <div class="user__name">Mohammad Alongan</div>
            </div>

            <v-icon class="close__btn">close</v-icon>
        </v-card>

        <transition name="fadeHeight" mode="out-in">
            <v-card class="chat__body" v-if="showMessage">
                <div class="messages">
                    <div class="message">
                        <div class="sender">
                            <div class="sender__img" >
                                <v-img :src="require('@/assets/temp/user.png')"/>
                                <span class="status online"></span>
                            </div>
                            <h5 class="sender__name"> Mohammad Alongan </h5>
                            <span class="date"> 1 hour ago </span>
                        </div>
                        <p class="sender__message">Hello</p>
                    </div>
                    <div class="message me">
                        <div class="sender">
                            <div class="sender__img" >
                                <v-img :src="require('@/assets/temp/user.png')"/>
                                <span class="status online"></span>
                            </div>
                            <h5 class="sender__name"> Me </h5>
                            <span class="date"> 59 min ago </span>
                        </div>
                        <p class="sender__message">Hi</p>
                    </div>
                    <div class="message">
                        <div class="sender">
                            <div class="sender__img" >
                                <v-img :src="require('@/assets/temp/user.png')"/>
                                <span class="status online"></span>
                            </div>
                            <h5 class="sender__name"> Me </h5>
                            <span class="date"> 23 sec ago </span>
                        </div>
                        <p class="sender__message"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque atque voluptas ipsam reprehenderit provident? Id, officia. Ut corrupti assumenda architecto molestiae quaerat necessitatibus beatae, nesciunt quo minus facilis iste ab? </p>
                    </div>
                </div>
                
                <div class="write">
                    <v-text-field solo flat hide-details color="#667187" label="Type a message..."></v-text-field>
                    <v-icon color="#3b589e" class="send">send</v-icon>
                </div>

            </v-card>
        </transition>

    </div>

    <div class="chatbox">
        <v-card class="chat__header">
            <div class="user__img" >
                <v-img :src="require('@/assets/temp/user.png')"/>
                <span class="status offline"></span>
            </div>

            <div class="user__detail">
                <div class="user__name">Alvin Pacot</div>
            </div>

            <v-icon class="close__btn">close</v-icon>
        </v-card>
    </div>

    </div>
</template>

<script src="./FloatingChatButton.js">
</script>

<style lang="scss" scoped src="./FloatingChatButton.scss">
</style>
