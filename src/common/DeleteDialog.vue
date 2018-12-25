<template>
	<v-layout row justify-center>
		<v-dialog v-model="dialog" persistent max-width="500px">

			<v-card class="delete__dialog">

				<v-card-title class="dialog__header">
					<span class="dialog__title">{{ title }}</span>
					<v-btn fab small class="close__dialog" @click="cancel_clicked">
						<v-icon>close</v-icon>
					</v-btn>
				</v-card-title>

				<v-card-text class="dialog__body">
					{{ textContent }}
				</v-card-text>

				<v-card-actions class="dialog__actions">
					<v-btn @click="cancel_clicked">{{cancelButtonText}}</v-btn>
					<v-btn @click="delete_clicked">{{deleteButtonText}}</v-btn>
				</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
export default {
  name: 'DeleteModal',
  props: {
    title: { type: String, default: 'Default Modal Title' },
    textContent: { type: String, default: 'Default Modal Text Content' },
    cancelButtonText: { type: String, default: 'Cancel' },
    deleteButtonText: { type: String, default: 'Delete' },
    openDialog: Boolean
  },

  data: () => ({
    dialog: false
  }),

  watch: {
    openDialog(new_val) {
      this.dialog = new_val
    },
    dialog(new_val) {
      this.$emit('update:openDialog', new_val)
    }
  },

  methods: {
    cancel_clicked() {
      this.dialog = false
    },
    delete_clicked() {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/sass/_variables';

@include styledDialog('.delete__dialog');

.delete__dialog {
  .dialog__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding: 0;

    @include styledCloseDialog('.close__dialog');

    @include styledTitleDialog('.dialog__title');
  }

  @include styledScrollFor('.dialog__body');

  .dialog__body {
    color: $tableDarkText;
    font-size: 16px;
  }

  @include actionButtonsDialog('.dialog__actions');
}
</style>
