<template>
  <div class="questionnaire">
    <table-header :paths="paths" :noButton="true" />
  </div>
</template>

<script src="./Questionnaire.js"></script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

@include pagePadding('.questionnaire');
</style>
