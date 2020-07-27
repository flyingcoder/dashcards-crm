<template>
    <div class="invoice-template-dialog">
        <custom-dialog ref="dialog" :open.sync="computedDialog" :title="dialog_title" @button1="clear_and_close"
                       :maxWidth="900"
        >
            <template v-slot:content>
                <v-row class="custom-dialog">
                    <v-col grow>
                        <h3 class="subtitle-2 mb-2">Template Name</h3>
                        <v-text-field placeholder="Enter Template Name" solo persistent-hint clearable :counter="25"
                                      hide-details class="mb-2" flat v-model="title"
                        />
                        <h3 class="subtitle-2 mb-2">Template HTML </h3>
                        <v-row no-gutters class="mt-2">
                            <v-col grow>
                                <v-btn class="mr-1" @click="show_guides">Guide and Rules</v-btn>
                                <input type="file" @change="getFile" ref="inputfile" accept=".txt,.html,.htm"
                                       style="display:none;"
                                >
                                <v-btn class="mr-1" @click="$refs.inputfile.click()">Upload File</v-btn>
                            </v-col>
                            <v-col md="5">
                                <v-select :value="null" clearable outlined @change="setStartingTemplate"
                                          :items="defaultTemplates" return-object item-text="name"
                                          label="Customize from default" flat dense :height="25" solo
                                />
                            </v-col>
                        </v-row>
                        <v-textarea :rows="67" v-model="html" clearable :value="html" placeholder="Template HTML"
                                    auto-grow solo hide-details flat
                        />
                    </v-col>
                    <v-col md="4">
                        <v-list three-line dense v-if="invoicefields">
                            <v-subheader inset class="subtitle-2">Placeholder</v-subheader>
                            <v-list-item style="min-height:25px;" v-for="(info, field) in invoicefields" :key="field">
                                <v-list-item-content>
                                    <v-list-item-title v-text="`{`+field+`}`" />
                                    <v-list-item-subtitle v-html="info.description" />
                                </v-list-item-content>
                                <!-- <v-list-item-icon>
                                    <v-tooltip left>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn icon small @click="copy(field)" v-bind="attrs" v-on="on">
                                                <v-icon small>mdi-content-copy</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Copy Placeholder</span>
                                    </v-tooltip>
                                </v-list-item-icon> -->
                            </v-list-item>
                        </v-list>
                    </v-col>
                </v-row>
            </template>
            <template slot="button2">
                <v-btn @click="preview" :disabled="!can_preview">Preview</v-btn>
                <v-btn @click="save" :disabled="can_submit" :loading="btnloading">Save</v-btn>
            </template>
        </custom-dialog>
    </div>
</template>
<script>
    import isHtml from 'is-html'
    //Components
    import CustomDialog from '@/common/BaseComponents/CustomDialog/CustomDialog.vue'

    export default {
        components: {
            CustomDialog,
        },

        props: {
            dialog: Boolean,
            invoicefields: [Array, Object],
            defaultTemplates: [Array, Object],
        },

        data: () => ({
            item: null,
            isEdit: false,
            btnloading: false,
            open: false,
            title: null,
            html: null,
        }),

        mounted() {
            this.$event.$on('btnloading_off', status => (this.btnloading = status))
        },

        computed: {
            computedDialog: {
                get() {
                    return this.dialog
                },
                set(val) {
                    !val && this.$emit('close')
                    this.$emit('update:dialog', val)
                }
            },
            dialog_title() {
                return !this.isEdit ? 'Create Invoice Template' : 'Edit Invoice Template'
            },
            can_preview() {
                return this.html
            },
            can_submit() {
                return !this.title || !this.html
            }
        },

        watch: {
            dialog: {
                handler(new_val) {
                    this.open = new_val
                }
            },
            open(new_val) {
                this.$emit('update:dialog', new_val)
            }
        },

        methods: {
            cancel() {
                this.dialog = false
                this.$refs.dialog.close_dialog()
            },

            open_dialog(isEdit, item) {
                if (isEdit && item) {
                    this.item = item
                    this.isEdit = true
                    this.html = item.template
                    this.title = item.name
                } else {
                    this.html = null
                    this.title = null
                    this.isEdit = false
                    this.item = null
                }
                this.$refs.dialog.open_dialog()
            },

            save() {
                if (!isHtml(this.html)) {
                    return
                }

                this.btnloading = true
                const fields_to_save = {
                    title: this.title,
                    html: this.html
                }
                if (this.isEdit) {
                    fields_to_save.id = this.item.id
                }
                this.$emit('save', fields_to_save)
            },
            clear_and_close() {
                this.title = this.html = null
                this.cancel()
            },

            preview() {
                this.$emit('preview', {name: this.title, template: this.html})
            },

            show_guides() {
                this.$event.$emit('show-invoice-template-guide')
            },

            copy(field) {
                this.$copyText(`{` + field + `}`)
            },

            getFile(event) {
                const input = event.target
                if ('files' in input && input.files.length > 0) {
                    this.placeFileContent(document.getElementById('content-target'), input.files[0])
                }
            },

            placeFileContent(target, file) {
                this.readFileContent(file).then(content => {
                    this.html = content
                })
                    .catch(error => console.log(error))
            },

            readFileContent(file) {
                const reader = new FileReader()
                return new Promise((resolve, reject) => {
                    reader.onload = event => resolve(event.target.result)
                    reader.onerror = error => reject(error)
                    reader.readAsText(file)
                })
            },
            setStartingTemplate(item) {
                this.html = item.template
            }
        }
    }
</script>