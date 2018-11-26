<template>
	<v-layout row justify-center>
		<v-dialog v-model="open" persistent max-width="700px">

			<v-card class="projects-dialog">

				<v-card-title>
					<div class="dialog-header">
						<span class="headline">{{ title }}</span>
						<v-icon @click="cancel">cancel</v-icon>
					</div>
				</v-card-title>

				<div class="dialog-buttons">

					<div class="clients-dropdown">
						<auto-complete
								v-model="client.selected"
								:items="client.items"
								:is-loading="client.loading"
								label="Search Client"
								@searched="get_searched_items('client', $event)"
						/>
					</div>

					<div class="services-dropdown">
						<auto-complete
								v-model="service.selected"
								:items="service.items"
								:is-loading="service.loading"
								label="Search Service"
								@searched="get_searched_items('service', $event, true)"
						/>
					</div>

					<date-pickers
							:start-date.sync="date_pickers.start_date"
							:end-date.sync="date_pickers.end_date"
					/> <!--Due Date field-->

					<members-dropdown :members.sync="members.selected"
					                  :member-items="members.items"
					/>

					<div class="attachment">
						<v-btn>Attachment</v-btn>
					</div>

				</div>

				<div class="project-title">
					<v-text-field v-model.trim="project_title" label="Project Title"></v-text-field>
				</div>

				<div class="project-description">
					<div class="quill-editor-example">
						<quill-editor v-model="quill_editor.content"
						              :options="quill_editor.editorOption"
						              @blur=""
						              @focus=""
						              @ready="">
						</quill-editor>
					</div>
				</div>

				<div class="project-comment" v-if="!isEditDialog">
					<h3>Add Comment</h3>
					<v-textarea box v-model.trim="comment"></v-textarea>
				</div>

				<v-card-actions>
					<div class="dialog-actions">
						<v-btn :disabled="disabled" @click="save">Save</v-btn>
						<v-btn @click="cancel">Cancel</v-btn>
					</div>
				</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script src="./ProjectDialog.js"></script>
<style lang="scss" scoped src="./ProjectDialog.scss"></style>