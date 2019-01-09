<template>
	<div class="hours__box">
		<div class="box1 box" v-if="task_belongs_to_logged_user" @click="handle_timer">
			<v-icon small color="white" v-if="timer_started">pause</v-icon>
			<v-icon small color="white" v-else>play_arrow</v-icon>
		</div>
		<div class="box2 box">{{ get_hours() }} <span>HR</span></div>
		<div class="box3 box">{{ get_mins() }} <span>M</span></div>
		<div class="box4 box">{{ get_secs() }} <span>S</span></div>
	</div>
</template>

<script src="./HoursBox.js">
</script>
<style lang="scss" scoped src="./HoursBox.scss">
</style>
