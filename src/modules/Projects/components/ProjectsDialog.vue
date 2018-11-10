<template>
	<v-layout row justify-center>
		<v-dialog v-model="open" persistent max-width="600px">

			<v-card class="projects-dialog">

				<v-card-title>
					<div class="dialog-header">
						<span class="headline">{{ title }}</span>
						<v-icon @click="cancel">cancel</v-icon>
					</div>
				</v-card-title>

				<div class="dialog-buttons">

					<div class="clients-dropdown">
						<v-select label="Select Client"></v-select>
					</div>

					<div class="location-field">
						<v-text-field label="Location"></v-text-field>
					</div>

					<div class="services-dropdown">
						<v-select label="Select Service"></v-select>
					</div>

					<div class="due-date-dropdown">
						<v-select label="Select Due Date"></v-select>
					</div>

					<div class="members-dropdown">
						<v-select label="Select Member"></v-select>
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

<script src="./ProjectsDialog.js"></script>
<style lang="scss" scoped src="./ProjectsDialog.scss"></style>