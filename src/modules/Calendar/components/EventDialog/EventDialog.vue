<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable max-width="700px" persistent :key="dialogKey">
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

        <v-card-text style="height: 450px;">
        	<v-row>
	            <v-col md="12" xs="12">
	            	<label>Event Title</label>
	              <TextField
	                :value.sync="title"
	                label="Event Title"
	                color="#657186"
	                filled
	              ></TextField>
	            </v-col>
	            <v-col md="12" xs="12">
	            	<label>Event Description</label>
	              <TextArea
	                :value.sync="description"
	                label="Event Description"
	                color="#657186"
	                filled
	                :rows="1"
	              ></TextArea>
	            </v-col>
	        </v-row>
	        <v-row no-gutters>
	          	<v-col>
	          		<v-checkbox
						      v-model="all_day"
						      :label="`All Day Event`"
						    ></v-checkbox>
	          	</v-col>
	          </v-row>
	        <v-row no-gutters v-if="all_day">
	            <v-col md="12" sm="12" xs="12">
	            	<label>Select Day of Event</label>
	              <v-datetime
								  type="date"
								  v-model="start_date"
								  input-class="datetime-picker"
								  value-zone="UTC"
								  :zone="timezone"
								  :format="{ year: 'numeric', month: 'long', day: 'numeric'}"
								  :phrases="{ok: 'Next', cancel: 'Close'}"
								  :hour-step="1"
								  :minute-step="5"
								  :week-start="7"
								  :min-datetime="currentDateTime"
								  auto
								  ></v-datetime>
	            </v-col>
           </v-row>
	        <v-row no-gutters v-else>
	            <v-col md="6" sm="12" xs="12">
	            	<label>Select Start of Event</label>
	              <v-datetime
								  type="datetime"
								  v-model="start_date"
								  input-class="datetime-picker"
								  value-zone="UTC"
								  :zone="timezone"
								  :format="createDateFormat"
								  :phrases="{ok: 'Next', cancel: 'Close'}"
								  :hour-step="1"
								  :minute-step="5"
								  :week-start="7"
								  :min-datetime="currentDateTime"
								  use12-hour
								  auto
								  ></v-datetime>
	            </v-col>
	            <v-col md="6" sm="12" xs="12">
	            	<label>Select End of Event</label>
	              <v-datetime
								  type="datetime"
								  v-model="end_date"
								  input-class="datetime-picker"
								  value-zone="UTC"
								  :zone="timezone"
								  :format="createDateFormat"
								  :phrases="{ok: 'Next', cancel: 'Close'}"
								  :hour-step="1"
								  :minute-step="5"
								  :week-start="7"
								  :min-datetime="start_date"
								  use12-hour
								  auto
								  ></v-datetime>
	            </v-col>
           	</v-row>
           	<v-row>
	            <v-col md="12" sm="12" xs="12">
	            	<v-menu
                bottom
                transition="slide-y-transition"
                bottom
                max-height="300"
              >
                <template v-slot:activator="{ on }">
                  <v-btn v-on="on" block large class="d__btn">
                    <v-icon left>mdi-account</v-icon>
                    <span>Add Participants</span>
                  </v-btn>
                </template>
                <v-list dense>
                  <v-list-item
                    v-for="(item, index) in members.items"
                    :key="item.user_id"
                    @click="add_to_selected_members(item, index)"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.image_url"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title
                        v-html="item.fullname"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-html="item.job_title"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-menu>
              <div class="choosen" v-if="members.selected.length > 0">
                <v-chip
                  outlined
                  class="mt-1"
                  v-for="item in members.selected"
                  :key="item.id"
                  :close="clearable(item)"
                  label
                  @click:close="remove_from_selected_members(item)"
                >
                  <v-avatar left>
                    <v-img :src="item.image_url"></v-img>
                  </v-avatar>
                  {{ item.fullname }}
                </v-chip>
              </div>
	            </v-col>
	          </v-row>
	          <v-row>
	          	<v-col md="6" xs="12">
	            	<label>Event Type</label>
	              <v-select
				          v-model="event_type"
				          :items="calendar.event_types"
				          menu-props="auto"
				          label="Select"
				          hide-details
				          return-object
				          item-text="name"
				          item-value="id"
				          solo
				          single-line
				        >
				        	<template v-slot:item="{ item }">
				        		<span><v-icon left :color="item.properties.color">mdi-circle</v-icon> {{item.name}}</span>
				        	</template>
				        </v-select>
	            </v-col>
	          	<v-col md="6" xs="12">
	          		<v-checkbox
						      v-model="notify"
						      :label="`Notify Participants`"
						    ></v-checkbox>
	          	</v-col>
	          </v-row>
        </v-card-text>

        <v-card-actions class="dialog__actions">
          <v-btn @click="clear_and_close" class="dialog__actions_btn">Close</v-btn>
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

<script src="./EventDialog.js"></script>
<style lang="scss" scoped src="./EventDialog.scss"></style>
<style lang="css" scoped>
>>> .theme--light.v-text-field--filled > .v-input__control > .v-input__slot {
  background-color: #fff;
}
>>> .datetime-picker {
  background: #fff;
  width: 100%;
  line-height: 4 !important;
  text-align: center;
  border: 1px solid #dce1e5;
      border-bottom-color: rgb(220, 225, 229);
      border-bottom-style: solid;
      border-bottom-width: 1px;
  border-radius: 5px 5px 0px 0px;
}
>>> .vdatetime-time-picker__item{
	text-transform: uppercase;
}
</style>
