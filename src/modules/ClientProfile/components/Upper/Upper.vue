<template>
	<div class="profile-upper">

		<div class="background">
			<v-icon class="camera">camera_alt</v-icon>
			<v-icon class="settings">settings</v-icon>
		</div>

		<div class="icons" v-if="user">
			<div class="user-img" @click="image_clicked">
				<img :src="user.image_url" alt="User">
			</div>
		</div>

		<AddPicture @picture-changed="set_user" />
		<UserInfo />

	</div>
</template>

<style lang="scss" scoped src="./Upper.scss">
</style>

<script src="./Upper.js">
</script>
