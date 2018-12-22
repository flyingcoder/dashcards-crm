<template>
	<div class="d__tiles" v-if="counters">
		<tile v-for="tile in tiles"
		      :key="tile.title"
		      :img-src="tile.icon"
		      img-background="#ed8564"
		      :counter="counters[tile.value]"
		      :title="tile.title"
		/>
	</div>
</template>

<script src="./DashboardTiles.js">
</script>
<style lang="scss" scoped src="./DashboardTiles.scss">
</style>
