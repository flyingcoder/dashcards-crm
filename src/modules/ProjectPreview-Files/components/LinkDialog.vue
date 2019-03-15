<template>
  <div class="link-dialog">
    <CustomDialog ref="dialog" :open.sync="dialog" title="File URL">
      <template #content>
        <v-layout wrap class="custom-dialog">
          <v-flex xs12 md12>
            <v-text-field
              class="dialog__textfield"
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
    }
  }
}
</script>
