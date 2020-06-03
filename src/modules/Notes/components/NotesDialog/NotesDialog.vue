<template>
    <div class="notes-dialog">
        <CustomDialog title="Add Notes" v-model="showDialog" button2-text="Save" @button1="showDialog = false" @button2="save">
            <template #content>
                <v-layout wrap class="custom-dialog">
                    <v-flex xs12>
                        <v-text-field v-model.trim="payload.title" label="Add Title" class="dialog__textfield d-field" color="#667187" solo clearable hide-details>
                        </v-text-field>
                    </v-flex>
                    <v-flex xs12>
                        <rich-editor placeholder="Description" v-model.trim="payload.content" class="note-description" />
                        <!-- <Editor></Editor> -->
                    </v-flex>
                </v-layout>
            </template>
        </CustomDialog>
    </div>
</template>
<script>
import RichEditor from '@/common/RichEditor.vue'
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

export default {
    components: {
        RichEditor,
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
            this.$emit('save', this.payload)
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