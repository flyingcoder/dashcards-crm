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
      @input="set_field({ new_val: $event, field: 'shipping' })"
      @toggle_visibility="
        toggle_visibility({ new_val: $event, field: 'shipping' })
      "
    />

    <div class="fields-to-add">
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

<script src="./RightSide.js">
</script>
<style lang="scss" scoped src="./RightSide.scss">
</style>
