<template>
    <div class="notes-dialog">
        <CustomDialog title="Add Notes" @click:close="closeDialog" v-model="showDialog" button2-text="Save" @button1="closeDialog" @button2="save">
            <template #content>
                <v-row class="custom-dialog" no-gutters>
                    <v-col md="12">
                        <v-text-field v-model.trim="payload.title" label="Add Title" class="dialog__textfield d-field" color="#667187" solo clearable hide-details>
                        </v-text-field>
                    </v-col>
                    <v-col md="12">
                        <Editor ref="editor" :hasFloatingTools="false" v-model="payload.content" class="note-description" placeholder="Description" ></Editor>
                    </v-col>
                </v-row>
            </template>
        </CustomDialog>
    </div>
</template>
<script>
import Editor from '@/common/Editor/Editor.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    components: {
        Editor,
        CustomDialog
    },

    props: {
        value: Boolean
    },

    data: () => ({
        payload: {
            title: null,
            content: null
        }
    }),

    computed: {
        showDialog: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    },

    methods: {
        save() {
            if (!this.payload.title) {
                this.$event.$emit('open_snackbar', 'Title is required', 'error')
                this.$event.$emit('btnloading_off', false)
                return
            }
            if (!this.payload.content || this.payload.content === '<p></p>') {
                this.$event.$emit('open_snackbar', 'Description is required', 'error')
                this.$event.$emit('btnloading_off', false)
                return
            }
            this.$emit('save', this.payload)
            Object.assign(this.$data, this.$options.data.apply(this))
            this.$refs.editor.setValue(null)
        },
        closeDialog(){
            this.$refs.editor.setValue(null)
            this.showDialog = false
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