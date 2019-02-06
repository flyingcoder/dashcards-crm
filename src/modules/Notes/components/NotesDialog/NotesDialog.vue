<template>
  <div class="notes-dialog">
    <CustomDialog
      title="Add Notes"
      :open.sync="open"
      button2-text="Save"
      @button1="open = false"
      @button2="save"
    >
      <template #content>
        <v-layout wrap class="custom-dialog">
          <v-flex xs12>
            <v-text-field
              v-model.trim="payload.title"
              label="Add Title"
              class="project__title mb-2"
              solo
              hide-details
            >
            </v-text-field>
          </v-flex>

          <v-flex xs12>
            <rich-editor
              placeholder="Description"
              v-model.trim="payload.content"
              class="task-description"
            />
          </v-flex>
        </v-layout>
      </template>
    </CustomDialog>
  </div>
</template>

<script>
import RichEditor from '@/common/RichEditor.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
export default {
  components: {
    RichEditor,
    CustomDialog
  },

  props: {
    dialog: Boolean
  },

  data: () => ({
    open: false,
    payload: {
      title: null,
      content: null
    }
  }),

  watch: {
    open(new_val) {
      this.dialog !== new_val && this.$emit('update:dialog', new_val)
    },
    dialog(new_val) {
      this.open = new_val
    }
  },

  methods: {
    save() {
      this.$emit('save', this.payload)
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  }
}
</script>
