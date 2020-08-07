<template>
    <custom-dialog
            :title="title"
            :open.sync="open"
            :hasFooter="true"
            maxWidth="900"
    >
        <template v-slot:content>
            <v-card flat>
                <v-card-text>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field :aria-required="true" hide-details dense v-model.trim="report_title" filled
                                          label="Report Title *"
                                          prepend-inner-icon="text_fields"
                            />
                        </v-col>
                        <v-col cols="6">
                            <v-select :aria-required="true" dense :items="report_templates"
                                      item-text="name"
                                      return-object
                                      v-model="report_template"
                                      hide-details filled :label="select_template_label"
                                      prepend-inner-icon="mdi-clipboard-outline"
                            >
                                <template v-slot:no-data>
                                    <v-alert color="cyan" class="mx-2" colored-border>
                                        No report template yet.
                                    </v-alert>
                                </template>
                                <template v-slot:append-outer>
                                    <v-tooltip left>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon @click="$router.push({name: 'report-builder-create'})"
                                                    v-bind="attrs" v-on="on"
                                            >
                                                mdi-plus-circle-outline
                                            </v-icon>
                                        </template>
                                        <span>Create New Report Template</span>
                                    </v-tooltip>
                                </template>
                            </v-select>
                        </v-col>
                    </v-row>
                    <FillUp :key="keyy" v-model="structures" :value="structures" />
                    <Empty v-if="!hasStructures" headline="Select a template or create one first"
                           icon="mdi-clipboard-outline"
                    />
                </v-card-text>
            </v-card>
        </template>
        <template v-slot:entire-actions>
            <v-spacer />
            <v-btn @click="$emit('cancel')" :disabled="btnloading">Cancel</v-btn>
            <v-btn @click="save_report" :disabled="isDisabled" :loading="btnloading">{{ btn_label }}</v-btn>
            <v-spacer />
        </template>
    </custom-dialog>
</template>

<script>
    import request from "@/services/axios_instance";
    //components
    import CustomDialog from "@/common/BaseComponents/CustomDialog/CustomDialog.vue";
    import FillUp from "@/modules/Forms-Builder/components/Builder/FillUp.vue";

    export default {
        name: "ReportViaTemplate",
        components: {
            FillUp,
            CustomDialog
        },
        props: {
            title: {type: String, default: 'Add Report'},
            report: Object,
            openDialog: Boolean,
            isEdit: {type: Boolean, default: false}
        },
        created() {
            this.getTemplates()
            this.$event.$on('btnloading_off', () => {
                this.btnloading = false
            })
        },

        data: () => ({
            open: false,
            list: [],
            report_title: '',
            report_template: null,
            btnloading: false,
            keyy: 1,
            datus: []
        }),

        watch: {
            openDialog(val) {
                this.open = val
            },
            report: {
                handler(val) {
                    if (this.isEdit && val) this.set_update_fields(val)
                },
                immediate: true,
                deep: true
            },
            open(val) {
                this.$emit('update:openDialog', val)
                this.btnloading = false
            },
            report_template(val) {
                if (val) {
                    this.structures = val.template
                }
            },
        },
        computed: {
            btn_label() {
                return this.isEdit ? 'Update Report' : 'Save Report'
            },
            select_template_label() {
                return this.isEdit ? 'Select Report Template' : 'Select Report Template *'
            },
            report_templates() {
                return this.list.map(item => {
                    return {name: item.name, template: item.meta.template.value, id: item.id}
                })
            },
            isDisabled() {
                return this.validate(false) === false
            },
            structures: {
                get() {
                    return this.datus
                },
                set(val) {
                    this.datus = val
                }
            },
            hasStructures() {
                return this.structures.length > 0
            }
        },
        methods: {
            set_update_fields(report) {
                if (report) {
                    this.report_title = report.title
                    this.datus = report.props.template
                    this.keyy += 1
                }
            },
            validate(withMessage) {
                if (!this.report_title) {
                    if (withMessage)
                        this.$event.$emit('open_snackbar', 'Report title is required', 'error')
                    return false
                }
                for (let i = 0; i < this.structures.length; i++) {
                    if (this.structures[i].required && (!this.structures[i].value || this.structures[i].value.trim() === '')) {
                        if (withMessage)
                            this.$event.$emit('open_snackbar', 'Fields with * are required', 'error')
                        return false
                    }
                }
                return true
            },
            showDialog() {
                this.open = true
            },
            closeDialog() {
                this.open = false
            },
            getTemplates() {
                request.get(`api/template/reports`)
                    .then(({data}) => {
                        this.list = data
                    })
            },
            save_report() {
                if (!this.validate(true)) {
                    return
                }
                let payload = {
                    title: this.report_title,
                    structures: this.structures,
                    template: this.report_template ? this.report_template.id : null
                }
                if (this.isEdit) {
                    payload.id = this.report.id
                    if (!payload.template) {
                        payload.template = this.report.props.template_id
                    }
                }
                this.$emit('save', payload)
            }
        }
    }
</script>

<style scoped>

</style>