<template>
  <div class="payment">
    <table-header :paths="paths" :noButton="true" />
  </div>
</template>

<script src="./Payment.js"></script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

@include pagePadding('.payment');
</style>
