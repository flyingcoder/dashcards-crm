<template>
	<div class="profile-upper">

		<div class="background">
			<v-icon class="camera">camera_alt</v-icon>
			<v-icon class="settings">settings</v-icon>
		</div>

		<Icons @icon-clicked="handle_icon" />
		<AddPicture />
		<UserInfo />

	</div>
</template>

<style lang="scss" scoped src="./Upper.scss">
</style>

<script src="./Upper.js">
</script>
