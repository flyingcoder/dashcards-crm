<template>
  <div :class="classes" v-show="show">
    <div class="field__label">{{ title }}</div>

    <v-text-field
      class="textfield"
      flat
      hide-details
      color="657186"
      solo
      type="number"
      min="0"
      :value="value"
      @input="$emit('input', $event)"
    >
      <v-tooltip class="toggle-btn" slot="prepend" bottom v-if="!noSymbol">
        <v-btn
          flat
          color="#657186"
          slot="activator"
          icon
          @click="$emit('toggle-symbol', symbolType)"
        >
          <v-icon>compare_arrows</v-icon>
        </v-btn>

        Toggle {{ title }}
      </v-tooltip>

      <template slot="append" v-if="!noSymbol">
        <span slot="activator">{{ symbol }}</span>
      </template>
    </v-text-field>

    <v-btn
      outlined
      color="#ff7f7c"
      icon
      @click="$emit('toggle_visibility', !show)"
    >
      <v-icon>delete</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    show: Boolean,
    classes: Array,
    value: [String, Number],
    symbol: String,
    symbolType: String,
    noSymbol: Boolean
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';

.field {
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 5px 0;

  .field__label {
    color: $textDark;
    font-size: 16px;
    font-weight: 500;
    margin: 0 5px;
  }

  .toggle-btn {
    margin: 0;
  }
}
</style>

<style scoped>
>>> .theme--light.v-input:not(.v-input--is-disabled) input,
>>> .theme--light.v-input:not(.v-input--is-disabled) textarea {
  color: #657186;
}
>>> .textfield .v-input__slot {
  background-color: #fbfcff;
  border: 1px solid #e8f1fa;
  font-size: 16px;
  font-weight: 500;
  color: ;
}
>>> .textfield .v-input__slot:hover {
  border: 1px solid #cce0f4;
}
>>> .v-text-field.v-text-field--solo .v-input__prepend-outer {
  margin: 0;
}
</style>
