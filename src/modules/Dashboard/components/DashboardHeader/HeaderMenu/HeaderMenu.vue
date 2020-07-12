<template>
    <div class="header-menu">
        <logon-label />
        <connect-app v-if="$route.name !== 'connect'" />
        <add-cards v-if="$route.name === 'default-content'" />
        <!-- <MailIcon /> -->
        <!-- hide temporary -->
        <NotificationIcon />
        <ChatIcon />
        <dropdown />
        <div class="try__premium" >
            <div class="premium__btn" @click="go_to_pricing_page" v-if="!company_is_subscribed">
                Try Premium Free for 1 Month
            </div>
            <!-- <div class="premium__btn" v-else>
                <v-icon left large>mdi-briefcase-check-outline</v-icon> Subscribed
            </div> -->
        </div>
    </div>
</template>
<script src="./HeaderMenu.js"></script>
<style lang="scss" scoped src="./HeaderMenu.scss"></style>