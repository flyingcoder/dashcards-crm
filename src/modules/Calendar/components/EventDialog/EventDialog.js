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
import MembersPicker from '@/common/MembersPicker.vue'
import DatePicker from '@/common/DatePickerV2.vue'
import TimePicker from '@/common/TimePicker.vue'
import RichEditor from '@/common/RichEditor.vue'

export default {
  name: 'EventDialog',
  components: {
    RichEditor,
    DatePickers,
    MembersDropdown,
    TextField,
    TextArea,
    MembersPicker,
    DatePicker,
    TimePicker
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
    start_date: null,
    end_date: null,
    btnloading: false,
    members: {
      all_items: [],
      items: [],
      selected: []
    },
    notify: false,
    all_day: true,
    timezone: '',
    description: '',
    event_type: null,
    dialogKey: 0,
    time: null
  }),
  computed: {
    disabled() {
      if (
        !this.description ||
        !this.event_type ||
        !this.title ||
        !this.start_date ||
        !this.time
      ) {
        return true
      }
      return false
    }
  },
  filters: {
    readableFormat(val) {
      return moment(val).format('MMMM D YYYY')
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
      this.timezone = moment.tz.guess()

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
          this.time = this.fieldsToEdit.properties.time || null
          this.alarm = this.fieldsToEdit.properties.alarm || false
        }
      }, 1)
    },
    save() {
      this.btnloading = true
      var payload = {
        title: this.title,
        notify: this.notify,
        start_date: moment(`${this.start_date} ${this.time.his}`).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        end_date: moment(`${this.start_date} ${this.time.his}`).format(
          'YYYY-MM-DD HH:mm:ss'
        ),
        timezone: this.timezone,
        all_day: this.all_day,
        description: this.description,
        event_type: this.event_type.id,
        alarm: this.time.alarm,
        time: this.time
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
