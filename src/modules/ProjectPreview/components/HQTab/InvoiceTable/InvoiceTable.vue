<template>
	<v-flex xs12 class="invoice-card">
		<div class="invoice__content">
			<dash-card>
				<div slot="actions"></div>
				<div class="content-wrapper" slot="content">

					<custom-table
							:headers="headers"
							:items="items"
							:loading="loading"
							:has-checkbox="true"
							hide-actions
							@items-selected="selected_ids = $event"
					>

						<div class="toolbar" slot="toolbar">
							<v-flex xs4>
								<v-select 
										class="dialog__selectfield"
										solo
										hide-details
										color="#657186" 
										:items="['Remind', 'Cancel', 'Archive']" 
										label="Batch Actions"
								></v-select>
							</v-flex>
						</div>

						<template slot="custom-item" slot-scope="item">
							<td>{{ item.item.due_date }}</td>
							<td>{{ item.item.invoice_id }}</td>
							<td class="text-cap">{{ item.item.bill_to }}</td>
							<td>{{ item.item.total_amount }}</td>
							<td>
								<v-select
										:items="['Copy', 'Print', 'PDF', 'Share link']"
										label="Select action"
								></v-select>
							</td>
						</template>

					</custom-table>

				</div>
			</dash-card>
		</div>
	</v-flex>
</template>

<script src="./InvoiceTable.js">
</script>
<style lang="scss" scoped src="./InvoiceTable.scss">
</style>

<style scoped>
>>> .content-wrapper .buzz__tables {
  all: unset !important;
}
</style>
