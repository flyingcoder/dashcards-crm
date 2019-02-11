<template>
  <div class="tasks-tab">
    <div class="actions">
      <v-btn color="indigo" dark icon title="Add New Task">
        <v-icon>add</v-icon>
      </v-btn>
    </div>
    <div class="cards">
      <tasks-card :id="id" />
      <preview-card :id="id" :task="task" />
    </div>
  </div>
</template>

<script src="./TaskTab.js"></script>
<style lang="scss" scoped src="./TaskTab.scss"></style>
