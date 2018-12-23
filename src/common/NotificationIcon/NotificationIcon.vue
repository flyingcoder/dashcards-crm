<template>
	<v-menu class="chatlist__dropdown"
	        transition="slide-y-transition"
	        :nudge-left="115"
	        :nudge-bottom="5"
	        offset-y
	        :close-on-content-click="false"
	>
		<div class="chat__button"
		     :data-notify="count"
		     slot="activator"
		>
			<header-icon
					:image-src="imageSrc"
					:hovered-image-src="hoveredImageSrc"
			/>
		</div>

		<div class="chat__inbox">
			<div class="inbox__title">Message Notifications ({{count}})</div>
			<div class="msg__notif">
				<div class="user new__message"
				     v-for="friend in friends"
				     :key="friend.id"
				>
					<div class="user__img" >
						<v-img :src="require('@/assets/temp/user.png')"/>
						<span class="status" :class="friend.status"></span>
					</div>

					<div class="user__detail">
						<span class="user__name">{{friend.name}}</span>
						<span class="user__msg">{{friend.message}}</span>
					</div>
				</div>
			</div>
		</div>

	</v-menu>
</template>

<script src="./NotificationIcon.js"></script>
<style lang="scss" scoped src="./NotificationIcon.scss"></style>