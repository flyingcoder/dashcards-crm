<template>
  <div class="reports__body">
    <v-progress-linear v-if="!loaded" :indeterminate="true"></v-progress-linear>
    <div class="reports-content" v-show="loaded">
      <div class="site-preview" v-if="iframe_src">
        <iframe
          :src="iframe_src"
          frameborder="0"
          width="100%"
          height="800"
          @load="load"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iframe_src: String
  },
  data: () => ({
    loaded: false
  }),
  methods: {
    load() {
      this.loaded = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';

.reports__body {
  background-color: $tableBlueBg;
  border: 1px solid $tableBorderBlue;
  padding: 25px;
  display: grid;

  .reports__buttons {
    background-color: $white;
    height: auto;
    padding: 25px;

    .reports__option {
      text-align: right;
      .add__link {
        color: $white;
        width: 100px;
      }
      .save {
        color: $white;
        width: 100px;
      }
    }
  }
}

.reports-content {
  background-color: $white;
}
.site-preview {
  border: 1px solid $tableBorderBlue;
}
</style>
