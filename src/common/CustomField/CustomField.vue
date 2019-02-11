<template>
  <div :class="[className, 'field']">
    <div class="v-icon">
      <img :src="imagePath" alt="" />
    </div>

    <input
      :type="inputType"
      :value="value"
      :class="{ invalid: !valid }"
      v-on="listeners"
      v-bind="$attrs"
    />
  </div>
</template>
<script src="./CustomFields.js"></script>
<style lang="scss" scoped src="./CustomField.scss"></style>
