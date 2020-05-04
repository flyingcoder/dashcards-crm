<template>
  <div class="text-center">
    <v-menu
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      top
      left
    >
      <template v-slot:activator="{ on }">
        <v-icon class="action insert__emoticon" v-on="on"
          >insert_emoticon</v-icon
        >
      </template>
      <VEmojiPicker
        v-show="true"
        labelSearch="Search"
        @select="onSelectEmoji"
      />
    </v-menu>
  </div>
</template>

<script>
import VEmojiPicker from 'v-emoji-picker'
export default {
  components: {
    VEmojiPicker
  },
  methods: {
    onSelectEmoji(emoji) {
      this.$emit('emoji-selected', emoji)
    }
  }
}
</script>
