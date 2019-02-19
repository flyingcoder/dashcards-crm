<template>
  <v-layout column align-end wrap class="right__side">
    <div class="invoice__title">
      <v-text-field
        class="titlefield"
        color="#657186"
        solo
        hide-details
        flat
        placeholder="Add Invoice Title"
        v-model.trim="title"
      ></v-text-field>
    </div>

    <div class="field" v-if="!(dialog.type === 'create')">
      <div class="field__label">Invoice ID</div>
      <v-text-field
        class="textfield"
        color="#657186"
        solo
        hide-details
        flat
        placeholder="#"
      ></v-text-field>
    </div>

    <div class="invoice__type field">
      <div class="field__label">Select Type</div>
      <v-select
        class="textfield"
        solo
        hide-details
        color="#657186"
        flat
        :items="['hourly', 'monthly']"
        v-model="type"
        placeholder="Select Invoice Type"
      ></v-select>
    </div>

    <div class="field" v-if="type === 'hourly'">
      <div class="field__label">Select Project</div>
      <v-select
        class="textfield"
        solo
        hide-details
        color="#657186"
        flat
        :items="projects"
        :value="selected_project"
        @change="set_selected_project($event)"
        item-text="title"
        item-value="id"
        placeholder="Select Project"
      ></v-select>
    </div>

    <div class="invoice__dates">
      <div class="created__date">
        <div class="field__label">Invoice Date:</div>

        <date-picker
          class="textfield"
          solo
          hide-details
          color="#657186"
          flat
          placeholder="Select Date"
          :value="date"
          :max="due_date"
          @input="update_date({ date: $event, field: 'date' })"
        />
      </div>

      <div class="due__date">
        <div class="field__label">Due Date:</div>
        <date-picker
          class="textfield"
          solo
          hide-details
          color="#657186"
          flat
          placeholder="Select Date"
          :value="due_date"
          :min="date"
          @input="update_date({ date: $event, field: 'due_date' })"
        />
      </div>
    </div>
  </v-layout>
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
    title: {
      get() {
        return this.$store.getters['invoice/title']
      },
      set(new_title) {
        this.$store.commit('invoice/set_title', new_title)
      }
    },
    type: {
      get() {
        return this.$store.getters['invoice/type']
      },
      set(newVal) {
        this.set_type(newVal)
      }
    }
  },

  watch: {
    type(val) {
      if (val === 'monthly') {
        this.type_changed_to_monthly()
      }
    },
  },

  methods: {
    ...mapActions('invoice', ['type_changed_to_monthly']),

    ...mapMutations('invoice', [
      'init_date',
      'set_type',
      'set_selected_project',
      'update_date'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';

.right__side {
  .invoice__title {
    .titlefield {
      margin-bottom: 40px;
    }
  }

  .field__label {
    width: 300px;
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
      display: flex;
      flex-direction: row;

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

@media only screen and (max-width: 1000px) {
  .right__side {
    .invoice__dates {
      .created__date,
      .due__date {
        flex-direction: column;

        .field__label {
          margin: 0 0 2px 0;
        }
        .datefield {
          margin: 0 0 2px 0;
        }
      }
    }
  }
}

@media only screen and (max-width: 690px) {
  .right__side {
    align-items: flex-start;

    .invoice__title {
      .titlefield {
        margin: 20px 0;
      }
    }
  }
}

@media only screen and (max-width: 599px) {
  .right__side {
    .field__label {
      font-size: 12px;
    }
  }
}
</style>
