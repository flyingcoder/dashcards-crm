<template>
  <div id="chat" v-show="should_show">
    <friends-list @open-chatbox="open_conversation" />

    <template v-for="conv of active_conv">
      <chat-box :key="conv.id" :conv="conv" />
    </template>
  </div>
</template>

<script src="./FloatingChatButton.js"></script>

<style lang="scss" scoped src="./FloatingChatButton.scss"></style>
