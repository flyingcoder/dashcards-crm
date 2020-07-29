<template>
    <div class="notes-list">
        <div class="note-header">
            <h3>Notes</h3>
            <slot name="action-btn"></slot>
        </div>
        <div class="notes-body">
            <v-list v-if="notes.length == 0">
                <v-list-item>
                    <v-list-item-content>
                        <Empty headline="No notes yet" icon="mdi-book-outline"></Empty>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-list two-line class="list-wrapper" v-if="notes.length > 0">
                <v-list-item :class="['note', { active: activeNote && activeNote.id === note.id }]" v-for="(note, index) of notes" :key="note.id" @click="$emit('clicked', note)">
                    <v-list-item-content>
                        <v-list-item-title :inner-html.prop="note.title | ucwords"></v-list-item-title>
                        <v-list-item-subtitle :inner-html.prop="note.content | truncate(30)"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon small :class="['notify', { active: note.pivot.is_pinned }]" @click="$emit('toggle-pin', { note, index })">
                            mdi-pin
                        </v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
        </div>
        <v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
        <div class="view__more" v-if="notes.length > 0">
            <v-btn text normal :disabled="noMoreData" @click="$emit('view-more')" class="view__more_btn">VIEW MORE</v-btn>
        </div>
    </div>
</template>
<script src="./NotesList.js"></script>
<style lang="scss" scoped src="./NotesList.scss"></style>