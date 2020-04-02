import _cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
import makeRequestTo from '@/services/makeRequestTo'
import * as apiTo from '@/modules/Calendar/api'
//components
import TextField from '@/common/BaseComponents/TextField.vue'
export default {
  name: 'EventTypeDialog',
  components : {
    TextField
  },
  props: {
    dialogTitle: { type : String, default : 'Add New Event Type'},
    calendar: { type: Object, default: () => {} },
  },

  data: () => ({
		dialog: false,
    btnloading: false,
		name: '',
    theme : 'blue',
    is_private : false,
    colors: [
      `gray`, `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `indigo`, `purple`, `pink`
    ]
	}),
  computed: {
    disabled() {
      if (!this.name) {
        return true
      }
      return false
    }
  },
  filters : {
    capitalizeFirst: (s) => {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  }, 
  methods: {
  	openDialog() {
  		this.dialog = true
  	},
		save() {
      this.btnloading = true
			var payload = {
        name : this.name,
        is_public : !this.is_private,
        color : this.theme
			}
			apiTo.addNewEventType(payload)
			.then(({data}) => {
				this.$emit('new-event-type-added', data)
        this.$event.$emit('open_snackbar', 'Event type successfully added!')
        this.clear_and_close()
			})
      .finally(() => {
        this.btnloading = false
      })
    },
    clear_and_close() {
      this.dialog = false
    }
  }
}