<template>
	<div class="chatbox">

		<v-card class="chat__header" @click="toggle_active_conv(conv.id)">
			<div class="user__img">
				<v-img :src="require('@/assets/temp/user.png')"/>
				<span :class="['status', conv.user.is_online ? 'online': 'offline']"></span>
			</div>

			<div class="user__detail">
				<div class="user__name">{{ conv.user.name }}</div>
			</div>

			<v-icon class="close__btn">
				close
			</v-icon>
		</v-card>

		<transition name="fadeHeight" mode="out-in">
			<v-card class="chat__body" v-show="conv.open">
				<div class="messages">

					<div class="no-messages" v-if="!conv.messages.length">
						No messages yet
					</div>

					<!--<div class="message">-->
						<!--<div class="sender">-->
							<!--<div class="sender__img">-->
								<!--<v-img :src="require('@/assets/temp/user.png')"/>-->
								<!--<span class="status online"></span>-->
							<!--</div>-->
							<!--<h5 class="sender__name"> Mohammad Alongan </h5>-->
							<!--<span class="date"> 1 hour ago </span>-->
						<!--</div>-->
						<!--<p class="sender__message">Hello</p>-->
					<!--</div>-->

					<!--<div class="message me">-->
						<!--<div class="sender">-->
							<!--<div class="sender__img">-->
								<!--<v-img :src="require('@/assets/temp/user.png')"/>-->
								<!--<span class="status online"></span>-->
							<!--</div>-->
							<!--<h5 class="sender__name"> Me </h5>-->
							<!--<span class="date"> 59 min ago </span>-->
						<!--</div>-->
						<!--<p class="sender__message">Hi</p>-->
					<!--</div>-->

				</div>

				<div class="write">
					<v-text-field solo flat hide-details color="#667187"
					              label="Type a message..."></v-text-field>
					<v-icon color="#3b589e" class="send">send</v-icon>
				</div>

			</v-card>
		</transition>

	</div>
</template>

<script src="./ChatBox.js">
</script>
<style lang="scss" scoped src="./ChatBox.scss">
</style>
