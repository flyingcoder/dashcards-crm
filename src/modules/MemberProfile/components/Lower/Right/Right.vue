<template>
    <div class="profile-right">
        <v-tabs class="tabs" centered grow hide-slider height="60px" :show-arrows="is_screen_medium_and_down">
			<v-tab class="tab-item" href="#tab-1">
                <v-icon>image</v-icon>
            </v-tab>

            <v-tab class="tab-item" href="#tab-2">
                <v-icon>image</v-icon>
            </v-tab>

            <v-tab class="tab-item" href="#tab-3">
                <v-icon>image</v-icon>
            </v-tab>
		</v-tabs>
    </div>
</template>

<script src="./Right.js">
</script>
<style lang="scss" scoped src="./Right.scss">
</style>
<style scoped>
>>> .tabs a.v-tabs__item.v-tabs__item--active {
  background-color: #3b589e;
  color: #fff;
}
>>> .tabs a.v-tabs__item.v-tabs__item--active .v-icon {
  color: #fff;
}
>>> .tabs a.v-tabs__item.v-tabs__item--active svg {
  fill: #fff;
}
</style>
