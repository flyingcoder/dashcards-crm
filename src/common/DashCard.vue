<template>
  <div class="dash__card">
    <v-row wrap no-gutters class="card__header" align-center>
      <v-flex xs4 class="card__title">
        {{ title }}
      </v-flex>
      <slot name="actions" v-if="dashboard">
        <v-flex xs8 class="actions">
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
            <v-icon @click="$emit('expand')">zoom_out_map</v-icon>
          </v-btn>
          <v-btn fab small text class="action">
            <v-icon @click="$emit('close')">close</v-icon>
          </v-btn>
        </v-flex>
      </slot>
    </v-row>

    <v-row no-gutters class="card__content">
      <slot name="content" ></slot>
    </v-row>

    <v-row no-gutters class="card__footer">
      <slot name="footer">
        <v-btn
          v-if="viewMoreBtn"
          text
          :loading="btnloading"
          class="view__more_btn mx-auto"
          @click="$emit('view-more')"
        >
          VIEW MORE
        </v-btn>
      </slot>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'DashCard',
  props: {
    title: String,
    viewMoreBtn: Boolean,
    dashboard: Boolean
  },
  data: () => ({
    btnloading: false
  }),
  created() {
    this.$event.$on('btnloading_off', () => { this.btnloading = false })
  }
}
</script>

<style lang="scss" scoped src="./DashCard.scss"></style>
