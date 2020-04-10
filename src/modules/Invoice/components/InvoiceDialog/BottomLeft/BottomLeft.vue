<template>
  <div class="left-side">
    <div class="notes" v-show="!isEmptyField(dialog.type === 'view', notes)">
      <div class="field__label">Notes</div>
      <v-textarea
        label="Notes - any revelant information not already covered"
        :value="notes"
        :disabled="dialog.type === 'view'"
        class="textarea__field"
        flat
        solo
        dense
        outlined
        :rows="2"
        hide-details
        color="#657186"
        @input="update_textarea($event, 'notes')"
      />
    </div>
    <div class="Terms" v-show="!isEmptyField(dialog.type === 'view', terms)">
      <div class="field__label">Terms</div>
      <v-textarea
        label="Terms and conditions - late fees, payment methods, delivery schedule"
        :value="terms"
        :disabled="dialog.type === 'view'"
        class="textarea__field"
        flat
        solo
        dense
        outlined
        :rows="2"
        hide-details
        color="#657186"
        @input="update_textarea($event, 'terms')"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({}),

  computed: {
    ...mapGetters('invoice', ['notes', 'terms', 'dialog'])
  },

  methods: {
    update_textarea(new_val, field) {
      this.$store.commit('invoice/set_textarea', { new_val, field })
    },
    isEmptyField(view, value) {
      if (view) {
        if (!value) {
          return true
        }
      }
    }
  }
}
</script>

<style scoped>
>>> .theme--light.v-input--is-disabled .v-label,
>>> .theme--light.v-input--is-disabled input,
>>> .theme--light.v-input--is-disabled textarea {
  color: #657186;
}
>>> .theme--light.v-select .v-chip--disabled,
>>> .theme--light.v-select.v-input--is-disabled .v-select__selections,
>>> .theme--light.v-select .v-select__selection--disabled {
  color: #657186;
}
>>> .theme--light.v-input:not(.v-input--is-disabled) input,
>>> .theme--light.v-input:not(.v-input--is-disabled) textarea {
  color: #657186;
}
</style>

<style lang="scss" scoped>
@import '~@/sass/_variables';

.left-side {
  .field__label {
    background-color: $fieldLabel;
    border: 1px solid $fieldLabel;
    color: $textDark;
    font-size: 16px;
    font-weight: 500;
    padding: 6px 8px;
    margin-bottom: 5px;
  }
  .textarea__field {
    margin-bottom: 5px;
  }
}

@media only screen and (max-width: 599px) {
  .left-side {
    .field__label {
      font-size: 12px;
      padding: 4px 6px;
    }
  }
}
</style>
