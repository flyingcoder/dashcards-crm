<template>
	<div class="project-hq">

		<v-tabs class="tabs" grow hide-slider height="60px" v-model="active_tab">
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

<script src="./ProjectPreview.js"></script>
<style lang="scss" scoped src="./ProjectPreview.scss"></style>