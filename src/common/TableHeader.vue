<template>
  <v-layout wrap class="table-header">
    <breadcrumb :paths="paths" />
    <v-btn v-if="!noButton" fab small color="#3b589e" class="add__btn" @click="$emit('click')">
      <v-icon>add</v-icon>
    </v-btn>
    <slot name="form-btn" />
  </v-layout>
</template>

<script>
import Breadcrumb from '@/common/Breadcrumb.vue'

export default {
  name: 'TableHeader',
  props: {
    paths: Array,
    noButton: Boolean
  },
  data() {
    return {
      fab: true
    }
  },
  components: {
    Breadcrumb
  }
}
</script>
<style lang="scss" scoped>
@import '~@/sass/variables';

.table-header {
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;

  button.add__btn {
    .v-icon {
      color: $white;
      font-size: 24px;
    }
  }
}

@media only screen and (max-width: 480px) {
  .table-header {
    button.add__btn.v-btn.v-btn--floating.v-btn--small {
      height: 30px;
      width: 30px;
    }
  }
}
</style>
