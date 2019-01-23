<template>
	<div class="add-picture">
		<CustomDialog
				:open.sync="dialog"
				title="Upload New Profile Picture"
		>


			<template slot="entire-actions">
				<span></span> <!-- for removing the actions from the dialog -->
			</template>

		</CustomDialog>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
  components: {
    CustomDialog
  },
  computed: {
    ...mapGetters('memberProfile', ['picture_dialog_is_open']),

    dialog: {
      get() {
        return this.picture_dialog_is_open
      },
      set(val) {
        this.set_picture_dialog(val)
      }
    }
  },

  methods: {
    ...mapMutations('memberProfile', ['set_picture_dialog'])
  }
}
</script>

<style scoped>
</style>
