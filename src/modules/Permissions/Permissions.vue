<template>
  <div class="content projects">

    <v-layout row justify-space-between>

      <v-flex xs12>
          <breadcrumb :paths="paths" />
      </v-flex>

      <v-flex>
        <div class="page__options">
          <div class='newAdd__btn'>
            <v-icon class="addIcon__btn">add_icon</v-icon>
            <div class="addText__btn"><span>Add New</span></div>
          </div>
        </div>
      </v-flex>
      
    </v-layout>

    <div class="content__wrapper">
      <div class="row buzz__tables">
        <div class="buzz__tablesTwo">
          <v-toolbar flat class="table__toolbar">
            <v-toolbar-title class="table__toolbar-title" padding="0">Permissions</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

			<custom-table
						:headers="headers"
						:items="items"
						:has-checkbox="true"
						:has-header-icon="true"
						:disable-delete-all-button="disable_delete_all_button"
						@items-selected="selected_ids = $event"
						@delete-selected="delete_selected()"
            			class="custom__table"
				>

					<template slot="custom-item" slot-scope="item">
						<td class="text-xs-left pl-5"></td>

						<td class="text-xs-left pl-5"></td>

						<td class="text-xs-left pl-5"></td>

						<td class="text-xs-center">

							<v-btn fab small color="blue" depressed							
							>
								<img src="@/assets/icons/groups/edit.svg" alt="">
							</v-btn>

							<v-btn fab small color="blue" depressed					 
							>
								<img src="@/assets/icons/groups/delete.svg" alt="">
							</v-btn>

						</td>
					</template>

			</custom-table>         
        </div>
      </div>
    </div>

  </div>
</template>
<script src="./Permissions.js"></script>
<style lang="scss" scoped src="./Permissions.scss"></style>