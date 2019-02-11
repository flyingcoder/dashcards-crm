<template>
  <div class="left-side">
    <div class="notes">
      <div class="field__label">Notes</div>
      <v-textarea
        label="Notes - any revelant information not already covered"
        :value="notes"
        class="textarea__field"
        flat
        solo
        hide-details
        color="#657186"
        @input="update_textarea($event, 'notes')"
      />
    </div>
    <div class="Terms">
      <div class="field__label">Terms</div>
      <v-textarea
        label="Terms and conditions - late fees, payment methods, delivery schedule"
        :value="terms"
        class="textarea__field"
        flat
        solo
        hide-details
        color="#657186"
        @input="update_textarea($event, 'terms')"
      />
    </div>
  </div>
</template>

<script src="./LeftSide.js"></script>

<style lang="scss" scoped src="./LeftSide.scss"></style>

<style scoped src="./LeftSide.css"></style>
