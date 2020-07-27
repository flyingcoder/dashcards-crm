<template>
    <div class="edit-note-dialog">
        <CustomDialog title="Edit Note" v-model="showEditDialog" @click:close="cancel" button2-text="Save" @button1="cancel" @button2="update">
            <template #content>
                <v-row no-gutters class="custom-dialog" v-if="fieldsToEdit">
                    <v-col md="12">
                        <v-text-field v-model.trim="fieldsToEdit.title" label="Edit Title" class="dialog__textfield d-field" color="#667187" filled clearable hide-details="auto">
                        </v-text-field>
                    </v-col>
                    <v-col md="12">
                        <Editor ref="editor" :hasFloatingTools="false" :key="fieldsToEdit ? fieldsToEdit.id : 0" v-model.trim="fieldsToEdit.content" :content="fieldsToEdit.content" class="note-description" placeholder="Description"></Editor>
                    </v-col>
                </v-row>
            </template>
        </CustomDialog>
    </div>
</template>
<script>
import Editor from '@/common/Editor/Editor.vue'
import request from '@/services/axios_instance'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    components: {
        Editor,
        CustomDialog
    },

    props: {
        value: Boolean,
        fieldsToEdit: Object
    },

    computed: {
        showEditDialog: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    },

    methods: {
        cancel() {
            this.$refs.editor.setValue(null)
            this.showEditDialog = null
        },
        update() {
            if (!this.fieldsToEdit.title) {
                this.$event.$emit('open_snackbar', 'Title is required', 'error')
                this.$event.$emit('btnloading_off', false)
                return
            }
            if (!this.fieldsToEdit.content || this.fieldsToEdit.content === '<p></p>') {
                this.$event.$emit('open_snackbar', 'Description is required', 'error')
                this.$event.$emit('btnloading_off', false)
                return
            }
            this.$emit('update', this.fieldsToEdit)
            Object.assign(this.$data, this.$options.data.apply(this))
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~@/sass/_variables';

.note-description {
    border-radius: 8px;
    border: none;
    background-color: $white;
    margin: 0 5px;
}
</style>