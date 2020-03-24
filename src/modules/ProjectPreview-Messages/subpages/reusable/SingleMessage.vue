<template>
  <div class="message" :class="{ me: isMyMessage }">
    <v-layout wrap class="sender">
      <v-flex xs3 class="sender__img">
        <v-img :src="message.sender.image_url" />
        <span class="status online"></span>
      </v-flex>
      <v-flex xs5 class="sender__name">
        <h5>{{ message.sender.first_name }} {{ message.sender.last_name }}</h5>
      </v-flex>
      <v-flex xs4 class="date"> {{ message.created_at | from_now }} </v-flex>
    </v-layout>
    <div class="sender__message">
      {{ message.body }}
    </div>
  </div>
</template>

<script>
import { global_utils } from '@/global_utils/global_utils'

export default {
  mixins: [global_utils],
  props: {
    isMyMessage: Boolean,
    message: Object // TODO implement message for displaying to the template
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';

.message {
  border-bottom: 1px solid $borderLightGray;
  padding: 5px 25px;

  &.me {
    background-color: $tableBlueBg;

    .sender {
      flex-direction: row-reverse;

      .sender__name {
        text-align: right;
      }
      .date {
        text-align: left;
      }
    }

    .sender__message {
      margin-left: 30px;
      margin-right: 0;
      text-align: justify;
      display: flex;
      flex-flow: column;
      align-items: flex-end;
    }
  }

  .sender {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @include userImgWithStatus('.sender__img');

  .sender__img {
    text-align: center;
    height: 50px;
    width: 50px;
    max-width: 50px;

    .status {
      width: 15px;
      height: 15px;
      border: 2px solid $lightViolete;
    }
  }

  .sender__name h5 {
    font-size: 18px;
    margin: 0 5px;
    color: $titleDarkBlue;
  }

  .date {
    font-size: 12px;
    opacity: 0.7;
    margin: 0 5px;
    color: $textDarkBlue;
    text-align: right;
  }

  .sender__message {
    padding: 10px;
    font-size: 16px;
    text-align: justify;
    margin: 0;
    color: $textDarkBlue;
    margin-right: 30px;
  }
}
</style>
