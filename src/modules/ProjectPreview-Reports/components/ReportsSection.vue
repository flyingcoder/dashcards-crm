<template>
  <div class="reports__body">
    <v-progress-linear v-if="!loaded" :indeterminate="true"></v-progress-linear>
    <div class="reports-content" v-show="loaded">
      <div class="site-preview" v-if="iframe_src">
        <iframe
          :src="iframe_src"
          frameborder="0"
          width="100%"
          @load="load"
          @error="error"
          style="min-height: 100vh"
        ></iframe>
      </div>
    </div>
    <Empty v-show="hasError" headline="Unable to fetch contents!">
      <template v-slot:extra>
        <v-btn color="primary" :href="iframe_src" target="_blank"
          ><v-icon left>mdi-link</v-icon> Follow Link?</v-btn
        >
      </template>
    </Empty>
  </div>
</template>

<script>
import Empty from '@/common/Empty'
export default {
  props: {
    iframe_src: String
  },
  components: {
    Empty
  },
  data: () => ({
    loaded: false,
    hasError: false
  }),
  methods: {
    load() {
      this.loaded = true
    },
    error(e) {
      this.loaded = true
      hasError = true
      console.log(e)
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
  }
}

.reports-content {
  background-color: $white;
}
.site-preview {
  border: 1px solid $tableBorderBlue;
}
</style>
