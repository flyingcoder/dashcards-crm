<template>
    <div class="link-dialog">
        <CustomDialog
                ref="dialog"
                :open.sync="dialog"
                title="File URL"
                button1-text="Cancel"
                @button1="close_dialog"
        >
            <template v-slot:content>
                <v-layout wrap class="custom-dialog">
                    <v-flex xs12 md12>
                        <v-text-field
                                label="File URL*"
                                v-model.trim="url"
                                type="url"
                                filled
                                prepend-inner-icon="mdi-link-plus"
                                hide-details="auto"
                                color="#657186"
                        />
                    </v-flex>
                </v-layout>
            </template>
            <template v-slot:button2>
                <v-btn @click="saveClicked" :disabled="disabled">Save Link</v-btn>
            </template>
        </CustomDialog>
    </div>
</template>

<script>
    // Components
    import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'
    import {global_utils} from "@/global_utils/global_utils";

    export default {
        mixins: [global_utils],
        components: {
            CustomDialog
        },
        data: () => ({
            dialog: false,
            url: null
        }),
        computed: {
            disabled() {
                return !this.validateUrl(this.url)
            }
        },
        methods: {
            openDialog() {
                this.dialog = true
            },
            close_dialog() {
                this.dialog = false
            },
            closeAndClearDialog() {
                Object.assign(this.$data, this.$options.data.apply(this))
            },
            saveClicked() {
                if (!this.validateUrl(this.url)) return
                this.$emit('save', {url: this.url})
            }
        }
    }
</script>
