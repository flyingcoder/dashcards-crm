<template>
  <v-row wrap class="left__side">
    <v-col
      md="12"
      v-if="!(dialog.type === 'view' && !image_preview)"
      class="add__logo_box"
      @click="dialog.type !== 'view' && $refs.hidden_input.click()"
    >
      <img :src="image_preview" v-if="image_preview" class="image-preview" />
      <span class="text" v-else>+ Add Your Logo</span>
      <v-btn
        outlined
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
    </v-col>

    <v-col md="12">
      <div class="form__label">Bill From: <span class="required">*</span></div>
      <v-autocomplete
        v-model="billed_from"
        :items="members"
        chips
        item-text="fullname"
        item-value="id"
        solo
        full-width
        outlined
        flat
        dense
        :value="billed_from"
        prepend-inner-icon="mdi-account-plus"
        @click:prepend-inner="show_add_member_dialog('billed_from')"
      >
        <template v-slot:selection="data">
          <v-chip v-bind="data.attrs" tile outlined>
            <v-avatar left>
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            {{ data.item.fullname }}
          </v-chip>
        </template>
        <template v-slot:item="{ item }">
          <template>
            <v-list-item-avatar>
              <img :src="item.image_url" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.fullname"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.job_title"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>
    </v-col>

    <v-col md="12">
      <div class="form__label">Bill To: <span class="required">*</span></div>
      <v-autocomplete
        v-model="billed_to"
        :items="members"
        chips
        item-text="fullname"
        item-value="id"
        solo
        full-width
        outlined
        flat
        dense
        :value="billed_to"
        prepend-inner-icon="mdi-account-plus"
        @click:prepend-inner="show_add_member_dialog('billed_to')"
      >
        <template v-slot:selection="data">
          <v-chip v-bind="data.attrs" tile outlined>
            <v-avatar left>
              <v-icon>mdi-account-circle</v-icon>
            </v-avatar>
            {{ data.item.fullname }}
          </v-chip>
        </template>
        <template v-slot:item="{ item }">
          <template>
            <v-list-item-avatar>
              <img :src="item.image_url" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.fullname"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.job_title"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </template>
        </template>
      </v-autocomplete>
    </v-col>

    <teams-dialog
      ref="add_dialog"
      title="Add New Member"
      :dialog.sync="add_dialog"
      @save="add_member"
      @close-dialog="add_dialog = false"
    />
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from '@/services/axios_instance'
import makeRequestTo from '@/services/makeRequestTo'
import _cloneDeep from 'lodash/cloneDeep'

import TeamsDialog from '@/modules/Teams/components/TeamsDialog/TeamsDialog.vue'

export default {
  components: {
    TeamsDialog
  },
  data: () => ({
    image_preview: null,
    members: [],
    original: [],
    selected: 0,
    add_dialog: false,
    target_add: ''
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
  created() {
    setTimeout(() => {
      this.getMembers()
    }, 1)
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
        let formData = new FormData()
        formData.append('file', event.target.files[0])
        axios
          .post(`api/file/image-upload`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
          })
          .then(({ data }) => {
            this.$store.commit('invoice/set_company_logo', data.url)
          })
      }
    },
    setFrom(val) {
      this.billed_from = val
    },
    setTo(val) {
      this.billed_to = val
    },
    getMembers() {
      makeRequestTo.get_all_teams().then(({ data }) => {
        this.original = _cloneDeep(data)
        this.members = data
      })
    },
    show_add_member_dialog(target) {
      this.target_add = target
      this.add_dialog = true
    },
    add_member(payload) {
      makeRequestTo
        .add_new_team(payload)
        .then(({ data }) => {
          this.members.push(data)
          if (this.target_add === 'billed_from') {
            this.billed_from = data.id
          } else if (this.target_add === 'billed_to') {
            this.billed_to = data.id
          }
          this.$refs.add_dialog.clear_and_close()
        })
        .finally(() => {
          this.target_add = ''
          this.$event.$emit('btnloading_off', false)
        })
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

  .form__label {
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

  .required {
    color: red;
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
