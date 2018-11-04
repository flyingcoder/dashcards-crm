<template>
	<div class="settings">

		<v-tabs class="tabs" grow hide-slider height="60px" v-model="active_tab" :show-arrows="is_medium_screen_and_down">
			<v-tab
					v-for="tab in tabs"
					:key="tab.name"
			>
				{{ tab.name }}
			</v-tab>
		</v-tabs>

		<v-tabs-items v-model="component">
			<v-tab-item :key="component" :id="component">

				<v-card flat>

					<component :is="component"></component>

				</v-card>

			</v-tab-item>
		</v-tabs-items>

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