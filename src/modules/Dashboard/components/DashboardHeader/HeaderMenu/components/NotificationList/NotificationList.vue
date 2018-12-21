<template>
	<v-menu class="notif__dropdown"
	        transition="slide-y-transition"
            :nudge-left="115"
	        :nudge-bottom="5"
	        offset-y
	        :close-on-content-click="false"
	>
		<div class="notif__button"
             :data-notify="dataNotify"
             slot="activator"
        >
			<header-icon
                :image-src="require('@/assets/icons/header/email__default.png')"
                :hovered-image-src="require('@/assets/icons/header/email.png')"
            />
		</div>

        <div class="notif__inbox">
            <div class="notif__title">Notifications ({{dataNotify}})</div>
            <div class="msg__notif">
                <div class="user new__notif" 
                    v-for="friend in friends"
                    :key="friend.id"
                >
                    <div class="user__img" >
                        <v-img :src="require('@/assets/temp/user.png')"/>
                    </div>

                    <div class="user__detail">
                        <div class="user__activity"> <b>{{friend.name}}</b> {{friend.activity}}</div>
                    </div>
                </div>
            </div>
        </div>

	</v-menu>
</template>

<script src="./NotificationList.js">
</script>
<style lang="scss" scoped src="./NotificationList.scss">
</style>
