<template functional>
  <v-row no-gutters class="project__overview_row">
    <v-flex xs5 class="project__label">
      <v-flex class="project__label_icon">
        <svg viewBox="0 0 250 250">
          <path class="icon" :d="props.labelIcon" />
        </svg>
      </v-flex>
      <v-flex class="project__label_title">{{ props.col1 }}</v-flex>
    </v-flex>
    <v-flex xs7 class="project__value">{{ props.col2 }}</v-flex>
  </v-row>
</template>

<script>
export default {
  name: 'ProjectRow',
  functional: true,
  props: {
    labelIcon: String,
    col1: String,
    col2: [String, Number]
  }
}
</script>

<style lang="scss" scoped src="./ProjectRow.scss"></style>
