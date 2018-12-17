<template>
	<v-menu class="datacards__dropdown"
	        transition="slide-y-transition"
	        :nudge-bottom="5"
	        :nudge-left="180"
	        offset-y
	        :close-on-content-click="false"
	        v-model="dropdown_visible"
	>
		<div class="d__dropdown" slot="activator">
			<header-icon
					:image-src="require('@/assets/icons/header/add__default.png')"
					:hovered-image-src="require('@/assets/icons/header/add.png')"
			/>
		</div>

		<v-list class="add__cards_list">

			<v-list-tile-title class="add__cards__title">
				Data Boxes
			</v-list-tile-title>

			<label class="select__all"> <span>Add All Data Box</span> <input
					type="checkbox" checked="checked"> <span class="checkmark"></span>
			</label>

			<v-layout row wrap align-center justify-center class="card__layout">

				<v-flex sm6 xs12 class="data__box"
				        v-for="(item, index) in items"
				        :key="index"
				>

					<input type="checkbox"
					       name="boxes"
					       :id="index"
					       :value="item.value"
					       v-model="selected_items"
					/>
					<label class="card__option" :for="index">

						<div class="card__option_content">
							<v-img max-width="35px" :src="item.icon" class="card__icons"/>

							<div class="card__title">
								{{ item.title }}
							</div>
						</div>

					</label>

				</v-flex>

			</v-layout>

			<div class="card__btn">
				<v-btn dark color="#8b94bf" class="reset">Reset Default</v-btn>
				<v-btn dark color="#8b94bf" class="save" :disabled="disabled" @click="save">Save</v-btn>
			</div>

		</v-list>

	</v-menu>
</template>

<script src="./DashCardsDropdown.js">
</script>
<style lang="scss" scoped src="./DashCardsDropdown.scss">
</style>
