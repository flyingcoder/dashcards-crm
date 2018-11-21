<template>
	<div class="milestones-tab">

		<v-progress-linear v-show="loading" :indeterminate="true"></v-progress-linear>

		<div v-show="!loading" class="boxes-wrapper">
			<div v-for="box of boxes" :key="box.id">
				<dynamic-box :id="id" :box="box" />
			</div>
		</div>

		<v-speed-dial
				v-model="is_open_speed_dial"
				fixed
				bottom
				right
				transition="slide-y-reverse-transition"
		>
			<v-btn
					slot="activator"
					v-model="fab"
					color="blue darken-2"
					dark
					fab
			>
				<v-icon>add</v-icon>
				<v-icon>close</v-icon>
			</v-btn>

			<div class="speed-dial-item">
				Add Milestone
				<v-btn slot="activator" color="indigo" dark small fab>
					<v-icon>add</v-icon>
				</v-btn>
			</div>

			<div class="speed-dial-item">
				Select Milestone
				<v-btn slot="activator" color="indigo" dark small fab>
					<v-icon>touch_app</v-icon>
				</v-btn>
			</div>
		</v-speed-dial>

	</div>
</template>

<script src="./MilestonesTab.js"></script>
<style lang="scss" scoped src="./MilestonesTab.scss"></style>