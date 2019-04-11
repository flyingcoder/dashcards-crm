<template>
  <div class="project-details">
    <table-header :paths="paths" :noButton="true" />
  </div>
</template>

<script src="./ProjectDetails.js"></script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

@include pagePadding('.project-details');
</style>
