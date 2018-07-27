<template>
  <v-app class="buzzooka" id="buzzooka">
    <snackbar></snackbar>
    <router-view></router-view>
  </v-app>
</template>

<script>

import snackbar from './common/snackbar/snackbar.vue'
export default {
  name: 'App',
  components: {snackbar},
  data: () => ({

  })
}
</script>
