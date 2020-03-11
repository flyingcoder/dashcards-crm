<template functional>
  <div class="task__chips text-xs-center">
    <v-chip
      small
      :class="['task__chip', { active: props.activeChip === 'all' }]"
      @click="listeners['update:activeChip']('all')"
    >
      <v-avatar class="task__avatar">{{ props.countAll }}</v-avatar>
      All
    </v-chip>

    <v-chip
      small
      :class="['task__chip', { active: props.activeChip === 'completed' }]"
      @click="listeners['update:activeChip']('completed')"
    >
      <v-avatar class="task__avatar">{{ props.countCompleted }}</v-avatar>
      Done
    </v-chip>

    <v-chip
      small
      :class="['task__chip', { active: props.activeChip === 'pending' }]"
      @click="listeners['update:activeChip']('pending')"
    >
      <v-avatar class="task__avatar">{{ props.countPending }}</v-avatar>
      Pending
    </v-chip>

    <v-chip
      small
      :class="['task__chip', { active: props.activeChip === 'behind' }]"
      @click="listeners['update:activeChip']('behind')"
    >
      <v-avatar class="task__avatar">{{ props.countBehind }}</v-avatar>
      Behind
    </v-chip>
  </div>
</template>

<script>
export default {
  name: 'TaskChips',
  props: {
    countAll: Number,
    countCompleted: Number,
    countPending: Number,
    countBehind: Number,
    activeChip: String
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';
.task__chips {
  padding: 10px 0;
  border-bottom: 1px solid $borderGray;
  .theme--light.v-chip {
    background-color: $white;
    border: 1px solid $borderGray;
    font-size: 12px;
    font-weight: 500;
    color: $chipGray;
    z-index: 0;
  }
  .task__avatar {
    background-color: $chipGray;
    border-color: $chipGray;
    color: $white;
    font-size: 12px;
    font-weight: 500;
  }
  .task__chip.active {
    background-color: $chipDark;
    border-color: $chipDark;
    color: $white;
    .task__avatar {
      background-color: $chipBlue;
      border-color: $chipBlue;
    }
  }
}
</style>
<style scoped>
>>> .task__chip .v-chip__content {
  cursor: pointer;
}
</style>
