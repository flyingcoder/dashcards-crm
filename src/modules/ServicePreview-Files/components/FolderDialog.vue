<template>
  <div class="folder-dialog">
    <CustomDialog
      ref="dialog"
      :open.sync="dialog"
      title="Create Folder"
      button1-text="Cancel"
      @button1="close_dialog"
      button2-text="Save"
      @button2="saveClicked"
    >
      <template #content>
        <v-layout wrap class="custom-dialog">
          <v-flex xs12 md12>
            <v-text-field
              label="Folder Name"
              v-model.trim="name"
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
  name: 'FolderDialog',
  components: {
    CustomDialog
  },
  data: () => ({
    dialog: false,
    name: null
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
      this.dialog = false
      this.$event.$emit('btnloading_off', false)
    },
    saveClicked() {
      if (!this.name) return
      this.$emit('save', { name: this.name })
    }
  }
}
</script>
