<template>
  <div class="reports__body">
    <div class="reports-content">
      <div v-if="!no_actions" class="reports__buttons">
        <div class="reports__option">
          <v-btn
            color="#3b589e"
            class="add__link"
            @click="$emit('open-dialog')"
          >
            Add Link
          </v-btn>

          <v-btn
            color="#3b589e"
            :disabled="!activate_save"
            class="save"
            @click="$emit('save-report')"
          >
            Save
          </v-btn>
        </div>
      </div>
      <div class="site-preview" v-if="iframe_src">
        <iframe
          :src="iframe_src"
          frameborder="0"
          width="100%"
          height="500px"
          @load="$emit('iframe-loaded')"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    iframe_src: String,
    activate_save: Boolean,
    no_actions: Boolean
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
  margin: 5px 10px;
}
</style>
