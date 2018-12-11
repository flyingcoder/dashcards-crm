<template>

	<v-container class="dash__card">
		<v-layout row wrap class="card__header" align-center>
			<v-flex xs8 class="card__title">
				{{title}}
			</v-flex>
			<slot name="actions">
				<v-flex xs4 class="actions text-xs-right">
					<v-btn fab small flat class="action">
						<v-icon>close</v-icon>
					</v-btn>
				</v-flex>
			</slot>
		</v-layout>

		<v-flex xs12 class="card__content">
			<slot name="content" />
		</v-flex>

		<v-flex xs12 class="card__footer text-xs-center">
			<slot name="footer">
				<v-btn v-if="viewMoreLink" flat class="view__more_btn" @click="reroute">VIEW MORE</v-btn>
			</slot>
		</v-flex>

	</v-container>
</template>

<script>
export default {
  name: 'DashCard',
  props: {
    title: String,
    viewMoreLink: Object
  },
  methods: {
    reroute() {
      this.$router.push(this.viewMoreLink)
    }
  }
}
</script>

<style lang="scss" scoped src="./DashCard.scss">
</style>
