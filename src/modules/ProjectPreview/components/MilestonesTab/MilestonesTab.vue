<template>
	<div class="milestones-tab">

		<milestone-dialog
				:dialog.sync="add_dialog"
				ref="add_dialog"
				dialog-title="Add Milestone"
				@save="add_new_milestone"
		/>

		<delete-dialog
				:open-dialog.sync="delete_dialog"
				title="Delete Milestone"
				text-content="Are you sure you want to delete this milestone?"
				@delete="delete_milestone"
		/>

		<milestone-dialog
				:dialog.sync="edit_dialog"
				ref="edit_dialog"
				dialog-title="Edit Milestone"
				:is-edit-dialog="edit_dialog"
				:fields-to-edit="edit_item"
				@save="update_milestone"
		/>

		<v-progress-linear v-show="loading" :indeterminate="true"></v-progress-linear>

		<div class="boxes-wrapper">
			<div v-for="box of boxes" :key="box.id">
				<dynamic-box
						:id="id"
						:box="box"
						@edit="open_edit_dialog"
						@delete="open_delete_confirmation"
				/>
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
					v-model="is_open_speed_dial"
					color="blue darken-2"
					dark
					fab
			>
				<v-icon>add</v-icon>
				<v-icon>close</v-icon>
			</v-btn>

			<div class="speed-dial-item" @click="add_dialog = true">
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