// vue-quill-editor require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
//Components
import makeRequestTo from '@/services/makeRequestTo'
import AutoComplete from '../AutoComplete'
import DatePickers from '../DatePickers/DatePickers.vue' //used for Due Date field
import MembersDropdown from '../MembersDropdown/MembersDropdown.vue'

export default {
  name: 'ProjectDialog',
  components: {
    quillEditor,
    AutoComplete,
    DatePickers,
    MembersDropdown
  },

  props: {
    dialog: Boolean,
    title: String,
    isEditDialog: Boolean,
    fieldsToEdit: {
      type: Object,
      default: () => {}
    }
  },

  data: () => ({
    open: false,
    client: {
      selected: null,
      items: [],
      loading: false
    },
    service: {
      selected: null,
      items: [],
      loading: false
    },
    members: {
      items: [],
      selected: []
    },
    comment: '',
    date_pickers: {
      start_date: '',
      end_date: ''
    },
    project_title: '',
    is_autocomplete_loading: false,
    quill_editor: {
      content: '',
      editorOption: {
        placeholder: 'Add description',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image'],
            [{ align: [] }]
          ]
        }
      }
    }
  }),

  computed: {
    disabled() {
      if (
        isEmpty(this.client.selected) ||
        isEmpty(this.members.selected) ||
        !this.project_title
      )
        return true

      if (this.members.selected.includes(this.client.selected.value)) {
        this.$event.$emit(
          'open_snackbar',
          `Client can't be a member`,
          'error',
          'notification'
        )
        return true
      }
      return false
    }
  },

  watch: {
    dialog(new_val) {
      this.open = new_val
    },
    open(new_val) {
      this.$emit('update:dialog', new_val)
    },
    fieldsToEdit: {
      handler(new_val) {
        this.isEditDialog && this.update_fields(new_val)
      },
      deep: true
    }
  },

  methods: {
    get_by_id(ids) {
      const members = this.members.items.filter(memb => ids.includes(memb.id))
      let string = members.reduce((acc, cur) => {
        return (acc += cur.first_name + ' ' + cur.last_name + ', ')
      }, '')
      string = string.slice(0, -2)
      return string
    },

    cancel() {
      this.open = false
    },

    save() {
      if (this.disabled) return
      const fields_to_save = {
        title: this.project_title,
        client_id: this.client.selected.value || null,
        service_id: this.service.selected.value || null,
        start_at: this.date_pickers.start_date,
        end_at: this.date_pickers.end_date,
        description: this.quill_editor.content,
        members: this.members.selected
      }
      if (!this.isEditDialog) fields_to_save.comment = this.comment

      this.$emit('save', fields_to_save)
    },

    update_fields({ fields }) {
      const new_fields = cloneDeep(fields)
      this.$set(this.service, 'items', [
        { text: new_fields.service_name, value: new_fields.service_id }
      ])
      this.$set(this.service, 'selected', {
        text: new_fields.service_name,
        value: new_fields.service_id
      })
      this.$set(this.client, 'selected', {
        text: new_fields.client_name,
        value: new_fields.client_id
      })
      this.$set(this.client, 'items', [
        { text: new_fields.client_name, value: new_fields.client_id }
      ])
      this.$set(
        this.date_pickers,
        'start_date',
        new_fields.started_at.split(' ')[0]
      )
      this.$set(this.date_pickers, 'end_date', new_fields.end_at.split(' ')[0])
      this.$set(this.members, 'items', new_fields.members)
      this.$set(
        this.members,
        'selected',
        new_fields.members.map(member => member.id)
      )
      this.project_title = new_fields.title
      this.$set(this.quill_editor, 'content', new_fields.description)
    },

    clear_and_close() {
      Object.assign(this.$data, this.$options.data.apply(this))
      this.cancel() //close the modal
    },

    get_searched_items(action, keyword, is_service = false) {
      this[action].loading = true
      makeRequestTo
        .fill_dropdown(action, keyword)
        .then(response => this.update_items(response.data, action, is_service))
        .finally(() => (this[action].loading = false))
    },

    update_items(new_items, action, is_service) {
      if (is_service) {
        this.update_service_items(new_items, action)
        return
      }
      let items = []
      new_items.forEach(({ id, first_name, last_name }) => {
        items.push({ text: `${first_name} ${last_name}`, value: id })
      })
      this[action].items = items
    },

    update_service_items(new_items, action) {
      let items = []
      new_items.forEach(({ id, service_name }) => {
        items.push({ text: `${service_name}`, value: id })
      })
      this[action].items = items
    },

    update_member_items(new_items) {
      this.$set(this.members, 'items', new_items)
    }
  }
}
