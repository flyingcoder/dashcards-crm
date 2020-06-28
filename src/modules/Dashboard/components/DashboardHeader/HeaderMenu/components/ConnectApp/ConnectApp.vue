<template>
    
  <v-menu
    class="apps-dropdown"
    transition="slide-y-transition"
    :nudge-left="200"
    :nudge-bottom="15"
    offset-y
    :close-on-content-click="false"
  >
    <template v-slot:activator="{ on }">
         <v-btn class="connect-btn mx-2" tile icon @click="showApps = !showApps" v-on="on">
            <v-icon large>mdi-cube-outline</v-icon>
        </v-btn>
    </template>
    <v-card>
        <v-card-text class="apps">
            <div v-for="app in apps" :key="app.id" class="app" @click="connect(app.id)">
                <img :src="app.logo" :alt="app.name">
                <span class="app-name">{{app.name}}</span>
            </div>
        </v-card-text>
    </v-card>
  </v-menu>
</template>

<script src="./ConnectApp.js"></script>
<style lang="scss" scoped src="./ConnectApp.scss"></style>