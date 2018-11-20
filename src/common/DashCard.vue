<template>
	<div class="dash-card">

		<div class="card-header">
			<div class="title">{{title}}</div>

			<slot name="actions">
				<div class="actions">
					<v-icon class="action">crop</v-icon>
					<v-icon class="action">minimize</v-icon>
					<v-icon class="action">zoom_out_map</v-icon>
					<v-icon class="action">cancel</v-icon>
				</div>
			</slot>

		</div>

		<div class="card-content">
			<slot name="content" />
		</div>

		<div class="card-footer">
			<slot name="footer">VIEW MORE</slot>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'DashCard',
		props: {
			title: String
		}
	}
</script>

<style lang="scss" scoped>
	.dash-card {
		padding: 10px;
		border: 1px solid darkseagreen;
		border-radius: 10px;
		display: grid;
		grid-template-rows: 40px 1fr 40px;

		.card-header {
			display: grid;
			grid-template-columns: 5fr 3fr;
			align-items: center;
		}

		.actions {
			display: flex;
			justify-content: space-around;
			> .action {
				cursor: pointer;
			}
		}

		.card-footer {
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
		}

	}
</style>