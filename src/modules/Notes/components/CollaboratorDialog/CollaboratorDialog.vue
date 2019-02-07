<template>
  <div class="collaborator-dialog">
    <CustomDialog
      title="Collaborators"
      :open.sync="open"
      button2-text="Save"
      @button1="open = false"
      @button2="save"
    >
      <template #content>
        <v-layout wrap class="custom-dialog">
          <v-flex xs12>
            <UsersDropdown
              :members.sync="selected"
              :member-items="items"
              :is-loading="loading"
            />
          </v-flex>
        </v-layout>
      </template>
    </CustomDialog>
  </div>
</template>

<script>
import _cloneDeep from 'lodash/cloneDeep'
import { api_to } from '../../api'
//Components
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import UsersDropdown from '@/modules/Projects/components/MembersDropdown/MembersDropdown.vue'

export default {
  components: {
    CustomDialog,
    UsersDropdown
  },

  props: {
    dialog: Boolean,
    collaborators: Array
  },

  data: () => ({
    open: false,
    selected: [],
    items: [],
    loading: false
  }),

  watch: {
    open(new_val) {
      this.dialog !== new_val && this.$emit('update:dialog', new_val)
    },
    dialog(new_val) {
      this.open = new_val
      new_val && this.fetch_users()
    },
    collaborators(new_val) {
      const data = _cloneDeep(new_val)
      this.selected = data.map(item => item.id)
    }
  },

  methods: {
    fetch_users() {
      this.loading = true
      api_to
        .get_users()
        .then(({ data }) => (this.items = data))
        .finally(() => (this.loading = false))
    },

    save() {
      this.$emit('save', { users_id: this.selected })
      Object.assign(this.$data, this.$options.data.apply(this))
    }
  }
}
</script>
