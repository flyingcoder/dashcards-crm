<template>
	<div class="settings">

		<v-tabs class="tabs" grow hide-slider height="60px" v-model="active_tab" :show-arrows="is_screen_medium_and_down">
			<v-tab
					v-for="tab in tabs"
					:key="tab.name"
					:href="`#${tab.name}`"
			>
				{{ tab.name }}
			</v-tab>
		</v-tabs>

		<v-tabs-items v-model="active_tab">
			<v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.name">
				<component :is="active_tab" v-if="active_tab === tab.name"></component>
			</v-tab-item>
		</v-tabs-items>

	</div>
</template>

<script src="./Settings.js"></script>

<style lang="scss" scoped>
	.settings {
		.tabs {
			box-shadow: 0px -2px 1px #e4d0d0;
			.v-tabs__item--active {
				background: #3B589E;
				color: white;
			}
		}
	}
</style>

<style scoped>
	>>> .tabs .v-tabs__item--active {
		background: #3B589E;
		color: white;
	}
</style>
