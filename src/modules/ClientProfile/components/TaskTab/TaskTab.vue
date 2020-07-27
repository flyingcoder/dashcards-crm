<template>
<!--    <div class="tasks-tab">-->
        <!--<div class="actions">
            <v-btn color="indigo" dark icon title="Add New Task">
                <v-icon>add</v-icon>
            </v-btn>
        </div>
        <div class="cards">

            <preview-card :id="id" :task="task" />
        </div>-->
<!--    </div>-->
    <tasks-content :hasTabs="false" hasLoadMoreBtn showProject />
</template>

<script src="./TaskTab.js"></script>
<style lang="scss" scoped src="./TaskTab.scss"></style>
