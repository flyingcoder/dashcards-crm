<template>
    <custom-dialog title="Update Company Info" button1-text="Cancel"
                   button2-text="Save" :open.sync="open"
                   @button2="save" :max-width="700"
    >
        <template v-slot:content>
                <v-row v-if="comp">
                    <v-col class="mb-1" cols="12">
                        <v-text-field filled label="Company Name *" dense class="fullwidth" hide-details
                                      v-model="comp.name" :value="comp.name"
                        />
                    </v-col>
                    <v-col class="mb-1" cols="12">
                        <v-text-field filled label="Company Slogan" dense class="fullwidth" hide-details
                                      v-model="comp.short_description" :value="comp.short_description"
                        />
                    </v-col>
                    <v-col class="mb-1" cols="12">
                        <v-textarea :rows="2" filled label="Long Description" dense class="fullwidth" hide-details
                                    v-model="comp.long_description" :value="comp.long_description"
                        />
                    </v-col>
                    <v-col class="mb-1" cols="12">
                        <v-text-field filled label="Company Website" dense class="fullwidth" hide-details
                                      v-model="comp.domain" :value="comp.domain"
                        />
                    </v-col>
                    <v-col class="mb-2" cols="6">
                        <v-text-field filled type="email" label="Company Email" dense class="fullwidth" hide-details
                                      v-model="comp.email" :value="comp.email"
                        />
                    </v-col>
                    <v-col class="mb-2" cols="6">
                        <v-text-field filled label="Company Address" dense class="fullwidth" hide-details
                                      v-model="comp.address" :value="comp.address"
                        />
                    </v-col>
                    <v-col cols="12"><span class="required">*</span> Required Fields</v-col>
                </v-row>
        </template>
    </custom-dialog>
</template>

<script>
    import CustomDialog from "@/common/BaseComponents/CustomDialog/CustomDialog.vue";
    import _cloneDeep from 'lodash/cloneDeep'
    import {api_to} from "../Settings-Company/api";

    export default {
        name: "UpdateCompanyModal",
        components: {
            CustomDialog
        },
        props: {
            openDialog: Boolean,
            company: Object
        },
        data: () => ({
            open: false,
            comp: null,
            btnloading: false
        }),
        computed: {},
        watch: {
            openDialog(val) {
                this.open = val
            },
            open(val) {
                this.$emit('update:openDialog', val)
            },
            company: {
                handler(new_value) {
                    if (new_value)
                        this.comp = _cloneDeep(new_value)
                },
                immediate: true,
                deep: true
            }
        },
        methods: {
            save() {
                if (!this.comp.name){
                    this.$event.$emit('open_snackbar', 'Company name is required!')
                    return
                }
                let payload = this.comp
                api_to.update_company_profile(this.company.id, payload)
                 .then(({data}) => {
                     this.$emit('updated', data)
                     this.$event.$emit('open_snackbar', 'Company updated!')
                     this.closeDialog()
                 })
                .finally(() => { this.btnloading = false })
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

<style scoped>

</style>