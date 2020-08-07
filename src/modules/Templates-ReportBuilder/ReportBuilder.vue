<template>
    <div class="report-builder">
        <v-card>
            <v-card-text>
                <v-text-field dense filled hide-details label="Report Template Name *" v-model="report_template_name"
                              prepend-inner-icon="mdi-format-color-highlight"
                />
                <Builder v-model="structures" />
            </v-card-text>
            <v-card-actions>
                <v-card-text>
                    <v-btn :loading="btnloading" :disabled="!is_valid" @click="saveTemplate">
                        {{ button_label }}
                    </v-btn>
                </v-card-text>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import Builder from "@/modules/Forms-Builder/components/Builder/Builder.vue";
    import request from "@/services/axios_instance";

    export default {
        name: "ReportBuilder",

        components: {
            Builder
        },
        data: () => ({
            existing: [],
            structures: [],
            report_template_name: null,
            isEdit: false,
            reportId: null,
            reportToEdit: null,
            btnloading: false
        }),
        computed: {
            paths() {
                return [
                    {text: 'Dashboard', disabled: false, route: {name: 'default-content'}},
                    {text: 'Templates', disabled: false, route: {name: 'templates'}},
                    {text: !this.isEdit ? 'New Report' : 'Edit Report', disabled: true, route: null}
                ]
            },
            is_valid() {
                return this.validate(false)
            },
            button_label() {
                return this.isEdit ? 'Update Template' : 'Save New Template'
            }
        },
        created() {
            this.getExistingReportTemplates()
        },
        mounted() {
            if (this.$route.params.id > 0) {
                this.isEdit = true
                this.reportId = this.$route.params.id
                this.getReportTemplate(this.$route.params.id)
            }
            this.$event.$emit('path-change', this.paths)
        },
        methods: {
            getExistingReportTemplates() {
                request.get(`api/template/reports`)
                    .then(({data}) => {
                        this.existing = data
                    })
            },
            getReportTemplate(id) {
                request.get(`api/template/reports/${id}`)
                    .then(({data}) => {
                            this.reportToEdit = data
                            this.report_template_name = this.reportToEdit.name
                            this.structures = this.reportToEdit.meta.template.value
                        },
                        error => {
                            this.$event.$emit('open_snackbar', `No report template found for id: ${id}`, 'error')
                            this.$router.push({name: 'templates'})
                        }
                    )
            },
            validate(withMessage) {
                if (this.structures.length === 0) {
                    if (withMessage)
                        this.$event.$emit('open_snackbar', 'No content found!', 'error')
                    return false
                }
                if (!this.report_template_name) {
                    if (withMessage)
                        this.$event.$emit('open_snackbar', 'Report Template Name is required', 'error')
                    return false
                }
                return true
            },
            saveTemplate() {
                if (this.validate(true)) {
                    this.btnloading = true
                    if (this.isEdit) {
                        request.put(`api/template/reports/${this.reportId}`, {
                            name: this.report_template_name,
                            data: this.structures
                        }).then(({data}) => {
                            this.$event.$emit('open_snackbar', data.message)
                            this.$router.push({name: 'templates'})
                        }).finally(() => this.btnloading = false)
                    } else {
                        request.post(`api/template/reports`, {
                            name: this.report_template_name,
                            data: this.structures
                        }).then(({data}) => {
                            this.$event.$emit('open_snackbar', data.message)
                            this.$router.push({name: 'templates'})
                        }).finally(() => this.btnloading = false)
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import '~@/sass/_variables';

    @include pagePadding('.report-builder');
</style>