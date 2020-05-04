<template>
  <div class="pa-2">
    <v-icon large left color="success">mdi-file-link-outline</v-icon>

    <v-tooltip top>
      <template v-slot:activator="{ on }">
        <router-link v-on="on" :to="media.custom_properties.url">{{
          media.name
        }}</router-link>
      </template>
      <span>Open Link</span>
    </v-tooltip>
  </div>
</template>
<script>
export default {
  name: 'Links',
  props: {
    media: Object
  }
}
</script>
