<template>
	<div class="logon-label">
		<v-switch :value="switch1" :disabled="disabled" @change="switch1_changed">
			<template slot="label">
				<span class="label">Log on</span>
			</template>
		</v-switch>
	</div>
</template>

<script>
	import makeRequestTo from '@/services/makeRequestTo'

	export default {
		name: 'LogOnLable',

		data: () => ({
			switch1: true,
			disabled: false
		}),

		methods: {
			switch1_changed(new_val) {
				const type = new_val ? 'start': 'stop'
				this.disabled = true
				makeRequestTo.change_timer(type)
					.then(response => {
						this.disabled = false
						const timer_message = new_val ? 'started' : 'stopped'
						this.$event.$emit('open_snackbar', `Timer ${timer_message}`, 'red', 'success', 1500)
					})
			}
		}

	}
</script>

<style lang="scss" scoped>
	.logon-label {
		background: white;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 8px;
		border-radius: 14px;

		.label {
			font-family: "Roboto", sans-serif;
			font-size: 15px;
			font-weight: 500;
			letter-spacing: .02em;
			line-height: 1;
			padding-left: 10px;
			border-left: 1px solid #dce1e5;
			color: black;
		}

	}
</style>