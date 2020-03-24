<template>
  <v-layout justify-center>
    <v-dialog
      v-model="loading"
      persistent
      fullscreen
      content-class="loading-dialog"
    >
      <v-container fill-height>
        <v-layout justify-center align-center>
          <v-progress-circular
            indeterminate
            :size="70"
            :width="7"
            color="blue"
          ></v-progress-circular>
        </v-layout>
      </v-container>
    </v-dialog>
  </v-layout>
</template>

<script src="./Home.js"></script>

<style lang="scss" scoped src="./Home.scss"></style>
