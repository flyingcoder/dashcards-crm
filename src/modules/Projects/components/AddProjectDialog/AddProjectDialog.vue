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

					<div class="location-field">
						<v-text-field label="Location"></v-text-field>
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

					<date-pickers />

					<div class="members-dropdown">
						<auto-complete
								v-model="member.selected"
								:items="member.items"
								:is-loading="member.loading"
								label="Search Member"
								@searched="get_searched_items('member', $event)"
						/>
					</div>

					<div class="attachment">
						<v-btn>Attachment</v-btn>
					</div>

				</div>

				<div class="project-title">
					<v-text-field label="Untitled Project"></v-text-field>
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

				<div class="project-comment">
					<h3>Add Comment</h3>
					<v-textarea box></v-textarea>
				</div>

				<v-card-actions>
					<div class="dialog-actions">
						<v-btn>Save</v-btn>
						<v-btn @click="cancel">Cancel</v-btn>
					</div>
				</v-card-actions>

			</v-card>
		</v-dialog>
	</v-layout>
</template>

<script src="./AddProjectDialog.js"></script>
<style lang="scss" scoped src="./AddProjectDialog.scss"></style>