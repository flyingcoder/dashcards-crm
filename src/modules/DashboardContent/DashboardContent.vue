<template>
	<div class="content">

		<div class="row d__breadcrumbs">
			<div class="breadcrumbs">
				<breadcrumb :paths="paths"/>
			</div>
			<div class="page__options">

				<logon-label/> <!--custom component-->

				<div class="option themes">
					<div class="color"></div>
					<div class="title">
						<span>Themes</span>
					</div>
				</div>
			</div>
		</div>

		<dashboard-tiles/> <!-- custom component -->

		<v-container fluid>

			<NoCards v-if="!cards.length" />

			<v-layout>
				<draggable class="d__cards" v-model="cards">
					<template v-for="card in card_components">

						<component :is="card.component"
						           :key="card.component"
						           v-if="should_show(card.slug) && card.hasOwnProperty('component')"
						           @close="close(card.id)"
						></component>

						<template v-else-if="should_show(card.slug)">
							<v-flex xs12 :key="card.id">
								<div>
									<dash-card @close="close(card.id)" :title="card.name"></dash-card>
								</div>
							</v-flex>
						</template>

					</template>
				</draggable>
			</v-layout>
		</v-container>

	</div>
</template>
<script src="./DashboardContent.js">
</script>
<style lang="scss" scoped src="./DashboardContent.scss">
</style>
