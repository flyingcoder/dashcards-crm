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
  name: 'ProjectModal',
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
    fieldsToEdit: { type: Object, default: () => {} }
  },

  data: () => ({
    extraFields: [],
    hasExtraInputs: false,
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
      show: true
    },
    dates: [],
    project_title: '',
    is_autocomplete_loading: false,
    quill_editor: {
      content: '',
      editorOption: {
        placeholder: 'Add text',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image'],
            [{ align: [] }]
          ]
        }
      }
    },
    rangemenu: true,
    btnloading: false
  }),

  mounted() {
    this.init_dropdowns()
    this.$event.$on('btnloading_off', status => (this.btnloading = status))
    this.$event.$on('new_services_added', data => {
      for (var i = data.length - 1; i >= 0; i--) {
        let item = {}
        item.name = data[i].service_name
        item.id = data[i].id
        this.service.items.push(item)
        this.service.all_items.push(item)
        this.service.selected = item
      }
    })
    this.$event.$on('new_client_added', data => {
      this.client.items.push(data)
      this.client.all_items.push(data)
      this.client.selected = data
    })
    this.$event.$on('new_member_added', data => {
      makeRequestTo.getAllMembers().then(({ data }) => {
        this.members.all_items = data || []
        this.members.items = _cloneDeep(this.members.all_items)
      })
    })
  },

  computed: {
    disabled() {
      if (
        isEmpty(this.client.selected) ||
        isEmpty(this.members.selected) ||
        !this.project_title ||
        !this.quill_editor.content
      )
        return true

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
    },

    'service.selected'(new_val, old_val) {
      if (new_val) {
        if (this.isEditDialog) {
          if (new_val.id === this.fieldsToEdit.fields.service_id) {
            if (this.fieldsToEdit.fields.extra_fields) {
              this.extraFields = this.fieldsToEdit.fields.extra_fields
              this.hasExtraInputs = true
            } else {
              this.get_extra_inputs(new_val.id)
            }
          } else {
            this.get_extra_inputs(new_val.id)
          }
        } else {
          this.get_extra_inputs(new_val.id)
        }
      }
    }
  },

  methods: {
    setDatesAndCloseMenu(val) {
      if (val.length < 2) {
        this.$event.$emit('open_snackbar', 'Select start and end date', 'error')
      } else {
        var x = new Date(val[0])
        var y = new Date(val[1])
        this.date_pickers.start_date = x <= y ? val[0] : val[1]
        this.date_pickers.end_date = x <= y ? val[1] : val[0]
        this.rangemenu = false
      }
    },
    closemenu() {
      this.shown = false
    },
    init_dropdowns() {
      this.dropdown_loading = true
      axios
        .all([
          makeRequestTo.get_all_clients(),
          makeRequestTo.get_all_services(),
          makeRequestTo.getAllNormalMembers()
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
      this.btnloading = true
      const fields_to_save = {
        title: this.project_title,
        client_id: this.client.selected.id || null,
        service_id: this.service.selected.id || null,
        start_at: this.date_pickers.start_date,
        end_at: this.date_pickers.end_date,
        description: this.quill_editor.content,
        members: this.members.selected.map((value, index) => {
          return value.user_id
        }),
        extra_fields: this.extraFields
      }

      if (!this.isEditDialog) fields_to_save.comment = this.comment

      this.$emit('save', fields_to_save)
    },

    update_fields({ fields }) {
      const new_fields = _cloneDeep(fields)
      this.$set(this.service, 'selected', {
        name: new_fields.service_name,
        id: new_fields.service_id
      })
      this.$set(this.client, 'selected', {
        company_name: new_fields.company_name,
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
        new_fields.members //.map(member => member.user_id)
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
    },

    get_extra_inputs(serviceId) {
      if (serviceId) {
        makeRequestTo
          .get_projects_extra_inputs(serviceId)
          .then(({ data }) => {
            this.extraFields = JSON.parse(data.questions)
            this.hasExtraInputs = true
          })
          .catch(() => (this.hasExtraInputs = false))
      } else {
        this.hasExtraInputs = false
      }
    },
    open_add_new_member_dialog(){
      this.$event.$emit('open-new-member-dialog', true)
    },
    open_add_new_service() {
      this.$event.$emit('open-new-service-dialog', true)
    },

    open_add_new_client() {
      this.$event.$emit('open-new-client-dialog', true)
    },
    add_to_selected_members(item) {
      let index = this.members.selected.findIndex(
        user => user.user_id === item.user_id
      )
      if (index === -1) {
        this.members.selected.push(item)
      }
    },
    remove_from_selected_members(item) {
      let index = this.members.selected.findIndex(
        user => user.user_id === item.user_id
      )
      if (~index) {
        this.members.selected.splice(index, 1)
      }
    }
  }
}
