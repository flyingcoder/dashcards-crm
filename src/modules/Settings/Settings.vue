<template>
	<div class="settings">

		<v-tabs class="tabs" grow hide-slider height="60px" :show-arrows="is_medium_screen_and_down">
			<v-tab
					v-for="tab in tabs"
					:key="tab.id"
			>
				{{ tab.name }}
			</v-tab>
		</v-tabs>

	</div>
</template>

<script src="./Settings.js"></script>

<style lang="scss" scoped>
	.settings {
		.tabs {
			box-shadow: 0px -2px 1px #e4d0d0;
		}
		/deep/ .v-tabs__item--active {
			background: #3B589E;
			color: white;
		}
	}
</style>