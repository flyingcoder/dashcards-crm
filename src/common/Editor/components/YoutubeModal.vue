<template>
    <CustomDialog ref="dialog" :open.sync="dialog" title="Youtube URL" button1-text="Cancel" @button1="close_dialog"
                  button2-text="Insert Video" @button2="insertVideo"
    >
        <template #content>
            <v-row no-gutters class="custom-dialog">
                <v-col xs="12" md="12">
                    <p class="mb-2 subtitle-2">Paste your YouTube URL:</p>
                    <v-text-field filled label="YouTube URL" clearable @click:clear="embedUrl = null" v-model.trim="url"
                                  type="url" hide-details color="#657186"
                    />
                </v-col>
                <v-col md="12" class="mt-2" v-if="youtubeID">
                    <iframe :src="embedUrl" :height="300" :key="ckey" class="fullwidth"/>
                </v-col>
            </v-row>
        </template>
    </CustomDialog>
</template>
<script>
    import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

    export default {
        components: {
            CustomDialog
        },
        data: () => ({
            dialog: false,
            command: null,
            url: null,
            embedUrl: null,
            ckey: 0
        }),
        computed: {
            youtubeID() {
                if (!this.url) {
                    return false
                }
                return this.youtubeParser(this.url);
            },
            computedUrl() {
                return `https://www.youtube.com/embed/${this.youtubeID}`
            }
        },
        watch: {
            url() {
                this.ckey += 1
                this.embedUrl = this.computedUrl

            }
        },
        methods: {

            youtubeParser(url) {
                const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                const match = url.match(regExp);
                return match && match[7].length === 11 ? match[7] : false;
            },
            insertVideo() {
                if (!this.youtubeID) {
                    this.$event.$emit('btnloading_off', false)
                    this.$event.$emit('open_snackbar', 'Invalid Youtube URL!', 'error')
                    return
                }

                const data = {
                    command: this.command,
                    data: {
                        src: this.youtubeID
                    }
                };

                this.$emit("onConfirm", data)
                this.close_dialog()
            },
            openDialog(command) {
                this.command = command;
                this.dialog = true
                this.url = null
                this.btnloading = false
            },
            close_dialog() {
                this.dialog = false
            }
        }
    }
</script>