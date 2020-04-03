import _cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import moment from 'moment'
import makeRequestTo from '@/services/makeRequestTo'
import * as apiTo from '@/modules/Calendar/api'
//components
import TextField from '@/common/BaseComponents/TextField.vue'
import TextArea from '@/common/BaseComponents/TextArea.vue'
import DatePickers from '@/modules/Projects/components/DatePickers/DatePickers.vue' //used for Due Date field
import MembersDropdown from '@/modules/Projects/components/MembersDropdown/MembersDropdown.vue'

export default {
  name: 'EventDialog',
  components: {
    DatePickers,
    MembersDropdown,
    TextField,
    TextArea
  },

  props: {
    dialogTitle: { type: String, default: 'Add New Event' },
    isEditDialog: { type: Boolean, default: false },
    fieldsToEdit: { type: Object, default: () => {} },
    calendar: { type: Object, default: () => {} }
  },

  data: () => ({
    dialog: false,
    title: '',
    rangemenu: true,
    dates: [],
    nullDatetime: null,
    currentDateTime: moment().format('YYYY-MM-DD HH:mm'),
    start_date: moment().format('YYYY-MM-DD HH:mm A'),
    end_date: moment().format('YYYY-MM-DD HH:mm A'),
    btnloading: false,
    members: {
      all_items: [],
      items: [],
      selected: []
    },
    notify: false,
    all_day: false,
    timezone: '',
    description: '',
    event_type: null,
    dialogKey: 0,
    createDateFormat: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }
  }),
  computed: {
    disabled() {
      if (
        !this.all_day &&
        (!this.description ||
          !this.event_type ||
          !this.title ||
          !this.start_date ||
          !this.end_date)
      ) {
        return true
      }
      if (
        this.all_day &&
        (!this.description ||
          !this.event_type ||
          !this.title ||
          !this.start_date)
      ) {
        return true
      }
      return false
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
      this.timezone = moment.tz.guess()
      this.get_members()

      setTimeout(() => {
        if (this.isEditDialog && this.fieldsToEdit) {
          this.all_day = this.fieldsToEdit.all_day
          this.start_date = this.fieldsToEdit.start
          this.end_date = this.fieldsToEdit.end
          this.event_type = this.fieldsToEdit.event_type
          this.description = this.fieldsToEdit.description
          this.notify = this.fieldsToEdit.properties.send_notify
          this.timezone = this.fieldsToEdit.properties.timezone
          this.title = this.fieldsToEdit.title
          this.members.selected = this.fieldsToEdit.participants.map(item => {
            return item.user
          })
        }
      }, 1)
    },
    save() {
      this.btnloading = true
      var payload = {
        title: this.title,
        notify: this.notify,
        start_date: moment(this.start_date).format('YYYY-MM-DD HH:mm:ss'),
        end_date: moment(
          !this.all_day ? this.end_date : this.start_date
        ).format('YYYY-MM-DD HH:mm:ss'),
        timezone: this.timezone,
        all_day: this.all_day,
        description: this.description,
        event_type: this.event_type.id
      }

      if (this.members.selected.length > 0) {
        payload.participants = this.members.selected.map(o => {
          return o.id
        })
      }

      if (this.isEditDialog && this.fieldsToEdit) {
        this.sendUpdateEvent(payload)
      } else {
        this.sendAddNewEvent(payload)
      }
    },
    sendUpdateEvent(payload) {
      apiTo
        .updateEvent(this.fieldsToEdit.id, payload)
        .then(({ data }) => {
          this.$emit('event-updated', data)
          this.$event.$emit('open_snackbar', 'Event successfully updated!')
        })
        .finally(() => {
          this.btnloading = false
          this.clear_and_close()
        })
    },
    sendAddNewEvent(payload) {
      apiTo
        .addNewEvent(payload)
        .then(({ data }) => {
          this.$emit('new-event-added', data)
          this.$event.$emit('open_snackbar', 'Event successfully added!')
        })
        .finally(() => {
          this.btnloading = false
          this.clear_and_close()
        })
    },
    clear_and_close() {
      this.title = this.description = ''
      this.dialogKey += 1
      this.dialog = false
    },
    get_members() {
      this.dropdown_loading = true
      makeRequestTo
        .getAllMembers()
        .then(({ data }) => {
          this.members.all_items = data || []
          // this.members.selected = []
          this.members.items = _cloneDeep(this.members.all_items)
        })
        .finally(() => (this.dropdown_loading = false))
    },
    add_to_selected_members(item, indexs) {
      let index = this.members.selected.findIndex(user => user.id === item.id)
      if (index === -1) {
        this.members.selected.push(item)
        this.members.items.splice(indexs, 1)
      }
    },
    remove_from_selected_members(item) {
      let index = this.members.selected.findIndex(user => user.id === item.id)
      if (~index) {
        this.members.selected.splice(index, 1)
        this.members.items.unshift(item)
      }
    },
    clearable(item) {
      if (!this.isEditDialog) {
        return true
      }
      if (item.id === this.fieldsToEdit.properties.creator) {
        return false
      }
      return true
    }
  }
}
