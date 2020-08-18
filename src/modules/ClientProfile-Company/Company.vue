<template>
    <div class="company-wrapper">
        <v-row v-if="user">
            <v-col xs="12" sm="6" md="6" v-for="company in companies" :key="company.id">
                <v-card flat>
                    <v-card-text>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="title">{{ company.name }}</v-card-title>
                                <v-card-subtitle v-if="company.short_description">
                                    <v-icon left>mdi-format-quote-open-outline</v-icon>
                                    {{ company.short_description }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="company.domain">
                                    <v-icon left>mdi-web</v-icon>
                                    {{ company.domain }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="company.email">
                                    <v-icon left>mdi-email-receive-outline</v-icon>
                                    {{ company.email }}
                                </v-card-subtitle>
                                <v-card-subtitle v-if="company.long_description">
                                    <v-icon left>mdi-book-information-variant</v-icon>
                                    {{ company.long_description }}
                                </v-card-subtitle>
                            </div>
                            <v-avatar class="ma-3 cursor-pointer" size="125" tile @click="changeIcon(company)">
                                <v-img v-if="company.company_logo" :src="company.company_logo" />
                                <v-icon v-else x-large>mdi-image-edit-outline</v-icon>
                            </v-avatar>
                        </div>
                        <v-card-actions>
                            <v-btn icon @click="updateCompany(company)">
                                <v-icon>mdi-circle-edit-outline</v-icon>
                            </v-btn>
                            <v-btn icon disabled>
                                <v-icon>mdi-delete-circle-outline</v-icon>
                            </v-btn>
                        </v-card-actions>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <IconUploader :dialog="open_dialog" :filename="filename" @uploaded-data="updateIcon" />
        <update-company-modal :company="activeCompany" @updated="handleUpdate" :open-dialog.sync="update_dialog" />
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import UpdateCompanyModal from "./UpdateCompanyModal.vue";
    import IconUploader from "@/common/Uploaders/IconUploader.vue";
    import request from "@/services/axios_instance";
    import _cloneDeep from 'lodash/cloneDeep'

    export default {
        name: "Company",
        components: {
            IconUploader, UpdateCompanyModal
        },
        props: {
            user_id: [Number, String]
        },
        computed: {
            ...mapGetters('memberProfile', ['user']),
            filename() {
                return this.activeCompany ? this.activeCompany.name : ''
            }
        },
        mounted() {
            if (this.user)
                this.companies = _cloneDeep(this.user.client_companies)
        },
        data: () => ({
            activeCompany: {},
            update_dialog: false,
            open_dialog: false,
            companies: []
        }),
        methods: {
            changeIcon(company) {
                this.activeCompany = company
                this.open_dialog = true
            },
            updateIcon(data) {
                let payload = {url: data.url, logo_details: data};
                request.post(`api/company/${this.activeCompany.id}/logo/via-url`, payload)
                    .then(({data}) => {
                        this.handleUpdate(data)
                        this.open_dialog = false
                    })
            },
            updateCompany(company) {
                this.activeCompany = company
                this.update_dialog = true
            },
            handleUpdate(company) {
                let index = this.companies.findIndex(item => item.id == company.id)
                if (~index)
                    this.companies.splice(index, 1, company)
            }
        }
    }
</script>

<style lang="scss">
    .company-wrapper {
        padding: 20px;
    }
</style>