<template>
    <div class="client-profile">
        <!-- <table-header :paths="paths" :no-button="true" /> -->
        <div class="profile mt-1">
            <div class="profile-content">
                <Upper :currentuserid="user_id" @client-updated="client_updated" />
                <v-row no-gutters>
                    <v-col cols="12" class="px-2">
                    <Lower :user_id="user_id" />
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script src="./ClientProfile.js"></script>
<style lang="scss" scoped src="./ClientProfile.scss"></style>
