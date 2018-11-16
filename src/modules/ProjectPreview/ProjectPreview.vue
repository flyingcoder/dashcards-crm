<template>
	<div class="project-preview">

		<v-tabs class="tabs" grow hide-slider height="60px" v-model="active_tab" :show-arrows="is_screen_medium_and_down">
			<v-tab
					v-for="tab in tabs"
					:key="tab.name"
			>
				{{ tab.name }}
			</v-tab>
		</v-tabs>

		<v-tabs-items v-model="component">
			<v-tab-item :key="component" :value="component">

				<v-card flat>
					<component :id="project_id" :is="component"></component>
				</v-card>

			</v-tab-item>
		</v-tabs-items>


	</div>
</template>

<script src="./ProjectPreview.js"></script>
<style lang="scss" scoped src="./ProjectPreview.scss"></style>