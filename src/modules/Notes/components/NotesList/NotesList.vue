<template>
    <div class="notes-list">
        <div class="note-header">
            Notes
        </div>
        <div class="notes-body">
            <v-list two-line>
                <v-list-item :class="['note', { active: activeNote && activeNote.id === note.id }]" v-for="(note, index) of notes" :key="note.id" @click="$emit('clicked', note)">
                    <v-list-item-content>
                        <v-list-item-title v-html="note.title"></v-list-item-title>
                        <v-list-item-subtitle :inner-html.prop="note.content | truncate(30)"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-icon>
                        <v-icon small :class="['notify', { active: note.pivot.is_pinned }]" @click="$emit('toggle-pin', { note, index })">
                        mdi-pin
                    </v-icon>
                    </v-list-item-icon>
                </v-list-item>
            </v-list>
            <!-- <div :class="['note', { active: activeNote && activeNote.id === note.id }]" v-for="(note, index) of notes" :key="note.id" @click="$emit('clicked', note)">
                <div class="note-name">
                    <span>{{ note.title }}</span>
                    <v-icon small :class="['notify', { active: note.pivot.is_pinned }]" @click="$emit('toggle-pin', { note, index })">
                        mdi-pin
                    </v-icon>
                </div>
                <div class="note-desc">
                    <p :inner-html.prop="note.content | truncate(30)"></p>
                </div>
            </div> -->
        </div>
        <v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
        <div class="view__more">
            <v-btn text normal :disabled="noMoreData" @click="$emit('view-more')" class="view__more_btn">VIEW MORE</v-btn>
        </div>
    </div>
</template>
<script src="./NotesList.js"></script>
<style lang="scss" scoped src="./NotesList.scss"></style>