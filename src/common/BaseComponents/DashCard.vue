<template>
  <div
    :class="['dash__card', { selected: is_selected }]"
    @click="$emit('click')"
  >
    <div class="image">
      <v-img width="40px" :src="computed_src"></v-img>
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imgSrc: String,
    selected: Array,
    id: [String, Number]
  },
  computed: {
    computed_src() {
      return require('@/assets/icons/' + this.imgSrc) || null
    },
    is_selected() {
      return this.selected.includes(this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';

.dash__card {
  background-color: $lightViolete-2;
  cursor: pointer;
  width: 120px;
  height: 90px;
  border-radius: 10px;
  border: 2px solid $lightViolete-2;
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: $darkViolete;

  &.selected {
    background: $darkViolete;
    border: 2px solid $darkViolete;
    color: white;
  }

  .image {
    display: grid;
    justify-content: center;
  }

  &:hover {
    border: 2px solid $darkViolete;
  }
}
</style>
