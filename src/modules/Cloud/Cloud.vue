<template>
  <div class="cloud">
    <table-header :paths="paths" :noButton="true" />
  </div>
</template>

<script src="./Cloud.js"></script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

@include pagePadding('.cloud');
</style>
