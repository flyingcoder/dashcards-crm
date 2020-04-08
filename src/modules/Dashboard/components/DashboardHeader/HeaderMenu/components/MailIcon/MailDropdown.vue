<template>
  <v-card class="pa-1" width="520">
    <v-toolbar flat>
      <v-icon left > mdi-mail </v-icon>
      <v-toolbar-title>Mail</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn class="mr-1" small icon v-on="on" @click="$emit('close')"><v-icon>close</v-icon></v-btn>
        </template>
        <span>Close</span>
      </v-tooltip>
    </v-toolbar>

    <v-tabs fixed-tabs dense >
	    <v-tab
	    	small
	    	v-for="item in tabs"
        :key="item.tab">
		      <v-badge
	          color="red"
	          content="16"
	        >
	          {{item.tab}} 
	        </v-badge>
	    </v-tab>
	  </v-tabs>

    <v-card-text class="pa-0" style="max-height: 300px; overflow-x:hidden;overflow-y:auto;">
  		<Empty headline="Coming Soon!"></Empty>
  	</v-card-text>
  </v-card>
</template>

<script src="./MailDropdown.js"></script>