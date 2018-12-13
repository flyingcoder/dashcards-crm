<template>
    <div class="header-menu">

        <add-cards />

        <header-icon
            :image-src="require('@/assets/icons/header/email__default.png')"
            :hovered-image-src="require('@/assets/icons/header/email.png')"
        />

        <header-icon
            :image-src="require('@/assets/icons/header/notification__default.png')"
            :hovered-image-src="require('@/assets/icons/header/notification.png')"
        />

        <header-icon
            :image-src="require('@/assets/icons/header/chat__default.png')"
            :hovered-image-src="require('@/assets/icons/header/chat.png')"
        />

        <dropdown /> <!--custom component-->

        <div class="try__premium">
            <div class="premium__btn">Try Premium Free for 1 Month</div>
        </div>

    </div>
</template>
<script src="./HeaderMenu.js">
</script>
<style lang="scss" scoped src="./HeaderMenu.scss">
</style>
