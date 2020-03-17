<template>
  <v-container class="dash__card">
    <v-layout row wrap class="card__header" align-center>
      <v-flex xs4 class="card__title">
        {{ title }}
      </v-flex>
      <slot name="actions" v-if="dashboard">
        <v-flex xs8 class="actions text-xs-right">
          <v-btn fab small text class="action">
            <v-icon>list</v-icon>
          </v-btn>
          <v-btn fab small text class="action">
            <v-icon>grid_on</v-icon>
          </v-btn>
          <v-btn fab small text class="action">
            <v-icon>remove</v-icon>
          </v-btn>
          <v-btn fab small text class="action">
            <v-icon>remove</v-icon>
          </v-btn>
          <v-btn fab small text class="action">
            <v-icon>zoom_out_map</v-icon>
          </v-btn>
          <v-btn fab small text class="action">
            <v-icon @click="$emit('close')">close</v-icon>
          </v-btn>
        </v-flex>
      </slot>
    </v-layout>

    <v-flex xs12 class="card__content">
      <slot name="content" />
    </v-flex>

    <v-flex xs12 class="card__footer text-xs-center">
      <slot name="footer">
        <v-btn 
          v-if="viewMoreBtn" 
          text class="view__more_btn" 
          @click="$emit('view-more')"
        >
          VIEW MORE
        </v-btn>
      </slot>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: 'DashCard',
  props: {
    title: String,
    viewMoreBtn: Boolean,
    dashboard: Boolean,
  }
}
</script>

<style lang="scss" scoped src="./DashCard.scss"></style>
