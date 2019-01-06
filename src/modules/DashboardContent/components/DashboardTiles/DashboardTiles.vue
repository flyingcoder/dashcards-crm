<template>
	<div class="d__tiles" v-if="counters">
		<tile v-for="tile in filteredTiles"
		      :key="tile.title"
		      :img-src="tile.icon"
		      :img-background="tile.color"
		      :counter="counters[tile.value]"
		      :title="tile.title"
		/>
	</div>
</template>

<script src="./DashboardTiles.js">
</script>
<style lang="scss" scoped src="./DashboardTiles.scss">
</style>
