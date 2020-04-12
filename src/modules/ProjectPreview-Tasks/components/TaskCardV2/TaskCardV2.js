import { list_functionality } from '@/services/list-functionality/list-functionality'
import { global_utils } from '@/global_utils/global_utils'
import { mapActions, mapMutations } from 'vuex'

import TaskChips from '@/common/TasksCard/TaskChips.vue'

export default {
	name: 'TaskCardV2',
	mixins: [list_functionality, global_utils],
  props: { id: [Number, String], dashboard: Boolean },
	components : {
		TaskChips
	},

	data: () => ({
    dropdown_actions: [
      { id: 1, text: 'Edit', value: 'edit' },
      { id: 2, text: 'Delete', value: 'delete' }
    ]
  }),

  methods: {
    ...mapActions('taskCards', ['see_more', 'get_tasks']),
    ...mapMutations('taskCards', ['set_id']),
    loadMore() {
      this.see_more()
    }
  },

  created() {
    if (this.id) this.set_id(this.id)
  }
}