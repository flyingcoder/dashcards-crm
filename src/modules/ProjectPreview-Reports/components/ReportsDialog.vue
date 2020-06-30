<template>
    <custom-dialog ref="dialog" title="Add Link" button1-text="Cancel" @button1="close_dialog">
        <template #content>
            <v-layout wrap class="custom-dialog">
                <v-flex xs12>
                    <v-text-field v-model.trim="title" class="dialog__textfield d-field" label="Title" filled clearable hide-details prepend-icon="text_fields" color="#657186" />
                </v-flex>
                <v-flex xs12>
                    <v-text-field class="dialog__link d-field" pattern="https://.*" type="url" v-model.trim="link" prepend-icon="link" label="https://" clearable @keydown="validate_url" filled hide-details color="#657186" />
                </v-flex>
            </v-layout>
        </template>
        <template slot="button2">
            <v-btn @click="on_dialog_save" :disabled="is_disabled">Save</v-btn>
        </template>
    </custom-dialog>
</template>
<script>
import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
import apiTo from '../api'

export default {
    components: {
        CustomDialog
    },
    props: {
        id: [Number, String]
    },
    data: () => ({
        link: '',
        title: '',
        valid_url: false
    }),

    computed: {
        is_disabled() {
            return !this.link || !this.valid_url || !this.title
        }
    },

    methods: {
        open_dialog() {
            this.$refs.dialog.open_dialog()
        },
        close_dialog() {
            this.$refs.dialog.close_dialog()
        },
        clear_and_close() {
            this.close_dialog()
            Object.assign(this.$data, this.$options.data.apply(this))
        },
        validate_url(event) {
            this.$nextTick(() => {
                this.valid_url = event.target.validity.valid
            })
        },
        on_dialog_save() {
            this.$store.commit('set_custom_loader', true)
            apiTo
                .add_project_report(this.id, {
                    url: this.link,
                    title: this.title
                })
                .then(({ data }) => {
                    this.$emit('report-added', data)
                    this.clear_and_close()
                })
                .finally(() => this.$store.commit('set_custom_loader', false))
        }
    }
}
</script>