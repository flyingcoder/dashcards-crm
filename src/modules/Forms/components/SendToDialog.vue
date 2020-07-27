<template>
    <custom-dialog ref="dialog" title="Send Form" button1-text="Cancel" @button1="clear_and_close">
        <template #content>
            <v-row no-gutters class="custom-dialog">
                <v-col xs="12" md="12">
                    <v-text-field required dense v-model.trim="to" class="mb-1" label="To emails * (separated by comma)"
                                  filled clearable hide-details prepend-icon="mdi-email-plus-outline" color="#657186"/>
                </v-col>
                <v-col xs="12" md="12">
                    <v-text-field required dense v-model.trim="subject" class="mb-1" prepend-icon="mdi-mail" clearable
                                  label="Subject *" clearable filled hide-details color="#657186"/>
                </v-col>
                <v-col xs="12" md="12">
                    <Editor ref="editor" :key="ckey" :hasFloatingTools="false" v-model.trim="message" :content="message"
                            placeholder="Message *"></Editor>
                </v-col>
            </v-row>
        </template>
        <template slot="button2">
            <v-btn @click="send_email_message" :loading="sending" :disabled="is_disabled">Send</v-btn>
        </template>
    </custom-dialog>
</template>
<script>
    import Editor from '@/common/Editor/Editor.vue'
    import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
    import {settings} from '@/variables'
    import request from '@/services/axios_instance'
    import {global_utils} from "@/global_utils/global_utils";

    export default {
        name: 'SendForm',
        mixins: [global_utils],
        components: {
            CustomDialog,
            Editor
        },
        props: {
            handler: {type: String, default: 'api/forms/send-email-form'}
        },
        data: () => ({
            to: null,
            subject: null,
            message: null,
            item: null,
            sending: false,
            ckey: 0
        }),

        computed: {
            is_disabled() {
                for (let i = 0; i < this.to_emails.length; i++) {
                    if (!this.validateEmail(this.to_emails[i].trim())) {
                        return true
                    }
                }
                return !this.subject || this.to_emails.length === 0 || !this.message || this.message === '<p></p>'
            },
            hasFormNote() {
                return this.item ? true : false
            },
            to_emails() {
                if (!this.to) {
                    return []
                }
                return this.to.split(',')
            }
        },
        methods: {
            getLink(item) {
                if (!item) return ''
                const link = `${settings.BaseURL}/form/${item.slug}`;
                return `<a href="${link}">${link}</a>`
            },
            open_dialog(item) {
                this.sending = false
                if (item) {
                    this.item = item
                    this.message = this.getLink(item)
                    this.ckey += 1
                }
                this.$refs.dialog.open_dialog()
            },

            close_dialog() {
                this.$refs.dialog.close_dialog()
            },
            clear_and_close() {
                this.close_dialog()
                this.item = this.message = null
            },

            send_email_message() {
                this.sending = true
                var payload = {
                    to_emails: this.to_emails,
                    message: this.message,
                    subject: this.subject
                }
                if (this.item) {
                    payload.item_id = this.item.id
                }
                request.post(this.handler, payload)
                    .then(({data}) => {
                        this.$event.$emit('open_snackbar', 'Email sent!')
                        this.clear_and_close()
                    })
                    .finally(() => {
                        this.sending = false
                    })
            }
        }
    }
</script>