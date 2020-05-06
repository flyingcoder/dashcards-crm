<template>
  <div :class="wclass">
    <v-img
      v-if="image_exist"
      :src="media.thumb_url"
      @click="$emit('click-main')"
      :height="height"
      :width="width"
      contain
      @error="image_exist = false"
    >
    </v-img>
    <v-img v-else :height="height" :width="width" @click="$emit('click-alt')">
      <div class="default-img-wrapper">
        <span
          class="fiv-icon fiv-sqo"
          :class="[
            `fiv-icon-` + media.custom_properties.ext,
            `fiv-size-` + size
          ]"
        ></span>
      </div>
    </v-img>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.default-img-wrapper {
  display: grid;
  height: 100%;

  .fiv-icon {
    margin: auto;
  }
}
</style>
<script>
export default {
  name: 'Media',
  props: {
    media: Object,
    height: { type: [Number, String], default: '100%' },
    width: { type: [Number, String] },
    wclass: { type: String, default: 'img-wrapper' },
    size: { type: String, default: 'xl' }
  },
  data: () => ({
    image_exist: true
  })
}
</script>
