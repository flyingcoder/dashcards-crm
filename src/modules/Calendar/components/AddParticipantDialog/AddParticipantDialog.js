import makeRequestTo from '@/services/makeRequestTo'
//components
import TextField from '@/common/BaseComponents/TextField.vue'
import _cloneDeep from "lodash/cloneDeep";
import _diffBy from 'lodash/differenceBy'
import {mapGetters} from "vuex";

export default {
    name: 'AddParticipantDialog',
    components: {
        TextField,
    },
    props: {
        dialogTitle: {type: String, default: 'Manage Participants'},
        event: {type: Object}
    },

    data: () => ({
        dialog: false,
        btnloading: false,
        members: {
            items: [],
            original: [],
            selected: []
        }
    }),
    watch: {
        dialog: {
            handler(value) {
                if (value) {
                    this.getAllMembers()
                }
                if (value && this.event && this.event.hasOwnProperty('users')) {
                    this.members.selected = _cloneDeep(this.event.users)
                }
            },
            immediate: true
        }
    },
    computed: {
        ...mapGetters(['users']),
        disabled() {
            return this.members.selected.length === 0;
        },
        available() {
            return _diffBy(this.members.items, this.members.selected, 'id')
        }
    },
    methods: {
        openDialog() {
            this.dialog = true
        },
        getAllMembers() {
            if (!this.users || this.users.length === 0) {
                this.$store.dispatch('fetchUsers')
                    .then(() => {
                        let users = this.$store.getters.users
                        this.members.items = _cloneDeep(users)
                        this.members.original = _cloneDeep(users)
                    })
            } else {
                this.members.items = _cloneDeep(this.users)
                this.members.original = _cloneDeep(this.users)
            }
        },
        save() {
            this.btnloading = true
            let payload = {
                participants: this.members.selected.map(user => {
                    return user.id
                })
            };
            makeRequestTo
                .addParticipants(this.event.id, payload)
                .then(({data}) => {
                    this.$emit('participants-refresh', {event_id: this.event.id, data: data})
                    this.$event.$emit('open_snackbar', 'Participants updated')
                    this.clear_and_close()
                })
                .finally(() => {
                    this.btnloading = false
                })
        },
        clear_and_close() {
            this.members.selected = []
            this.members.items = this.members.original
            this.dialog = false
        },
        clearable(item) {
            return item.id !== this.event.properties.creator;
        },
        add_to(user, index) {
            this.members.selected.push(user)
            this.members.items.splice(index, 1)
        },
        remove_from(user, index) {
            this.members.items.push(user)
            this.members.selected.splice(index, 1)
        }
    }
}