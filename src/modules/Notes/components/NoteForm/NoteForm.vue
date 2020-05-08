<template>
    <div class="no-data" v-if="!loading && !note">
        <Empty headline="No notes yet"></Empty>
    </div>
    <v-progress-linear v-else-if="loading" :indeterminate="true"></v-progress-linear>
    <div class="note-form" v-else>
        <div class="note-title">
            <v-layout>
                <v-flex grow>
                    <v-text-field solo hide-details color="#657186" flat placeholder="Note title 1" class="title" readonly :value="note.title">
                    </v-text-field>
                </v-flex>
                <v-flex shrink align-center class="action-wrapper">
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                            <v-btn icon v-on="on" class="action-btn" @click="$emit('collaborator', note.users)">
                                <v-icon>mdi-account-plus</v-icon>
                            </v-btn>
                        </template>
                        <span>Add Collaborators</span>
                    </v-tooltip>
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                            <v-btn icon class="action-btn" v-on="on" @click="$emit('editNotes', note)">
                                <v-icon color="indigo">edit</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit Note</span>
                    </v-tooltip>
                    <v-tooltip left>
                        <template v-slot:activator="{ on }">
                            <v-btn icon class="action-btn" v-on="on" @click="$emit('deleteNotes', note)">
                                <v-icon color="red">delete</v-icon>
                            </v-btn>
                        </template>
                        <span>Delete Note</span>
                    </v-tooltip>
                </v-flex>
            </v-layout>
        </div>
        <div class="note-content">
            <v-row>
                <v-spacer></v-spacer>
                <p class="mr-3 caption py-0 my-0 text-right">
                    <span>Created : {{ note.created_at | format}}</span><br>
                    <span v-if="note.updated_at">Last Updated: {{note.updated_at | format}}</span>
                </p>
                <v-col md="12">
                    <div class="pa-1 content" v-html="note.content"></div>
                </v-col>
            </v-row>
            <v-row no-gutters class="pa-3">
                <v-col md="12">Collaborators:</v-col>
                <v-col v-for="collaborator in note.users" class="my-1 flex" md="4">
                    <Avatar :user="collaborator"></Avatar>
                </v-col>
            </v-row>
        </div>
    </div>
</template>
<script src="./NoteForm.js"></script>
<style lang="scss" scoped src="./NoteForm.scss"></style>
<style scoped src="./NoteForm.css"></style>
<style type="text/css">
.content img,
.content video {
    max-width: 100%;
}
</style>