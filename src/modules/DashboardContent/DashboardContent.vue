<template>
	<div class="content">

        <div class="row d__breadcrumbs">
            <div class="breadcrumbs">
                <breadcrumb :paths="paths" />
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

		<draggable class="row d__cards" v-model="cards">
			<template v-for="card in card_components">
				<component :is="card.component"
				           :key="card.component"
				           v-if="should_show(card.slug)"
				></component>
			</template>
		</draggable>

	</div>
</template>
<script src="./DashboardContent.js">
</script>
<style lang="scss" scoped src="./DashboardContent.scss">
</style>
