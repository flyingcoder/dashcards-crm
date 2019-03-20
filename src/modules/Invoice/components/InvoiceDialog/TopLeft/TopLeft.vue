<template>
  <div class="left__side">
    <div
      v-if="!(dialog.type === 'view' && !image_preview)"
      class="add__logo_box"
      @click="dialog.type !== 'view' && $refs.hidden_input.click()"
    >
      <img :src="image_preview" v-if="image_preview" class="image-preview" />
      <span class="text" v-else>+ Add Your Logo</span>
      <v-btn
        outline
        class="button"
        v-show="image_preview && dialog.type !== 'view'"
        >Remove</v-btn
      >
      <input
        type="file"
        accept="image/*"
        ref="hidden_input"
        @change="file_selected"
        class="hidden-input"
      />
    </div>

    <div class="bill__from">
      <div class="form__label">Bill From:</div>
      <v-textarea
        :readonly="dialog.type === 'view'"
        class="textfield"
        label="Who is this invoice from"
        v-model="billed_from"
        solo
        hide-details
        color="#657186"
        flat
      ></v-textarea>
    </div>

    <div class="bill__to">
      <div class="form__label">Bill To:</div>
      <v-text-field
        :readonly="dialog.type === 'view'"
        class="textfield"
        label="Who is this invoice to"
        v-model="billed_to"
        solo
        hide-details
        color="#657186"
        flat
      ></v-text-field>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    image_preview: null
  }),

  computed: {
    ...mapGetters('invoice', ['company_logo', 'dialog']),
    billed_to: {
      get() {
        return this.$store.getters['invoice/billed_to']
      },
      set(newVal) {
        this.$store.commit('invoice/set_billed_to', newVal)
      }
    },

    billed_from: {
      get() {
        return this.$store.getters['invoice/billed_from']
      },
      set(newVal) {
        this.$store.commit('invoice/set_billed_from', newVal)
      }
    }
  },

  watch: {
    company_logo(val) {
      if (!val) {
        this.image_preview = null
        return
      }
      if (typeof val === 'object') {
        const reader = new FileReader()
        reader.onload = e => {
          this.image_preview = e.target.result
        }
        reader.readAsDataURL(val)
      } else {
        this.image_preview = val
      }
    }
  },

  methods: {
    file_selected(event) {
      if (event.target.files && event.target.files[0]) {
        this.$store.commit('invoice/set_company_logo', event.target.files[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/variables';

.left__side {
  .add__logo_box {
    position: relative;
    width: 200px;
    height: 150px;
    background-color: $bgLightBlue;
    border: 1px solid $borderLightGray;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: $textDark;
    margin-bottom: 20px;

    &:hover {
      cursor: pointer;
      background-color: $fieldLabel;

      > .button {
        display: block;
      }
    }
    .text,
    .button {
      position: absolute;
    }

    .button {
      display: none;
    }

    .image-preview {
      position: absolute;
      height: auto;
      width: auto;
      max-height: 150px;
      max-width: 200px;
    }

    .hidden-input {
      visibility: hidden;
    }
  }

  .bill__from,
  .bill__to {
    .form__label {
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
  }
}

@media only screen and (max-width: 599px) {
  .left__side {
    .add__logo_box {
      width: 120px;
      height: 100px;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .bill__from,
    .bill__to {
      width: 150px;
      margin-bottom: 10px;
      .form__label {
        font-size: 12px;
      }
    }
  }
}
</style>
