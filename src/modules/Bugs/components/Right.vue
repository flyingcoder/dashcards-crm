<template>
  <v-card class="mx-auto"  >
    <v-row no-gutters class="pa-3">
    	<v-toolbar-title>General > Questions</v-toolbar-title>
    	<v-spacer></v-spacer>
			<v-btn icon small outlined class="mr-1">
				<v-icon>mdi-dots-vertical</v-icon>
			</v-btn>
    </v-row>

    <v-container fluid>
      <v-row dense>
        <v-col >
					<Empty headline="Under Construction!"></Empty>
        </v-col>
      </v-row>
    </v-container>
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