<template>
    <div class="d__tiles" v-if="counters">
        <template v-for="tile of tiles">
            <tile v-if="tile.can_view()" :key="tile.title" :img-src="tile.icon" :img-background="tile.color" :counter="counters[tile.value]" :title="tile.title" @click="navigateTo(tile.route)" />
        </template>
    </div>
</template>
<script src="./DashboardTiles.js"></script>
<style lang="scss" scoped src="./DashboardTiles.scss"></style>