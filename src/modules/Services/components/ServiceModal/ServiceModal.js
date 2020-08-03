import _cloneDeep from 'lodash/cloneDeep'
import isEmpty from 'lodash/isEmpty'
import axios from 'axios'
import {settings} from '@/variables'
import * as moment from "moment"
//Components
import makeRequestTo from '@/services/makeRequestTo'
import TextField from '@/common/BaseComponents/TextField.vue'
import TextArea from '@/common/BaseComponents/TextArea.vue'
import DatePicker from '@/common/DatePickerV2.vue'
import MembersDropdown from '@/modules/Projects/components/MembersDropdown/MembersDropdown.vue'
import Editor from '@/common/Editor/Editor.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    name: 'CampaignModal', //from old servicemodal
    components: {
        DatePicker,
        MembersDropdown,
        TextField,
        TextArea,
        Editor,
        CustomDialog
    },

    data: () => ({
        isEditDialog: false,
        fieldsToEdit: null,
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
        manager: {
            selected: [],
            items: [],
            all_items: [],
            show: false
        },
        comment: '',
        date_pickers: {
            start_date: null,
            end_date: '',
            show: true
        },
        dates: [],
        is_autocomplete_loading: false,
        description: null,
        btnloading: false,
        start_date_menu: false,
        end_date_menu: false,
        statuses: ['Active', 'Inactive', 'Paused'],
        status: 'Active',
        business_name: null,
        location: null,
        icon: `${settings.apiHostBaseURL}/img/members/default-cover.png`
    }),

    mounted() {
        this.$event.$on('btnloading_off', status => (this.btnloading = false))

        this.$event.$on('new_client_added', data => {
            this.client.items.push(data)
            this.client.all_items.push(data)
            this.client.selected = data
        })

        this.$event.$on('new-services-list-added', data => {
            this.service.items.push(...data)
            this.service.all_items.push(...data)
            this.service.selected = data[0]
        })

        this.$event.$on('new_member_added', data => {
            makeRequestTo.getAllNormalMembers().then(({data}) => {
                this.members.all_items = data || []
                this.members.items = _cloneDeep(this.members.all_items)
                setTimeout(() => {
                    let found = this.members.items.findIndex(us => us.id === data.id)
                    if (~found) {
                        this.members.selected = data
                    }
                }, 1)
            })
        })

        this.$event.$on('new_manager_added', data => {
            makeRequestTo.getManagerMembers().then(({data}) => {
                this.manager.all_items = data || []
                this.manager.items = _cloneDeep(this.manager.all_items)
                setTimeout(() => {
                    let found = this.manager.items.findIndex(us => us.id === data.id)
                    if (~found) {
                        this.manager.selected = data
                    }
                }, 1)
            })
        })
    },

    computed: {
        disabled() {
            return isEmpty(this.client.selected) ||
                isEmpty(this.manager.selected) ||
                isEmpty(this.service.selected) ||
                !this.business_name ||
                !this.date_pickers.start_date;
        },
        title() {
            return this.isEditDialog ? 'Edit Campaign' : 'Create Campaign'
        },
        non_selected_managers() {
            return this.manager.items.filter(i => {
                let index = this.manager.selected.findIndex(c => c.id === i.id)
                return (!~index)
            })
        },
        non_selected_members() {
            return this.members.items.filter(i => {
                let index = this.members.selected.findIndex(c => c.id === i.id)
                return (!~index)
            })
        }

    },

    methods: {
        open_dialog(isEdit, fieldsToEdit) {
            this.isEditDialog = isEdit || false
            this.fieldsToEdit = fieldsToEdit
            if (isEdit) {
                this.update_fields(fieldsToEdit)
            } else {
                this.reset()
            }
            this.init_dropdowns()
            this.open = true
            // this.$refs.dialog.open_dialog()
        },
        init_dropdowns() {
            this.dropdown_loading = true
            axios
                .all([
                    makeRequestTo.get_all_clients(),
                    makeRequestTo.getAllNormalMembers(),
                    makeRequestTo.getManagerMembers(),
                    makeRequestTo.get_all_services_list()
                ])
                .then(
                    axios.spread((res1, res2, res3, res4) => {
                        this.client.all_items = res1.data || []
                        this.members.all_items = res2.data || []
                        this.manager.all_items = res3.data || []
                        this.service.all_items = res4.data || []
                        this.client.items = _cloneDeep(this.client.all_items)
                        this.manager.items = _cloneDeep(this.manager.all_items)
                        this.members.items = _cloneDeep(this.members.all_items)
                        this.service.items = _cloneDeep(this.service.all_items)
                    })
                )
                .finally(() => (this.dropdown_loading = false))
        },

        cancel() {
            this.open = false
            // this.$refs.dialog.close_dialog()
        },

        save() {
            if (this.disabled) return
            this.btnloading = true
            const fields_to_save = {
                service_id: this.service.selected.id,
                client_id: this.client.selected.id || null,
                started_at: this.date_pickers.start_date,
                end_at: this.date_pickers.end_date,
                description: this.description,
                members: this.members.selected.map((value, index) => {
                    return value.id
                }),
                managers: this.manager.selected.map((value, index) => {
                    return value.id
                }),
                icon: this.icon,
                status: this.status,
                business_name: this.business_name,
                location: this.location
            }

            if (this.isEditDialog) fields_to_save.id = this.fieldsToEdit.id

            this.$emit('save', fields_to_save)
        },

        update_fields(fields) {
            const new_fields = _cloneDeep(fields)
            this.$set(this.date_pickers, 'start_date', new_fields.started_at)
            this.$set(this.date_pickers, 'end_date', new_fields.end_at)
            this.$set(this.service, 'selected', new_fields.service)
            this.$set(this.client, 'selected', new_fields.client[0])
            this.$set(this.manager, 'selected', new_fields.managers)
            this.$set(this.members, 'selected', new_fields.members)
            this.status = new_fields.status
            this.location = new_fields.props.location || null
            this.business_name = new_fields.props.business_name || null
            this.description = new_fields.description
            this.icon = new_fields.props.icon || null
        },

        clear_and_close() {
            this.reset()
            this.cancel() //close the modal
        },
        reset() {
            this.members.selected = []
            this.manager.selected = []
            this.client.selected = null
            this.status = 'Active'
            this.business_name = null
            this.location = null
            this.description = ''
            this.name = ''
            this.date_pickers.start_date = ''
            this.date_pickers.end_date = null
            if (this.$refs.editor)
                this.$refs.editor.setValue('')
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

        open_add_new_member_dialog() {
            this.$event.$emit('open-new-member-dialog', true)
        },

        open_add_new_client() {
            this.$event.$emit('open-new-client-dialog', true)
        },

        open_add_new_service_list() {
            this.$event.$emit('open-new-service-list-dialog', true)
        },
        add_to_selected_members(item) {
            let index = this.members.selected.findIndex(user => user.id === item.id)
            if (index === -1) {
                this.members.selected.push(item)
            }
        },
        remove_from_selected_members(item) {
            let index = this.members.selected.findIndex(user => user.id === item.id)
            if (~index) {
                this.members.selected.splice(index, 1)
            }
        },
        add_to_selected_managers(item) {
            let index = this.manager.selected.findIndex(user => user.id === item.id)
            if (index === -1) {
                this.manager.selected.push(item)
            }
        },
        remove_from_selected_managers(item) {
            let index = this.manager.selected.findIndex(user => user.id === item.id)
            if (~index) {
                this.manager.selected.splice(index, 1)
            }
        },
        clientSelected(client) {
            this.client.selected = client
            this.business_name = client.company ? client.company.name : this.business_name
            this.location = client.company ? client.company.address : this.location
        }
    }
}