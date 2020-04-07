import makeRequestTo from '@/services/makeRequestTo'
//components
import TextField from '@/common/BaseComponents/TextField.vue'
import MembersPicker from '@/common/MembersPicker.vue'

export default {
  name: 'AddParticipantDialog',
  components: {
    TextField,
    MembersPicker
  },
  props: {
    dialogTitle: { type: String, default: 'Add New Participants' },
    event: { type: Object }
  },

  data: () => ({
    dialog: false,
    btnloading: false,
    to_be_added: []
  }),
  computed: {
    disabled() {
      if (this.to_be_added.length === 0) {
        return true
      }
      return false
    },
    loggeduser() {
      return this.$store.getters.user
    },
    user_participants() {
      return this.event.participants.map(ii => {
        return ii.user
      })
    }
  },
  methods: {
    openDialog() {
      this.dialog = true
    },
    save() {
      this.btnloading = true
      var payload = {
        participants: this.to_be_added.map(o => {
          return o.id
        })
      }
      makeRequestTo
        .addParticipants(this.event.id, payload)
        .then(({ data }) => {
          this.$emit('participants-refresh', {
            event_id: this.event.id,
            data: data
          })
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
    remove_from_selected_members(item) {
      let index = this.to_be_added.findIndex(user => user.id === item.id)
      if (~index) {
        this.to_be_added.splice(index, 1)
        this.$event.$emit('remove-from-selected', item)
      }
    },
    clearable(item) {
      if (item.id === this.event.properties.creator) {
        return false
      }
      return true
    }
  }
}
