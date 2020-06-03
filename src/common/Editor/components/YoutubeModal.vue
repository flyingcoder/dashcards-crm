<template>
    <CustomDialog ref="dialog" :open.sync="dialog" title="Youtube URL" button1-text="Cancel" @button1="close_dialog" button2-text="Insert Video" @button2="insertVideo">
        <template #content>
            <v-layout wrap class="custom-dialog">
                <v-flex xs12 md12>
                    <label class="mb-1 subtitle-2">Paste your Youtube URL:</label>
                    <v-text-field label="Youtube URL" v-model.trim="url" type="url" solo hide-details color="#657186"></v-text-field>
                </v-flex>
            </v-layout>
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
        url: null
    }),
    computed: {
        youtubeID() {
            if (!this.url) {
                return false
            }
            return this.youtubeParser(this.url);
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