<template>
  <custom-dialog ref="dialog" title="Add Link">
    <template slot="content">
      <div class="custom-dialog">
        <v-text-field
          class="dialog__link"
          pattern="https://.*"
          type="url"
          v-model.trim="link"
          prepend-icon="link"
          label="https://"
          clearable
          @keydown="validate_url"
          solo
          hide-details
          color="#657186"
        />
        <v-text-field
          v-model.trim="title"
          class="dialog__textfield"
          label="Title"
          solo
          clearable
          hide-details
          prepend-icon="text_fields"
          color="#657186"
        />
      </div>
    </template>

    <template slot="button2">
      <div class="disable-btn">
        <v-btn @click="on_dialog_save" :disabled="is_disabled">Display</v-btn>
      </div>
    </template>
  </custom-dialog>
</template>

<script>
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  components: {
    CustomDialog
  },
  data: () => ({
    link: '',
    title: '',
    valid_url: false
  }),

  computed: {
    is_disabled() {
      return !this.link || !this.valid_url || !this.title
    },
  },

  methods: {
    open_dialog() {
      this.$refs.dialog.open_dialog()
    },
    validate_url(event) {
      this.$nextTick(() => {
        this.valid_url = event.target.validity.valid
      })
    },
    on_dialog_save() {
      this.$refs.dialog.close_dialog()
      this.$store.commit('set_custom_loader', true)
      this.$emit('update-iframe', this.link)
    },
    get_payload() {
      return {
        url: this.link,
        title: this.title
      }
    },
    refresh_payload() {
      this.link = ''
      this.title = ''
    }
  }
}
</script>
