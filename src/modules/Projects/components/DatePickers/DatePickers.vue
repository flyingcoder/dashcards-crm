<template>
	<div class="due-date-dropdown">
		<v-menu
				v-model="date_picker.menu"
				:close-on-content-click="false"
				full-width
		>
			<v-text-field
					slot="activator"
					label="Select Start & End Date"
					readonly
					:value="text_field_label"
			></v-text-field>
			<div class="pickers-container">

				<div class="header-titles">
					<h3>Start Date</h3>
					<h3>End Date</h3>
				</div>

				<div class="due-date-pickers">
					<v-date-picker
							v-model="date_picker.start_date"
					></v-date-picker>
					<v-date-picker
							:readonly="!date_picker.start_date"
							v-model="date_picker.end_date"
							:min="date_picker.start_date"
					></v-date-picker>
				</div>

				<div class="actions">
					<v-btn @click="reset">Reset</v-btn>
					<v-btn @click="cancel">Cancel</v-btn>
					<v-btn @click="save">Save</v-btn>
				</div>
			</div>
		</v-menu>
	</div>
</template>

<script src="./DatePickers.js">
</script>
<style lang="scss" scoped src="./DatePickers.scss">
</style>
