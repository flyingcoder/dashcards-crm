<template>
  <v-layout wrap class="table-header">
    <breadcrumb :paths="paths" />
    
    <v-flex>
      <v-btn v-if="!noButton" fab small class="add__btn mr-2" @click="$emit('click')">
        <v-icon>add</v-icon>
      </v-btn>
      <v-btn v-if="!noSortButton" fab small class="add__btn mr-2" @click="$emit('click-sort-by')">
        <v-icon>sort</v-icon>
      </v-btn>
      <v-btn v-if="!noListButton" fab small class="add__btn mr-2" @click="$emit('click-list-view')">
        <v-icon>list</v-icon>
      </v-btn>
      <v-btn v-if="!noGridButton" fab small class="add__btn mr-2" @click="$emit('click-grid-view')">
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
      <slot name="form-btn" />
    </v-flex>
  </v-layout>
</template>

<script>
import Breadcrumb from '@/common/Breadcrumb.vue'

export default {
  name: 'TableHeader',
  props: {
    paths: { type :Array, default : [] },
    noButton: { type : Boolean, default : false },
    noListButton: { type : Boolean, default : true },
    noGridButton: { type : Boolean, default : true },
    noSortButton: { type : Boolean, default : true },
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
