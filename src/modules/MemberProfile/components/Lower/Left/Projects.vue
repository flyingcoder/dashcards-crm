<template>
    <v-card flat>
        <v-list dense v-if="items.length > 0">
            <v-list-item v-for="item in items" :key="item.id">
                <v-list-item-avatar>
                    <v-icon>mdi-folder</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                    <v-list-item-title> {{ item.title | ucwords }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.type|ucwords }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on" @click="goTo(item)">
                                <v-icon>mdi-arrow-right-circle-outline</v-icon>
                            </v-btn>
                        </template>
                        <span>Go to {{ item.type }}</span>
                    </v-tooltip>
                </v-list-item-action>
            </v-list-item>
            <v-list-item v-if="!noMoreData">
                <v-list-item-content>
                    <v-btn text depressed @click="loadMoreProject" :loading="btnloading">Load More</v-btn>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <Empty v-else headline="No project yet" icon="mdi-alpha-p-box-outline" />
    </v-card>
</template>

<script>
    import {list_functionality} from "@/services/list-functionality/list-functionality";

    export default {
        name: "Projects",
        mixins: [list_functionality],
        props:{
            user_id: [Number, String]
        },
        created() {
            this.getProjects()
        },
        methods: {
            getProjects() {
                this.fill_table_via_url(`api/projects/user-projects/${this.user_id}`)
            },
            loadMoreProject() {
                this.load_more_via_url(`api/projects/user-projects/${this.user_id}`)
            },
            goTo(item) {
                this.$router.push({
                    name: 'preview',
                    params: {id: item.id, type: item.type}
                })
            }
        }
    }
</script>

<style scoped>

</style>