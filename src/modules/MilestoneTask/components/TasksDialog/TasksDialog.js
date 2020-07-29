//Components
import request from '@/services/axios_instance'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import Editor from '@/common/Editor/Editor.vue'

export default {
    name: 'TasksDialog',
    components: {
        CustomDialog,
        Editor
    },

    props: {
        dialog: Boolean,
        dialogTitle: String,
        isEditDialog: Boolean,
        fieldsToEdit: { type: Object, default: () => {} }
    },

    data: () => ({
        open: false,
        title: null,
        quill_editor: {
            description: ''
        },
        status: 'open',
        selected_group: null,
        group_items: [],
        days_init_value: 1,
        disabled: false
    }),

    computed: {
        dynamic_api() {
            return `api/projects/${this.id}/member`
        },

        days: {
            get: function() {
                return this.days_init_value
            },
            set: function(newValue) {
                if (parseInt(newValue) < 1) {
                    this.days_init_value = 1
                    return
                }
                this.days_init_value = newValue
            }
        }
    },

    watch: {
        dialog(new_val) {
            if (new_val) {
                //when dialog opens
                request
                    .get(`api/groups?all=true`)
                    .then(({ data }) => (this.group_items = data))
            }
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
        cancel() {
            this.open = false
        },

        save() {
            const fields_to_save = {
                title: this.title,
                description: this.quill_editor.description,
                status: this.status,
                days: this.disabled ? 0 : this.days,
                role_id: this.selected_group
            }
            this.$emit('save', fields_to_save)
        },

        update_fields({ fields }) {
            const new_fields = Object.assign({}, fields)
            this.title = new_fields.title
            this.$set(this.quill_editor, 'description', new_fields.description)
            this.status = new_fields.status
            this.days = this.disabled ? 0 : new_fields.days
            this.selected_group = new_fields.role_id
            if (this.$refs.editor)
                this.$refs.editor.setValue(new_fields.description)
        },

        clear_and_close() {
            Object.assign(this.$data, this.$options.data.apply(this))
            this.cancel() //close the modal
        }
    }
}