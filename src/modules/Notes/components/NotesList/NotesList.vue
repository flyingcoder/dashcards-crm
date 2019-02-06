<template>
    <div class="notes-list">
        <div class="note-header">
            Notes
        </div>

        <div class="notes-body">
            <div class="note">
                <div class="note-name">
                    <span>Note Title 1</span>
                    <v-icon class="notify selected">notifications</v-icon>
                </div>
                <div class="note-desc">
                    <p>This is a note content. Please write anything here. 
                    This is a note content. Please write anything here.</p>
                </div>
            </div>
            
            <div class="note">
                <div class="note-name">
                    <span>Note Title 1</span>
                    <v-icon class="notify">notifications</v-icon>
                </div>
                <div class="note-desc">
                    <p>This is a note content. Please write anything here. 
                    This is a note content. Please write anything here.</p>
                </div>
            </div>
        </div>

        <div class="view__more">
            <v-btn flat normal class="view__more_btn">VIEW MORE</v-btn>
        </div>
    </div>
</template>
<script src="./NotesList.js">
</script>
<style lang="scss" scoped src="./NotesList.scss">
</style>
