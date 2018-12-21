<template>
    <div class="header-menu">

        <add-cards />

        <notification-list />

        <header-icon
            :image-src="require('@/assets/icons/header/notification__default.png')"
            :hovered-image-src="require('@/assets/icons/header/notification.png')"
        />

        <chat-list />

        <dropdown /> <!--custom component-->

        <div class="try__premium" @click="go_to_pricing_page">
            <div class="premium__btn">Try Premium Free for 1 Month</div>
        </div>

    </div>
</template>
<script src="./HeaderMenu.js">
</script>
<style lang="scss" scoped src="./HeaderMenu.scss">
</style>
