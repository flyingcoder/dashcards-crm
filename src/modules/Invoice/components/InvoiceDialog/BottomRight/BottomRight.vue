<template>
  <div class="right-side">
    <h3 class="subtotal">Subtotal: {{ subtotal }} $</h3>

    <field
      title="Tax"
      symbol-type="tax_symbol"
      :symbol="tax.symbol"
      :value="tax.value"
      :classes="['tax', 'field']"
      :show="tax.show"
      :disabled="dialog.type === 'view'"
      @input="set_field({ new_val: $event, field: 'tax' })"
      @toggle-symbol="toggle_symbol('tax')"
      @toggle_visibility="toggle_visibility({ new_val: $event, field: 'tax' })"
    />

    <field
      title="Discount"
      symbol-type="discount_symbol"
      :symbol="discount.symbol"
      :value="discount.value"
      :classes="['discount', 'field']"
      :show="discount.show"
      :readonly="dialog.type === 'view'"
      @input="set_field({ new_val: $event, field: 'discount' })"
      @toggle-symbol="toggle_symbol('discount')"
      @toggle_visibility="
        toggle_visibility({ new_val: $event, field: 'discount' })
      "
    />

    <field
      no-symbol
      title="Shipping"
      :value="shipping.value"
      :classes="['shipping', 'field']"
      :show="shipping.show"
      :readolny="dialog.type === 'view'"
      @input="set_field({ new_val: $event, field: 'shipping' })"
      @toggle_visibility="
        toggle_visibility({ new_val: $event, field: 'shipping' })
      "
    />

    <div class="fields-to-add" v-if="dialog.type !== 'view'">
      <v-btn
        class="btn"
        color="#3b589e"
        dark
        v-show="!discount.show"
        @click="
          toggle_visibility({ new_val: !discount.show, field: 'discount' })
        "
      >
        <v-icon>add</v-icon>
        Discount
      </v-btn>
      <v-btn
        class="btn"
        color="#3b589e"
        dark
        v-show="!tax.show"
        @click="toggle_visibility({ new_val: !tax.show, field: 'tax' })"
      >
        <v-icon>add</v-icon>
        Tax
      </v-btn>
      <v-btn
        class="btn"
        color="#3b589e"
        dark
        v-show="!shipping.show"
        @click="
          toggle_visibility({ new_val: !shipping.show, field: 'shipping' })
        "
      >
        <v-icon>add</v-icon>
        Shipping
      </v-btn>
    </div>

    <h2 class="total">Total: {{ total }} $</h2>
  </div>
</template>

<script>
import Field from './Field'
import { mapGetters, mapMutations } from 'vuex'

export default {
  components: {
    Field
  },

  computed: {
    ...mapGetters('invoice', ['rows', 'tax', 'discount', 'shipping', 'dialog']),
    subtotal() {
      if (!this.rows.length) return '0'
      return this.rows.reduce((acc, cur) => {
        return (acc += cur.amount)
      }, 0)
    },
    total() {
      let total = Number(this.subtotal)
      if (this.discount.show) {
        if (this.discount.symbol === '%') {
          total -= Number((this.subtotal * this.discount.value) / 100)
        } else {
          total -= Number(this.discount.value)
        }
      }
      if (this.tax.show) {
        if (this.tax.symbol === '%') {
          total += Number((this.subtotal * this.tax.value) / 100)
        } else {
          total += Number(this.tax.value)
        }
      }
      if (this.shipping.show) {
        total += Number(this.shipping.value)
      }
      return total
    }
  },

  watch: {
    total(val) {
      this.$store.commit('invoice/set_total_amount', val)
    }
  },

  methods: {
    ...mapMutations('invoice', [
      'toggle_visibility',
      'set_field',
      'toggle_symbol'
    ])
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
</style>

<style lang="scss" scoped>
@import '~@/sass/_variables';

.right-side {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .subtotal {
    color: $textDark;
    margin-bottom: 10px;
  }

  .fields-to-add {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
  }

  .total {
    color: $textDark;
  }
}

@media only screen and (max-width: 599px) {
  .right-side {
    .fields-to-add {
      padding: 5px;

      .v-btn {
        font-size: 12px;
        padding: 0 10px;
      }

      .v-icon {
        font-size: 18px;
      }
    }
  }
}
</style>
