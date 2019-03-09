// vue-quill-editor require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'
import _cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import axios from 'axios'
//Components
import makeRequestTo from '@/services/makeRequestTo'
import TextField from '@/common/BaseComponents/TextField.vue'
import TextArea from '@/common/BaseComponents/TextArea.vue'
import AutoComplete from '../AutoComplete'
import DatePickers from '../DatePickers/DatePickers.vue' //used for Due Date field
import MembersDropdown from '../MembersDropdown/MembersDropdown.vue'

export default {
  name: 'ProjectDialog',
  components: {
    quillEditor,
    AutoComplete,
    DatePickers,
    MembersDropdown,
    TextField,
    TextArea
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
    dropdown_loading: false,
    client: {
      selected: null,
      items: [],
      all_items: [],
      show: false
    },
    service: {
      selected: null,
      items: [],
      all_items: [],
      show: false
    },
    members: {
      all_items: [],
      items: [],
      selected: []
    },
    comment: '',
    date_pickers: {
      start_date: '',
      end_date: '',
      show: false
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
        !this.project_title ||
        !this.quill_editor.content
      )
        return true

      if (this.members.selected.includes(this.client.selected.id)) {
        this.$event.$emit('open_snackbar', `Client can't be a member`, 'error')
        return true
      }
      return false
    }
  },

  watch: {
    dialog(new_val) {
      this.open = new_val
      if (new_val) this.init_dropdowns()
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
    init_dropdowns() {
      this.dropdown_loading = true
      axios
        .all([
          makeRequestTo.get_all_clients(),
          makeRequestTo.get_all_services(),
          makeRequestTo.get_all_teams()
        ])
        .then(
          axios.spread((res1, res2, res3) => {
            this.client.all_items = res1.data || []
            this.service.all_items = res2.data || []
            this.members.all_items = res3.data || []
            this.client.items = _cloneDeep(this.client.all_items)
            this.service.items = _cloneDeep(this.service.all_items)
            this.members.items = _cloneDeep(this.members.all_items)
          })
        )
        .finally(() => (this.dropdown_loading = false))
    },

    get_by_id(ids) {
      const members = this.members.all_items.filter(memb =>
        ids.includes(memb.id)
      )
      let string = members.reduce((acc, cur) => {
        return (acc += cur.name.replace(',', '') + ', ')
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
        client_id: this.client.selected.id || null,
        service_id: this.service.selected.id || null,
        start_at: this.date_pickers.start_date,
        end_at: this.date_pickers.end_date,
        description: this.quill_editor.content,
        members: this.members.selected
      }
      if (!this.isEditDialog) fields_to_save.comment = this.comment

      this.$emit('save', fields_to_save)
    },

    update_fields({ fields }) {
      const new_fields = _cloneDeep(fields)
      this.$set(this.service, 'selected', {
        text: new_fields.service_name,
        id: new_fields.service_id
      })
      this.$set(this.client, 'selected', {
        text: new_fields.client_name,
        id: new_fields.client_id
      })
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

    filter_dropdown_items(data_prop, search) {
      let items = _cloneDeep(this[data_prop].all_items)
      if (!search) {
        this[data_prop].items = items
      } else {
        const filtered = items.filter(item => {
          return (
            item.first_name.toLowerCase().includes(search.toLowerCase()) ||
            item.last_name.toLowerCase().includes(search.toLowerCase())
          )
        })
        this.$set(this[data_prop], 'items', filtered)
      }
    }
  }
}
