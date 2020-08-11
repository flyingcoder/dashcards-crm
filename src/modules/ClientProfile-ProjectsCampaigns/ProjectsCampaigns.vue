<template>
    <v-card flat>
        <v-card-text>
            <Projects :user_id="user_id"/>
        </v-card-text>
    </v-card>
</template>

<script>
    import Projects from "@/modules/MemberProfile/components/Lower/Left/Projects.vue";

    export default {
        name: "ProjectsCampaigns",
        components: {
            Projects
        },
        data: () => ({
            user_id: null
        }),
        created() {
            this.user_id = this.$route.params.user_id
        }
    }
</script>

<style scoped>

</style>