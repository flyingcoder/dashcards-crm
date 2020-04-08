<template functional>
  <div class="notif" :class="{ read: props.read }" v-on="listeners">
    <div class="user">
      <div class="user__detail">
        <span class="user__name">
          {{ props.user }}
        </span>
        {{ props.description }}
      </div>
      <div class="user__img">
        <v-img :src="props.userImage" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: String,
    description: String,
    userImage: String,
    read: [Boolean, Number]
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';

.notif {
  max-height: 300px;
  overflow: auto;
  background: $blue-2;

  &.read {
    background: $lightBlue-2;
  }

  .user {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $borderGray;
    padding: 5px;

    &:hover {
      background-color: $white;
    }

    @include userImgWithStatus('.user__img');

    .user__img {
      height: 40px;
      width: 40px;
      min-width: 40px;
    }

    .user__detail {
      margin-right: 10px;
      cursor: pointer;
      width: 220px;
      font-size: 14px;
      color: $titleDarkBlue;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis-word;

      .user__name {
        font-weight: bold;
      }
    }
  }
}
</style>
