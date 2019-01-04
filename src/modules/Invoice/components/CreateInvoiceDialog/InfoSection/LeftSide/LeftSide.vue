<template>
	<div class="left__side">

		<div class="add__logo_box" @click="$refs.hidden_input.click()">
			<img :src="image_preview" v-if="image_preview" class="image-preview">
			<span class="text" v-else>+ Add Your Logo</span>
			<v-btn outline class="button" v-show="image_preview">Remove</v-btn>
			<input type="file"
			       accept="image/*"
			       ref="hidden_input"
			       @change="file_selected"
			       class="hidden-input"
			>
		</div>

		<div class="bill__from">
      <div class="form__label">Bill From:</div>
			<v-textarea class="textfield"
						label="Who is this invoice from"
			            v-model="billed_from"
						solo
						hide-details
						color="#657186"
						flat
			></v-textarea>
		</div>

		<div class="bill__to">
      <div class="form__label">Bill To:</div>
			<v-text-field class="textfield"
						  label="Who is this invoice to"
			              v-model="billed_to"
						  solo
						  hide-details
						  color="#657186"
						  flat
			></v-text-field>
		</div>

	</div>
</template>

<script src="./LeftSide.js">
</script>

<style lang="scss" scoped src="./LeftSide.scss">
</style>

<style scoped src="./LeftSide.css">
</style>
