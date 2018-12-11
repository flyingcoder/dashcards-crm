<template>
	<v-layout row justify-center>
		<v-dialog v-model="open" persistent scrollable max-width="600px">
			<v-card>

				<v-card-title>
					<v-layout row align-center>
						<v-flex xs10>
							<span>{{ title }}</span>
						</v-flex>
						<v-flex xs2 class="text-xs-right">
							<v-btn small fab @click="cancel">
								<v-icon dark>close</v-icon>
							</v-btn>
						</v-flex>
					</v-layout>
				</v-card-title>

				<v-card-text scrollable>
					<members-dropdown :members.sync="members.selected"
					                    :member-items="members.items"
					                    @items-updated="items_updated"
				/>
				</v-card-text>

				<v-card-actions class="service__actions">
					<v-btn @click="save">Save</v-btn>
				</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script>
import MembersDropdown from '@/modules/Projects/components/MembersDropdown/MembersDropdown.vue'
export default {
  name: 'AddDialog',
  components: {
    MembersDropdown
  },
  props: {
    dialog: Boolean,
    title: String,
    allMembers: Array
  },

  data: () => ({
    open: false,
    name: '',
    members: {
      selected: [],
      items: []
    }
  }),

  watch: {
    dialog(new_val) {
      this.open = new_val
    },
    open(new_val) {
      this.$emit('update:dialog', new_val)
    }
  },

  methods: {
    cancel() {
      this.open = false
    },
    save() {
      this.$emit('save', this.members.selected)
    },
    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel() //close the modal
    },
    items_updated(new_members) {
      this.members.items = new_members.filter(
        new_member =>
          !this.allMembers.find(member => member.id === new_member.id)
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.add-dialog {
}
</style>
