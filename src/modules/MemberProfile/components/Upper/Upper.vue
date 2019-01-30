<template>
	<div class="profile-upper">

		<div class="background">
			<v-icon class="camera">camera_alt</v-icon>
			<v-icon class="settings">settings</v-icon>
		</div>
		
		<div class="icons">
			<div class="user-img" @click="image_clicked">
				<img src="@/assets/temp/user.png" alt="User">
			</div>
		</div>
		
		<AddPicture />
		<UserInfo />

	</div>
</template>

<style lang="scss" scoped src="./Upper.scss">
</style>

<script src="./Upper.js">
</script>
