<template>
    <div class="company-wrapper">
        <v-row v-if="user">
            <v-col xs="12" sm="6" md="4" v-for="company in user.client_companies" :key="company.id">
                <v-card flat>
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="headline">{{ company.name }}</v-card-title>
                            <v-card-subtitle v-if="company.short_description">
                                {{ company.short_description }}
                            </v-card-subtitle>
                        </div>
                        <v-avatar class="ma-3" size="125" tile>
                            <v-img v-if="company.company_logo" :src="company.company_logo" />
                            <v-icon v-else large>mdi-city-variant-outline</v-icon>
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "Company",
        props: {
            user_id: [Number, String]
        },
        computed: {
            ...mapGetters('memberProfile', ['user']),
        }
    }
</script>

<style lang="scss">
    .company-wrapper {
        padding: 20px;
    }
</style>