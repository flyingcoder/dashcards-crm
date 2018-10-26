<template>
	<v-menu class="user-dropdown"
	        transition="slide-y-transition"
	        :nudge-width="100"
	        :nudge-bottom="10"
	        bottom
	        offset-y
	>
		<div class="dropdown" slot="activator">
			<v-layout row align-center>
				<v-flex xs6>
					<v-avatar
							class="user-icon responsive-img"
							:size="avatarSize"
					>
						<img  class="atomic-icon" src="@/assets/temp/atomic.png" width="45px" alt="user">
					</v-avatar>
				</v-flex>
				<v-flex xs6>

					<div class="user-chevron">
						<img src="@/assets/icons/header/chevron-down.svg" width="25px" class="chevron responsive-img" alt="chevron">
					</div>
				</v-flex>
			</v-layout>

		</div>

		<v-list>
			<v-list-tile
					class="h__list"
					v-for="(item, index) in items"
					:key="index"
					@click="handle_action(item.action)"
			>
				<v-list-tile-action class="h__icons">
					<v-img max-width="25px" :src="item.icon" />
				</v-list-tile-action>

				<v-list-tile-title class="h__title">{{ item.title }}</v-list-tile-title>
			</v-list-tile>
		</v-list>
	</v-menu>
</template>

<script>
	export default {
		name: 'Dropdown',

		data: () => ({
			avatarSize: 'auto',
			items: [
				{
					title: 'Profile',
					icon: require('@/assets/icons/header/user/profile.svg')
				},
				{
					title: 'Settings',
					icon: require('@/assets/icons/header/user/settings.svg')
				},
				{
					title: 'Help',
					icon: require('@/assets/icons/header/user/help.svg')
				},
				{
					title: 'Lock',
					icon: require('@/assets/icons/header/user/lock.svg')
				},
				{
					title: 'Logout',
					icon: require('@/assets/icons/header/user/logout.svg'),
					action: 'logout'
				}
			]
		}),

		methods: {
			handle_action (action) {
				this[action]() //i.e the action is logout will call this.logout()
			},
			logout() {
				this.$auth.logout()
			},
		}

	}
</script>

<style lang="scss" scoped>
	.user-dropdown {
		.atomic-icon {
			width: 30px;
		}

		.dropdown {
			width: 75px;
		}
	}
</style>