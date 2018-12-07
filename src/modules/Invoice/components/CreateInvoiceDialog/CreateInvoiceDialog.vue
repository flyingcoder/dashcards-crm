<template>
	<div class="create-invoice-dialog">
		<v-layout row justify-center>
			<v-dialog :value="open" fullscreen persist hide-overlay transition="dialog-bottom-transition">

				<div class="dialog">
					<v-toolbar dark color="indigo" height="60">
						<v-btn icon dark>
							<v-icon>close</v-icon>
						</v-btn>
						<v-toolbar-title>Create new Invoice</v-toolbar-title>
						<v-spacer></v-spacer>
						<v-toolbar-items>
							<v-btn dark flat>Send Invoice</v-btn>
						</v-toolbar-items>
					</v-toolbar>
				</div>

				<div class="content">
					<div class="first-row">
						<div class="left-side">

							<div class="add-logo-box">
								+ Add Your Logo
							</div>

							<div class="bill-from">
								<v-textarea label="Who is this invoice from"></v-textarea>
							</div>

							<div class="bill-to">
								<v-text-field label="Who is this invoice to"></v-text-field>
							</div>


						</div>
						<div class="right-side">
							<div class="invoice-title">INVOICE</div>
							<div class="invoice-number">
								Invoice Number
								<input type="text" value="3">
							</div>
							<div class="invoice-dates">
								<div class="created-date">
									Date:
									<date-picker label="Select Date" />
								</div>

								<div class="due-date">
									Due Date:
									<date-picker label="Select Date" />
								</div>
							</div>
						</div>
					</div>
					<div class="second-row">Second</div>
					<div class="third-row">Third</div>
				</div>

			</v-dialog>
		</v-layout>
	</div>
</template>

<script src="./CreateInvoiceDialog.js"></script>

<style lang="scss" scoped>
	.content {
		height: calc(100% - 60px);
		background: white;
		display: grid;
		grid-template-rows: 1fr 1fr 100px;
		padding: 35px;

		.first-row {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}

		.left-side {
			.add-logo-box {
				width: 200px;
				height: 150px;
				background: gainsboro;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 18px;
			}

			.bill-from, .bill-to {
				width: 300px;
			}
		}

		.right-side {
			display: grid;

			.invoice-title {
				width: 200px;
				font-size: 35px;
				color: gray;
				text-align: right;
				width: 100%;
			}

			.invoice-number {
				display: grid;
				grid-auto-flow: column;
				justify-content: end;
				align-items: center;
				grid-gap: 15px;

				> input{
					padding: 10px;
					border: 1px solid grey;
					border-radius: 10px;

				}
			}

			.invoice-dates > div{
				display: grid;
				grid-auto-flow: column;
				justify-content: end;
				align-items: center;
				grid-gap: 15px;
			}
		}

	}
	.create-invoice-dialog {
	}
</style>