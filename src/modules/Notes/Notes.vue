<template>
    <div class="notes">

        <table-header :paths="paths" />

        <div class="notes-wrapper">

            <div class="notes-content">

                <notes-list />

                <note-form />
                
            </div>

        </div>

    </div>
</template>
<script src="./Notes.js">
</script>
<style lang="scss" scoped src="./Notes.scss">
</style>
