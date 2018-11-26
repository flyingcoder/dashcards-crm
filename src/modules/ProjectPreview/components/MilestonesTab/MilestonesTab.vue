<template>
	<div class="milestones__tab">

		<milestone-tab-dialog
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

		<milestone-tab-dialog
				:dialog.sync="edit_dialog"
				ref="edit_dialog"
				dialog-title="Edit Milestone"
				:is-edit-dialog="edit_dialog"
				:fields-to-edit="edit_item"
				@save="update_milestone"
		/>

		<select-template-dialog
				:open.sync="select_template_dialog"
				@save="add_template"
		/>

		<add-task-dialog
				:dialog.sync="add_task_dialog"
				ref="add_task_dialog"
				dialog-title="Add Task"
				@save="add_new_task"
		/>

		<v-progress-linear v-show="loading" :indeterminate="true"></v-progress-linear>

		<v-layout row wrap class="boxes__wrapper">
			<v-flex md6 xs12 class="milestone__box" v-for="(box, index) of boxes" :key="box.id">
				<div class="milestone__dynamic_box">
					<dynamic-box
							:id="id"
							:box="box"
							@edit="open_edit_dialog"
							@delete="open_delete_confirmation"
							@remove-task="remove_task(index, $event)"
							@add-task="open_add_task_dialog"
					/>
				</div>
			</v-flex>
		</v-layout>

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

			<div class="speed__dial_item" @click="add_dialog = true">
				Add Milestone
				<v-btn slot="activator" color="indigo" dark small fab>
					<v-icon>add</v-icon>
				</v-btn>
			</div>

			<div class="speed__dial_item" @click="open_select_template_dialog">
				Select Template
				<v-btn slot="activator" :disabled="boxes.length > 0" color="indigo" small fab>
					<v-icon color="white">touch_app</v-icon>
				</v-btn>
			</div>
		</v-speed-dial>

	</div>
</template>

<script src="./MilestonesTab.js"></script>
<style lang="scss" scoped src="./MilestonesTab.scss"></style>