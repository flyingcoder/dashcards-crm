import {api_to} from '@/modules/Chat/api'
import _cloneDeep from 'lodash/cloneDeep'

export default {
    name: 'ManageMemberDialog',
    props: {
        conversation: Object
    },
    data() {
        return {
            dialog: false,
            all_users: [],
            filtered_by_search: [],
            all_selected: [],
            search: '',
            btnloading: false
        }
    },
    methods: {
        open_dialog() {
            this.dialog = true
            this.all_selected = _cloneDeep(this.conversation.members)
            this.get_chat_list()
        },
        clear_and_close() {
            this.dialog = false
        },
        get_chat_list() {
            api_to.get_chat_list().then(({data}) => {
                this.filtered_by_search = this.filter_users_for_selected(data)
                this.all_users = _cloneDeep(data)
            })
        },
        update_members() {
            this.btnloading = true
            let payload = {
                convo_id: this.conversation.id,
                users: this.all_selected.map(value => {
                    return value.id
                })
            };
            api_to
                .update_members_list(payload)
                .then(({data}) => {
                    this.conversation.members = data
                    this.clear_and_close()
                })
                .finally(() => (this.btnloading = false))
        },
        can_be_remove(user) {
            return user.id !== this.conversation.data.group_creator.id;

        },
        select(item, value) {
            let index = this.filtered_by_search.findIndex(user => item.id === user.id)
            if (~index) {
                this.filtered_by_search[index].is_selected = value
            }
        },
        selected(item) {
            let index = this.all_selected.findIndex(user => item.id === user.id)
            if (~index) {
                this.select(item, false)
                this.all_selected.splice(index, 1)
            } else {
                this.select(item, true)
                this.all_selected.push(item)
            }
        },

        filter_users_for_selected(items) {
            let selected_ids = this.conversation.members.map(value => {
                return value.id
            });
            return items.map(item =>
                Object.assign(item, {is_selected: selected_ids.indexOf(item.id) >= 0})
            )
        },
        filter_users(event) {
            setTimeout(() => {
                if (this.search && this.search !== '') {
                    this.filtered_by_search = _cloneDeep(this.all_users).filter(item => {
                        return item.fullname
                            .toLowerCase()
                            .includes(this.search.toLowerCase().trim())
                    })
                } else {
                    this.filtered_by_search = _cloneDeep(this.all_users)
                }
            }, 1)
        }
    }
}
