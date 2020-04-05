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
    btnloading2: false,
		name: '',
    theme : 'blue',
    dropdown_color : [
      `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `indigo`, `purple`, `pink`
    ],
    to_be_added : []
	}),
  computed: {
    disabled() {
      if (this.to_be_added.length <= 0) {
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
        types : this.to_be_added
			}
			apiTo.addNewEventType(payload)
			.then(({data}) => {
				this.$emit('new-event-type-added', data)
        this.$event.$emit('open_snackbar', 'Event types successfully added!')
        this.clear_and_close()
			})
      .finally(() => {
        this.btnloading = false
      })
    },
    clear_and_close() {
      this.to_be_added = []
      this.dialog = false
    },
    add(){
      if (!this.name || !this.theme) return

      this.btnloading2 = true
      var type = { 
        name : this.name,
        color: this.theme
      }
      this.to_be_added.push(type)
      this.name = ''
      this.btnloading2 = false
    },
    remove(index){
      this.btnloading2 = true
      this.to_be_added.splice(index, 1)
      this.btnloading2 = false
    }
  }
}
