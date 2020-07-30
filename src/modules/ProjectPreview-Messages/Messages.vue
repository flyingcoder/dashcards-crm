<template>
    <div class="message__tab">
        <v-row>
            <v-col md="3">
                <UsersList :id="id" />
            </v-col>
            <v-col md="9">
                <v-tabs class="tabs" centered grow hide-slider height="45" :show-arrows="is_screen_medium_and_down" v-model="active_tab">
                    <v-tab v-for="tab in tabs" :key="tab.id" :to="tab.route" exact>
                        {{ tab.name }}
                    </v-tab>
                </v-tabs>
                <router-view />
            </v-col>
        </v-row>
    </div>
</template>
<script src="./Messages.js"></script>
<style lang="scss" scoped src="./Messages.scss"></style>