<template>
  <div class="dialog">
    <v-toolbar dark color="#3b589e" height="60">
      <v-toolbar-title class="dialog-title">{{
        toolbar.title
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="dialog-send">
        <v-btn :disabled="!can_create_invoice" dark flat @click="save_invoice"
          >Submit</v-btn
        >
        <v-btn icon dark @click="close_dialog">
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { api_to } from '../api'

export default {
  computed: {
    ...mapGetters('invoice', [
      'toolbar',
      'can_create_invoice',
      'dialog',
      'invoice'
    ])
  },
  methods: {
    ...mapMutations('invoice', ['set_dialog', 'revert_invoice']),
    save_invoice() {
      if (!this.can_create_invoice) return
      api_to
        .save_invoice(this.get_invoice())
        .then(({ data }) => this.$emit('created', data))
        .finally(() => {
          this.$store.commit('invoice/reset_state')
        })
    },

    get_invoice() {
      let formData = new FormData()
      formData.append('company_logo', this.invoice.company_logo)
      formData.append('project_id', this.invoice.selected_project || 0)
      formData.append('type', this.invoice.type)
      formData.append('title', this.invoice.title)
      formData.append('billed_to', this.invoice.billed_to)
      formData.append('billed_from', this.invoice.billed_from)
      formData.append('date', this.invoice.date)
      formData.append('due_date', this.invoice.due_date)
      formData.append('total_amount', this.invoice.total_amount)
      formData.append('items', JSON.stringify(this.invoice.rows))
      formData.append('terms', this.invoice.terms)
      formData.append('notes', this.invoice.notes)
      formData.append('tax', this.calculate_field(this.invoice, 'tax'))
      formData.append(
        'discount',
        this.calculate_field(this.invoice, 'discount')
      )
      formData.append(
        'shipping',
        this.calculate_field(this.invoice, 'shipping', false)
      )
      return formData
    },

    calculate_field(state, field, has_symbol = true) {
      if (state[field].show && has_symbol)
        return {
          value: state[field].value,
          symbol: state[field].symbol
        }
      if (state[field].show && !has_symbol)
        return {
          value: state[field].value
        }
      return 0
    },

    close_dialog() {
      if (this.dialog.type === 'edit') this.revert_invoice()
      this.set_dialog({ type: null, open: false })
    }
  }
}
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 599px) {
  .dialog-title {
    font-size: 16px;
  }

  .dialog-send {
    .v-btn {
      font-size: 12px;
    }
  }
}
</style>
