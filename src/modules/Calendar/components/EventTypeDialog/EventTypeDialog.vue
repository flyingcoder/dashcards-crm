<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="600px" persistent>
      <v-card class="custom__dialog">
        <v-card-title class="dialog__header">
          <span class="dialog__title">{{ dialogTitle }}</span>
          <v-spacer></v-spacer>
          <v-btn
            fab
            small
            depressed
            class="close__dialog"
            @click="clear_and_close"
          >
            <v-icon>close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text style="height: 350px;">
        	<v-row >
        		<v-col md="7" xs="12">
        			<v-text-field
			            label="Untitle Event"
			            solo
			            class="text__field"
			            v-model="name"
			          ></v-text-field>
        		</v-col>
        		<v-col md="3" xs="12">
        			<v-overflow-btn
			          class="my-2 v-overflow-btn"
			          :items="dropdown_color"
			          segmented
			          filled
			          v-model="theme"
			        >
			        <template v-slot:selection="{item}">
			        	<v-avatar
		                    :size="50"
		                    tile
		                    :color="item"
		                    ><span></span
		                  ></v-avatar>
			        </template>
			        <template v-slot:item="{ item }">
			        	<v-avatar
		                    :size="50"
		                    tile
		                    :color="item"
		                    class="mb-1"
		                    ><span></span
		                  ></v-avatar>
			        </template>
			        </v-overflow-btn>
        		</v-col>
        		<v-col md="2" xs="12">
        			<v-btn block :loading="btnloading2" outlined tile icon class="action__btn" @click="add">
        				<v-icon>add</v-icon>
        			</v-btn>
        		</v-col>
        	</v-row>

        	<v-row 
        		v-for="(type, index ) in to_be_added"
        		:key="index"
        	>
        		<v-col md="7" xs="12">
        			<v-text-field
			            label="Untitle Event"
			            solo
			            class="text__field"
			            :value="type.name"
			            readonly
			          ></v-text-field>
        		</v-col>
        		<v-col md="3" xs="12">
        			<v-overflow-btn
			          class="my-2 v-overflow-btn"
			          :items="dropdown_color"
			          segmented
			          filled
			          flat
			          disabled
			          :value="type.color"
			        >
			        <template v-slot:selection="{item}">
			        	<v-avatar
		                    :size="50"
		                    tile
		                    :color="item"
		                    ><span></span
		                  ></v-avatar>
			        </template>
			        </v-overflow-btn>
        		</v-col>
        		<v-col md="2" xs="12">
        			<v-btn block dark :loading="btnloading2" tile icon class="action__btn" @click="remove(index)">
        				<v-icon color="gray">delete</v-icon>
        			</v-btn>
        		</v-col>
        	</v-row>
      
        </v-card-text>

        <v-card-actions class="dialog__actions">
          <v-btn @click="clear_and_close" class="dialog__actions_btn">Cancel</v-btn>
          <v-btn
            class="dialog__actions_btn"
            :loading="btnloading"
            :disabled="disabled"
            @click="save"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script src="./EventTypeDialog.js"></script>
<style lang="scss" scoped src="./EventTypeDialog.scss"></style>
<style lang="css" scoped>
>>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: #fff;
}
>>> .v-overflow-btn {
	height: 50px;
	position: relative;
	top: -12px;
}
>>> .v-overflow-btn .v-input__slot .v-label {
	margin-left: 15px;
	line-height: 50px;
	height: 50px;
	width: 50px;
	position: absolute;
	top: 2px;
	left: -25px;
	border-radius: 5px;
}
>>> .text__field {
	height: 50px;
	width: 100%;
}
>>> .action__btn {
	border-radius: 5px;
	height: 50px;
}
>>> .v-select__selections {
	position: relative;
	top: 3px;
	left: -10px;
}
</style>
