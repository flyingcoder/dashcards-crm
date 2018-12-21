<template>
	<div class="d__tiles">
		<tile v-for="tile in tiles"
		      :key="tile.title"
		      :img-src="tile.icon"
		      img-background="#ed8564"
		      :counter="tile.counter"
		      :title="tile.title"
		/>
	</div>
</template>

<script src="./DashboardTiles.js">
</script>
<style lang="scss" scoped src="./DashboardTiles.scss">
</style>
