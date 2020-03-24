<template>
  <div class="edit-note-dialog">
    <CustomDialog
      title="Edit Note"
      v-model="showEditDialog"
      button2-text="Save"
      @button1="cancel"
      @button2="update"
    >
      <template #content>
        <v-layout wrap class="custom-dialog" v-if="fieldsToEdit">
          <v-flex xs12>
            <v-text-field
              v-model.trim="fieldsToEdit.title"
              label="Edit Title"
              class="dialog__textfield d-field"
              color="#667187"
              box
              hide-details
            >
            </v-text-field>
          </v-flex>

          <v-flex xs12>
            <rich-editor
              placeholder="Description"
              v-model.trim="fieldsToEdit.content"
              class="note-description"
            />
          </v-flex>
        </v-layout>
      </template>
    </CustomDialog>
  </div>
</template>

<script>
import RichEditor from '@/common/RichEditor.vue'
import request from '@/services/axios_instance'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  components: {
    RichEditor,
    CustomDialog
  },

  props: {
    value: Boolean,
    fieldsToEdit: Object
  },

  computed: {
    showEditDialog: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  },

  methods: {
    cancel() {
      this.showEditDialog = null
    },
    update() {
      this.$emit('update', this.fieldsToEdit)
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/sass/_variables';
.note-description {
  border-radius: 8px;
  border: none;
  background-color: $white;
  margin: 0 5px;
}
</style>
