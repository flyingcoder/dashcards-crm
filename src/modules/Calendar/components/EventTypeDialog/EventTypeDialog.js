import * as apiTo from '@/modules/Calendar/api'
//components
import TextField from '@/common/BaseComponents/TextField.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    name: 'EventTypeDialog',
    components: {
        TextField,
        CustomDialog
    },
    props: {
        dialog: Boolean,
        dialogTitle: {type: String, default: 'Add New Event Type'},
        calendar: {
            type: Object, default: () => {
            }
        }
    },

    data: () => ({
        open: false,
        btnloading: false,
        btnloading2: false,
        name: '',
        theme: 'blue',
        dropdown_color: [
            `red`,
            `orange`,
            `yellow`,
            `green`,
            `teal`,
            `blue`,
            `indigo`,
            `purple`,
            `pink`
        ],
        to_be_added: []
    }),

    watch: {
        dialog(new_val) {
            this.open = new_val
        }
    },

    computed: {
        disabled() {
            return this.to_be_added.length <= 0;
        }
    },
    filters: {
        capitalizeFirst: s => {
            if (typeof s !== 'string') return ''
            return s.charAt(0).toUpperCase() + s.slice(1)
        }
    },
    methods: {
        openDialog() {
            this.open = true
        },
        save() {
            this.btnloading = true
            let payload = {types: this.to_be_added}
            apiTo.addNewEventType(payload)
                .then(({data}) => {
                    this.$emit('new-event-type-added', data)
                    this.$event.$emit('open_snackbar', 'Event types successfully added!')
                    this.clear_and_close()
                })
                .finally(() => {
                    this.$event.$emit('btnloading_off', true)
                    this.clear_and_close()
                })
        },
        clear_and_close() {
            this.to_be_added = []
            this.dialog = this.open = false
        },
        add() {
            if (!this.name || !this.theme) return
            this.btnloading2 = true
            let type = {
                name: this.name,
                color: this.theme
            };
            this.to_be_added.push(type)
            this.name = ''
            this.btnloading2 = false
        },
        remove(index) {
            this.btnloading2 = true
            this.to_be_added.splice(index, 1)
            this.btnloading2 = false
        }
    }
}
