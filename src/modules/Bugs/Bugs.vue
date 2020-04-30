<template>
  <div class="bugs">
		<table-header :paths="paths" :noButton="true" />
		<v-card class="wrapper pa-5">
			<v-row no-gutters>
				<v-col md="12" class="py-5">
					<h2 class="headline text-center">Topic <span class="font-weight-bold">Review</span></h2>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<v-select
	          v-model="e6"
	          :items="states"
	          :menu-props="{ maxHeight: '400' }"
	          label="Select"
	          solo
	          :height="50"
	        ></v-select>
				</v-col>
				<v-col>
					<v-select
	          v-model="e6"
	          :items="states"
	          :menu-props="{ maxHeight: '400' }"
	          label="Select"
	          solo
	          :height="50"
	        ></v-select>
				</v-col>
				<v-col>
					<v-btn block :height="50">Updates</v-btn>
				</v-col>
				<v-col md="12">
					Topics 21 - 30 of 1439
				</v-col>
			</v-row>
	      <v-row>
	      	<v-col :cols="6">
	      		<Left></Left>
	      	</v-col>
	      	<v-col :cols="6">
	      		<Right></Right>
	      	</v-col>
	      </v-row>
		</v-card>
	</div>
</template>

<script src="./Bugs.js"></script>
<style lang="scss" scoped src="./Bugs.scss"></style>