<template>
	<div class="second-row table-section">

		<div class="table-headers">
			<div class="column">Description</div>
			<div class="column">Rate</div>
			<div class="column">Hours</div>
			<div class="column">Amount</div>
		</div>

		<div class="table-body">

			<div class="active row">
				<v-text-field label="Descriptions" v-model.trim="active_row.descriptions" />
				<v-text-field min="0" type="number" label="Rate" v-model.trim.number="active_row.rate" />
				<v-text-field min="0" type="number" label="Hours" v-model.trim.number="active_row.hours" />
				<v-text-field label="Amount" :value="calculate_amount(active_row)" readonly />
				<v-btn outline icon :disabled="should_disable" @click="add_new_row">
					<v-icon>add</v-icon>
				</v-btn>
			</div>

			<div class="row" v-for="(row, index) of rows" :key="index">
				<v-text-field label="Descriptions" @input="row_updated('descriptions', $event, index)" />
				<v-text-field min="0" type="number" label="Rate" @input="row_updated('rate', $event, index)" :value="row.rate" />
				<v-text-field min="0" type="number" label="Hours" @input="row_updated('hours', $event, index)" :value="row.hours" />
				<v-text-field label="Amount" :value="row.amount" readonly />
				<v-btn icon @click="delete_row(index)">
					<v-icon>delete</v-icon>
				</v-btn>
			</div>

		</div>

	</div>
</template>

<script src="./TableSection.js"></script>
<style lang="scss" scoped src="./TableSection.scss"></style>