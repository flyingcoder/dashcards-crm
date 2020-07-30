<template>
    <div>
        <custom-dialog
                :title="title"
                :content="textContent"
                :button1-text="cancelButtonText"
                :button2-text="deleteButtonText"
                :open.sync="open"
                @button1="cancel_clicked"
                @button2="delete_clicked"
        >
            <template v-slot:content>
                <v-banner two-line outlined tile flat>
                    <v-avatar slot="icon" color="red accent-4" size="90">
                        <v-icon icon="mdi-lock" large color="white">
                            mdi-shield-alert-outline
                        </v-icon>
                    </v-avatar>
                    <p class="title" v-html="textContent" />
                </v-banner>
            </template>
        </custom-dialog>
    </div>
</template>
<script>
    import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

    export default {
        components: {
            CustomDialog
        },

        props: {
            title: {type: String, default: 'Default Modal Title'},
            textContent: {type: String, default: 'Default Modal Text Content'},
            cancelButtonText: {type: String, default: 'Cancel'},
            deleteButtonText: {type: String, default: 'Yes, Delete'},
            openDialog: Boolean
        },

        data: () => ({
            open: false
        }),

        watch: {
            openDialog(val) {
                this.open = val
            },
            open(val) {
                this.$emit('update:openDialog', val)
            }
        },

        methods: {
            cancel_clicked() {
                this.open = false
            },
            delete_clicked() {
                this.$emit('delete')
            },
            showDialog() {
                this.open = true
            },
            closeDialog() {
                this.open = false
            }
        }
    }
</script>
