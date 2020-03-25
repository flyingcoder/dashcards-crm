<template>
	<v-card >
		<v-row no-gutters class="py-3 px-3 grid--wrapper">
			<v-col
				md="3"
				sm="6"
				xs="12"
				v-for="item in items"
				:key="item.user_id"
			>
			<v-card class="mx-2 my-2">	
				<v-card-text class="px-5">
					<v-row>
						<v-icon small v-if="item.is_online" title="Online" color="success">mdi-check-circle</v-icon>
						<v-icon small v-else></v-icon>
						<v-spacer></v-spacer>
						<span>{{item.job_title}}</span>
						<v-spacer></v-spacer>
						<v-menu bottom left>
			            <template v-slot:activator="{ on }">
			              <v-btn icon v-on="on" >
			                <v-icon>settings</v-icon>
			              </v-btn>
			            </template>

			            <v-list>
			              <v-list-item @click="$emit('edit', item)" >
			                <v-list-item-subtitle><v-icon small>edit</v-icon> Edit</v-list-item-subtitle>
			              </v-list-item>
			              <v-list-item @click="$emit('delete', item)" >
			                <v-list-item-subtitle><v-icon small>delete</v-icon> Delete</v-list-item-subtitle>
			              </v-list-item>
			            </v-list>
			          </v-menu>
					</v-row>
					<v-row align="center" class="my-2">
						<v-spacer></v-spacer>
						<v-avatar size="75">
				          <v-img
				            :src="item.image_url"
				            :alt="item.first_name"
				          ></v-img>
						</v-avatar>
			        <v-spacer></v-spacer>
			      </v-row>
			      <v-col md="12" class="text-center"><strong>{{item.fullname}}</strong></v-col>
			      <v-row>
			      	<v-btn text block dense class small @click="navigate_to_view_profile(item)">
							<v-icon small left color="success">account_circle</v-icon> Profile
						</v-btn>
						<v-btn text block dense class small disabled>
							<v-icon small left color="indigo">mdi-map-marker</v-icon> {{item.location}}
						</v-btn>
					</v-row>
			      	<v-row>
			      		<v-col v-if="showTaskCount">
			      			<h5 class="text-center">Tasks</h5>
			      			<h4 class="text-center">{{ count(item.tasks) }}</h4>
			      		</v-col>
			      		<v-col v-if="showProjectCount">
			      			<h5 class="text-center">Projects</h5>
			      			<h4 class="text-center">{{ count(item.projects)}}</h4>
			      		</v-col>
			      	</v-row>
		    	</v-card-text>
			</v-card>
		</v-col>
	</v-row>

	<v-card-actions class="py-2" v-if="hasFooter">
      <v-spacer></v-spacer>
      <v-btn tile text v-if="noMoreData === true"  disabled>NO MORE DATA</v-btn>
		<v-btn tile text :loading="btnloading" v-else @click="handleLoadMore">LOAD MORE</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
	</v-card>
</template>

<style lang="scss" src="./VueGrid.scss"></style>
<script src="./VueGrid.js"></script>