<template>
	<v-card class="pa-0">
		<v-tabs fixed-tabs>
	    <v-tab>
	      Bugs
	    </v-tab>
	    <v-tab>
	      Questions
	    </v-tab>
	    <v-tab>
	      Suggestions
	    </v-tab>
	  </v-tabs>
	  <v-divider></v-divider>
	  <v-row no-gutters class="py-3">
	  	<v-col>
		  		<v-btn tile block label small text>
		  			<span class="caption">All</span> <v-chip class="pa-1 ml-1" x-small>0</v-chip>
		  		</v-btn>
	  	</v-col>
	  	<v-col>
		  		<v-btn tile block label small text>
		  			<span class="caption">Fixed</span> <v-chip class="pa-1 ml-1" x-small>0</v-chip>
		  		</v-btn>
	  	</v-col>
	  	<v-col>
		  		<v-btn tile block label small text>
		  			<span class="caption">On Review</span> <v-chip class="pa-1 ml-1" x-small>0</v-chip>
		  		</v-btn>
		  </v-col>
  		<v-col>
		  		<v-btn tile block label small text>
		  			<span class="caption">Moderation</span> <v-chip class="pa-1 ml-1" x-small>0</v-chip>
		  		</v-btn>
		  </v-col>
	  </v-row>
	  <v-divider></v-divider>
	  <v-row no-gutters class="py-3">
	  	<v-col md="12">
	  		
	  		<Empty headline="Under Construction!"></Empty>
	  	</v-col>
	  </v-row>
	</v-card>
</template>

<script>
	import Empty from '@/common/Empty.vue'

	export default {
		name : 'Right',
		components : {
			Empty
		}
	}
</script>