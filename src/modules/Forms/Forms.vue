<template>
	<div class="forms">

		<div class="form-container">
			<v-tabs class="tabs" centered grow hide-slider height="60px" v-model="active_tab">
				<v-tab
						v-for="tab in tabs"
						:key="tab.name"
						:href="`#${tab.name}`"
				>
					{{ tab.name }}
				</v-tab>
			</v-tabs>

			<v-tabs-items v-model="active_tab">
				<v-tab-item v-for="tab of tabs" :key="tab.id" :value="tab.name">
					<div class="form-wrapper">

						<component :is="active_tab" :sections="dynamic_sections" v-if="active_tab === tab.name"></component>

						<div class="form-actions-wrapper">
							<div class="actions">

								<v-tooltip right content-class="action">
									<v-btn slot="activator" icon @click="add_new_question">
										<v-icon>add_circle</v-icon>
									</v-btn>
									<span>Add question</span>
								</v-tooltip>

								<v-tooltip right content-class="action" @click="add_title_and_descriptions">
									<v-btn slot="activator" icon>
										<v-icon>text_fields</v-icon>
									</v-btn>
									<span>Add question</span>
								</v-tooltip>
							</div>
						</div>

					</div>
				</v-tab-item>
			</v-tabs-items>
		</div>

	</div>
</template>

<script src="./Forms.js"></script>

<style lang="scss" scoped>
	.forms {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 20px;

		.form-container {
			width: 600px;
		}
		.form-wrapper {
			display: grid;
			grid-template-columns: 10fr 1fr;
		}

		.actions {
			display: grid;
			background: #ded2d2;
		}
	}
</style>

<style scoped>
	>>> .tabs a.v-tabs__item.v-tabs__item--active {
		background: #3B589E;
		color: white;
	}
</style>