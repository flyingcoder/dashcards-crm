<template>
  <div class="header-menu">
    <add-cards />

    <notification-icon
      :image-src="mail_icon"
      :hovered-image-src="hovered_mail_icon"
      :count="null"
      type="mail"
    />

    <notification-icon
      :image-src="notification_icon"
      :hovered-image-src="hovered_notification_icon"
      :count="notification"
      type="notification"
    />

    <notification-icon
      :image-src="chat_icon"
      :hovered-image-src="hovered_chat_icon"
      :count="chat"
      type="chat"
    />

    <dropdown />
    <!--custom component-->

    <div class="try__premium">
      <div class="premium__btn" @click="go_to_pricing_page">
        Try Premium Free for 1 Month
      </div>
    </div>
  </div>
</template>
<script src="./HeaderMenu.js">
</script>
<style lang="scss" scoped src="./HeaderMenu.scss">
</style>
