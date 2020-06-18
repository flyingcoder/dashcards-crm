<template>
  <div class="link-dialog">
    <CustomDialog
      ref="dialog"
      :open.sync="dialog"
      title="File URL"
      button1-text="Cancel"
      @button1="close_dialog"
      button2-text="Save"
      @button2="saveClicked"
    >
      <template #content>
        <v-layout wrap class="custom-dialog">
          <v-flex xs12 md12>
            <v-text-field
              label="File URL"
              v-model.trim="url"
              type="url"
              solo
              hide-details
              color="#657186"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </template>
    </CustomDialog>
  </div>
</template>

<script>
// Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
export default {
  components: {
    CustomDialog
  },
  data: () => ({
    dialog: false,
    url: null
  }),
  methods: {
    openDialog() {
      this.dialog = true
    },
    close_dialog() {
      this.dialog = false
    },
    closeAndClearDialog() {
      Object.assign(this.$data, this.$options.data.apply(this))
    },
    saveClicked() {
      if (!this.url) return
      this.$emit('save', { url: this.url })
    }
  }
}
</script>
