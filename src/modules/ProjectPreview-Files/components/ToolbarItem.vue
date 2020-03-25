<template functional>
  <v-btn
    :class="['button', { active: props.isActive }]"
    color="#b3b7c3"
    medium
    text
    v-on="listeners"
    class="mr-1"
  >
    <v-icon dark left :class="props.iconClass">{{ props.icon }}</v-icon>
    {{ props.iconText }}
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: String,
    iconText: String,
    iconClass: String,
    isActive: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';

.button {
  border: 1px solid $btnGray;
  border-radius: 5px;
  height: 50px;
  width: 125px;
  &:hover,
  &.active {
    .all.v-icon {
      color: $violet;
    }
    .image.v-icon {
      color: $green;
    }
    .video.v-icon {
      color: $red;
    }
    .docs.v-icon {
      color: $lightBlue;
    }
    .other.v-icon {
      color: $lightGreen;
    }
  }
}

@media only screen and (max-width: 768px) and (min-width: 481px) {
  .button {
    font-size: 12px;
    height: 35px;
  }
}

@media only screen and (max-width: 480px) {
  .button {
    font-size: 12px;
    height: 30px;
    width: 125px;
  }
}
</style>
