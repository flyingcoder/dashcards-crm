<template>
	<v-row no-gutters>
    <v-col md="12">
	  	<v-card class="mx-auto pa-4" >
	    <v-row no-gutters>
				<v-col class="bordered"><v-btn :height="60" block large tile text>My Tasks</v-btn></v-col>
				<v-col class="bordered"><v-btn :height="60" block large tile text>All Tasks</v-btn></v-col>
				<v-col md="12" class="bordered-x">
					<task-chips
			      :count-all="20"
			      :count-completed="5"
			      :count-pending="5"
			      :count-behind="5"
			      :count-open="5"
			    ></task-chips>
				</v-col>
	    </v-row>

	    <v-card-text class="bordered-x bordered-b pa-0">
	      <v-list class="pa-0" two-line dense>
	      	<v-list-item class="bordered-y">
	      		<v-col class="text-center">Task</v-col>
	      		<v-col class="text-center">Status</v-col>
	      		<v-col md="1" class="text-center"><v-icon>more_horiz</v-icon></v-col>
	      	</v-list-item>
		      <v-list-item-group>
		        <v-list-item
		          v-for="(item, i) in items"
		          :key="item.id"
		        >
		          <v-list-item-content>
		          	<v-col md="2">
				          <v-avatar size="45">
				            <v-img :src="item.avatar"></v-img>
				          </v-avatar>
		          	</v-col>
		          	<v-col>
			            <v-list-item-title v-html="item.title"></v-list-item-title>
			            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
		          	</v-col>
		          	<v-col md="4">
		          		<div class="overline">Open</div>
		          		<v-progress-linear
							      color="indigo"
							      rounded
							      value="100"
							    ></v-progress-linear>
		          	</v-col>
		          </v-list-item-content>

			        <v-list-item-action>
			        	<v-menu offset-y left>
	                <template v-slot:activator="{ on }">
	                  <v-btn icon small v-on="on">
	                    <v-icon>more_horiz</v-icon>
	                  </v-btn>
	                </template>
	                <v-list>
	                  <v-list-item 
	                      v-for="item of dropdown_actions"
	                      :key="item.id"
	                      @click="$emit('dropdown-action', item.value)">
	                    <v-list-item-content>
	                      <v-list-item-title>{{ item.text }}</v-list-item-title>
	                    </v-list-item-content>
	                  </v-list-item>
	                </v-list>
	              </v-menu>
			        </v-list-item-action>
		        </v-list-item>
		      </v-list-item-group>
		    </v-list>
	    </v-card-text>

	    <v-card-actions>
	    	<v-btn text tile block>Load More</v-btn>
	    </v-card-actions>
	  </v-card>
	 </v-col>
	</v-row>
</template>

<script src="./TaskCardV2.js"></script>
<style scoped>
	>>> .bordered { border: 1px solid #9196ac; }
	>>> .bordered-l { border-left: 1px solid #9196ac; }
	>>> .bordered-r { border-right: 1px solid #9196ac; }
	>>> .bordered-t { border-top: 1px solid #9196ac; }
	>>> .bordered-b { border-bottom: 1px solid #9196ac; }
	>>> .bordered-x { border-left: 1px solid #9196ac; border-right: 1px solid #9196ac; }
	>>> .bordered-y { border-top: 1px solid #9196ac; border-bottom: 1px solid #9196ac;}
</style>