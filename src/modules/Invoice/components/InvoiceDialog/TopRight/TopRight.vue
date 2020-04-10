<template>
  <v-row wrap class="right__side">
    <v-col md="12" v-if="!(dialog.type === 'create')">
      <div class="field__label">Invoice ID:</div>
      <v-text-field
        :disabled="dialog.type === 'view' || dialog.type === 'edit'"
        class="textfield"
        color="#657186"
        solo
        hide-details
        flat
        placeholder="#"
        :value="`#INV-`+invoice_id"
      ></v-text-field>
    </v-col>
    
    <v-col md="12">
      <div class="field__label">Invoice Title:</div>
      <v-text-field
        class="titlefield"
        color="#657186"
        solo
        hide-details
        flat
        dense
        outlined
        placeholder="Add Invoice Title *"
        v-model.trim="title"
      ></v-text-field>
    </v-col>

    <v-col md="12">
      <div class="field__label">
        {{ dialog.type === 'view' ? 'Type:' : 'Select Type:' }}
      </div>
      <v-select
        :disabled="dialog.type === 'view'"
        solo
        outlined
        full-width
        dense
        hide-details
        color="#657186"
        flat
        :items="['hourly', 'monthly']"
        v-model="type"
        placeholder="Select Invoice Type"
      ></v-select>
    </v-col>

    <v-col md="12" v-if="type === 'hourly'">
      <div class="field__label">
        {{ dialog.type === 'view' ? 'Project:' : 'Select Project:' }}
      </div>
      <v-select
        :disabled="dialog.type === 'view'"
        solo
        hide-details
        color="#657186"
        flat
        full-width
        outlined
        dense
        :items="projects"
        :value="selected_project"
        @change="setBillingTargets"
        item-text="title"
        item-value="id"
        placeholder="Select Project"
      ></v-select>
    </v-col>

      <v-col md="12">
        <div class="field__label">
          Invoice Date:<span class="required">*</span>
        </div>

        <v-text-field
          v-if="dialog.type === 'view'"
          :value="date"
          class="textfield"
          flat
          solo
          dense
          outlined
          hide-details
          color="#657186"
          disabled
        ></v-text-field>

        <date-picker
          v-else
          class="textfield"
          solo
          outlined
          hide-details
          color="#657186"
          flat
          dense
          placeholder="Select Date"
          :value="date"
          :max="due_date"
          @input="update_date({ date: $event, field: 'date' })"
        />
      </v-col>

      <v-col md="12">
        <div class="field__label">Due Date:<span class="required">*</span></div>

        <v-text-field
          v-if="dialog.type === 'view'"
          :value="due_date"
          class="textfield"
          flat
          solo
          outlined
          hide-details
          color="#657186"
          disabled
        ></v-text-field>

        <date-picker
          v-else
          class="textfield"
          dense
          outlined
          hide-details
          color="#657186"
          flat
          placeholder="Select Date"
          :value="due_date"
          :min="date"
          @input="update_date({ date: $event, field: 'due_date' })"
        />
      </v-col>
  </v-row>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
//Components
import DatePicker from '@/common/DatePicker.vue'

export default {
  components: {
    DatePicker
  },

  computed: {
    ...mapGetters('invoice', [
      'projects',
      'selected_project',
      'due_date',
      'date',
      'dialog',
      'invoice_id',
      'type'
    ]),
    
    type: {
      get() {
        return this.$store.getters['invoice/type']
      },
      set(newVal) {
        this.set_type(newVal)
      }
    },
    title: {
      get() {
        return this.$store.getters['invoice/title']
      },
      set(new_title) {
        this.$store.commit('invoice/set_title', new_title)
      }
    },
  },

  watch: {
    type(val) {
      if (val === 'monthly') {
        this.type_changed_to_monthly()
      }
    }
  },

  methods: {
    ...mapActions('invoice', ['type_changed_to_monthly']),

    ...mapMutations('invoice', [
      'init_date',
      'set_type',
      'set_selected_project',
      'update_date'
    ]),
    setBillingTargets(event){
      this.set_selected_project(event)
      // this.$event.$emit('')
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
>>> .theme--light.v-select .v-select__selections {
  color: #657186;
}
>>> .theme--light.v-input:not(.v-input--is-disabled) input,
>>> .theme--light.v-input:not(.v-input--is-disabled) textarea {
  color: #657186;
}
</style>

<style lang="scss" scoped>
@import '~@/sass/_variables';
.right__side {
  .required {
    color: red;
  }
  .invoice__title {
    color: $textDark;
    font-weight: 500;
    padding: 6px 8px;
    margin-bottom: 20px;
  }

  .field__label {
    width: 100%;
    background-color: $fieldLabel;
    border: 1px solid $fieldLabel;
    color: $textDark;
    font-size: 16px;
    font-weight: 500;
    padding: 6px 8px;
    margin-bottom: 2px;
  }
  .textfield {
    width: 300px;
    margin-bottom: 2px;
  }

  .invoice__dates {
    margin: 30px 0;
    .created__date,
    .due__date {
      display: grid;

      .field__label {
        display: flex;
        align-items: center;
        margin: 2px;
      }
      .datefield {
        margin: 2px;
      }
    }
  }
}
</style>
