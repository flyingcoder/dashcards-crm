<template>
    <div class="company-wrapper pa-4">
        <v-card flat v-if="user">
            <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-title class="headline">{{ user.company.name }}</v-card-title>
                    <v-card-subtitle v-if="user.company.short_description">
                        {{ user.company.short_description }}
                    </v-card-subtitle>
                </div>

                <v-avatar
                        class="ma-3"
                        size="125"
                        tile
                >
                    <v-img v-if="user.company.company_logo" :src="user.company.company_logo" />
                    <v-icon v-else large>mdi-city-variant-outline</v-icon>
                </v-avatar>
            </div>
        </v-card>
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