<template>
  <div>
    <custom-dialog
      :title="title"
      :content="textContent"
      :button1-text="cancelButtonText"
      :button2-text="deleteButtonText"
      :open.sync="open"
      @button1="cancel_clicked"
      @button2="delete_clicked"
    ></custom-dialog>
  </div>
</template>

<script>
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
export default {
  components: {
    CustomDialog
  },

  props: {
    title: { type: String, default: 'Default Modal Title' },
    textContent: { type: String, default: 'Default Modal Text Content' },
    cancelButtonText: { type: String, default: 'Cancel' },
    deleteButtonText: { type: String, default: 'Delete' },
    openDialog: Boolean
  },

  data: () => ({
    open: false
  }),

  watch: {
    openDialog(val) {
      this.open = val
    },
    open(val) {
      this.$emit('update:openDialog', val)
    }
  },

  methods: {
    cancel_clicked() {
      this.open = false
    },
    delete_clicked() {
      this.$emit('delete')
    },
    showDialog(){
      this.open = true
    },
    closeDialog(){
      this.open = false
    }
  }
}
</script>
