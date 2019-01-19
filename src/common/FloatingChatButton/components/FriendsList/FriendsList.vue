<template>
	<v-menu top
	        slide-y-reverse-transition
	        v-model="fabs"
	        :close-on-content-click="false"
	        :nudge-top="60"
	        class="chat__position"
	>
		<v-btn class="chat__button"
		       :data-notify="online_users.length"
		       slot="activator"
		       v-model="fabs"
		       color="#3b589e"
		       dark
		       fab
		>
			<v-icon>message</v-icon>
			<v-icon>close</v-icon>
		</v-btn>

		<v-card class="chat__inbox">
				<div class="inbox__title">Online Friends ({{online_users.length}})</div>
				<div class="user new__message"
				     v-for="user of online_users"
				     :key="user.id"
				     @click="open_chat_box(user)"
				>
					<div class="user__img" >
						<v-img :src="require('@/assets/temp/user.png')"/>
						<span class="status" :class="[user.is_online ? 'online' : 'offline']"></span>
					</div>

					<div class="user__detail">
						<span class="user__name">{{user.name}}</span>
					</div>
				</div>
		</v-card>
	</v-menu>
</template>

<script src="./FriendsList.js">
</script>
<style lang="scss" scoped src="./FriendsList.scss">
</style>
