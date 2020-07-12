<template>
    <custom-dialog :title="title" hasFooter :open.sync="emailer_open" maxWidth="800px" ref="dialog">
        <template v-slot:content>
            <v-row no-gutters v-if="user">
                <v-col md="12" class="mb-2">
                    <v-text-field required v-model="payload.to" placeholder="To: *" type="text"
                                  dense filled hide-details="auto"
                    />
                </v-col>
                <v-col md="12" class="mb-2">
                    <v-text-field required v-model="payload.subject" placeholder="Subject: *" type="text" dense filled
                                  hide-details="auto"
                    />
                </v-col>
                <v-col md="12">
                    <Editor :hasFloatingTools="false" placeholder="Message *" v-model="payload.message"/>
                </v-col>
            </v-row>
        </template>
        <template v-slot:button2>
            <v-btn :loading="submitting" :disabled="isDisabled" @click="sendMail">Send Mail</v-btn>
        </template>
    </custom-dialog>
</template>

<script>
    import CustomDialog from "@/common/BaseComponents/CustomDialog/CustomDialog.vue";
    import Editor from "@/common/Editor/Editor.vue";
    import request from "@/services/axios_instance";

    export default {
        name: "GlobalEmailer",
        components: {Editor, CustomDialog},
        data: () => ({
            emailer_open: false,
            user: null,
            payload: {
                to: null,
                subject: null,
                message: null
            },
            submitting: false
        }),
        computed: {
            isDisabled() {
                return !this.payload.to || !this.payload.subject || !this.payload.message || this.payload.message === '<p></p>'
            },
            title() {
                return 'Send E-mail'
            }
        },
        methods: {
            openEmailer(user) {
                this.emailer_open = true
                this.user = user
                this.payload.to = user.email
            },
            clear() {
                this.payload = {
                    to: null,
                    subject: null,
                    message: null
                }
            },
            closeEmailer() {
                this.clear()
                this.emailer_open = false
            },
            sendMail() {
                this.submitting = true
                request.post(`api/emails/send`, this.payload)
                    .then(({data}) => {
                        this.$event.$emit('open_snackbar', 'Email sent!')
                        this.closeEmailer()
                    })
                    .finally(() => {
                        this.submitting = false
                    })
            }
        }
    }
</script>

<style scoped>

</style>