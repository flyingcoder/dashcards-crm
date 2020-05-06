<template>
	<div class="files__tab">
		<v-card>
			<v-card-title class="py-1">
					<v-col md="12" v-if="isGoogleAuthorized">
						<Uploader @upload-files="handleUploads"></Uploader>
					</v-col>
					<v-col class="headline"><v-icon left>mdi-google-drive</v-icon> Google Drive</v-col>
					<v-spacer></v-spacer>
					
					<v-col v-if="isGoogleAuthorized">
						<v-text-field solo  flat outlined dense append-icon="search" placeholder="Search..." hide-details v-model="search"
							clearable
							@keydown.enter="searchDrive"
							@click:append="searchDrive"
							@click:clear="getRootFiles"
						></v-text-field>
					</v-col>
				</v-card-title>
				<v-card-text>
					<v-breadcrumbs v-if="isGoogleAuthorized" class="px-1" dense :items="breadcrumbs">
			      <template v-slot:item="{ item }">
			        <span v-if="item.disabled" :tiltle="item.text">{{item.text | truncate(18) }}</span>
			        <span class="cursor" v-else @click="go_to_folder(item.folder)" :tiltle="item.text">{{item.text | truncate(18) }}</span>
			      </template>
					</v-breadcrumbs>
					<v-divider></v-divider>
					
					<v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
					
					<Empty v-if="!isGoogleAuthorized" headline="No Google Drive connected!">
						<template v-slot:extra>
							<v-btn text large outlined :to="{ name : 'cloud' }"><v-icon left>mdi-google-drive</v-icon> Connect to Google Drive</v-btn>
						</template>
					</Empty>

					<v-row class="my-0" v-else-if="files.length > 0 && !loading">
						<v-col md="2" sm="3" v-for="file in files" >
							<v-card flat outlined>
		            <v-img
		            	contain
		              :src="getImage(file)"
		              class="white--text align-end"
		              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.4)"
		              height="150"
		            >
		              <v-card-title class="caption" v-text="file.name"></v-card-title>
		            </v-img>

		            <v-card-actions>
		              <v-spacer></v-spacer>

		              <v-tooltip top v-if="is_folder(file)">
							      <template v-slot:activator="{ on }">
				              <v-btn icon v-on="on" @click="getFileForFolder(file)">
									      <v-icon  color="yellow">mdi-folder-open</v-icon>
				              </v-btn>
							      </template>
							      <span>Open Folder</span>
							    </v-tooltip>

		              <v-tooltip top v-else>
							      <template v-slot:activator="{ on }">
				              <v-btn icon v-on="on" :href="file.webViewLink" target="_blank">
									      <v-icon color="success">mdi-eye</v-icon>
				              </v-btn>
							      </template>
							      <span>View File</span>
							    </v-tooltip>
		                
		          		<!-- Download file with format selection -->
							    <v-menu
							      bottom
							      v-if="file.exportLinks"
							      origin="center center"
							      transition="slide-x-transition"
							    >
							      <template v-slot:activator="{ on: menu }">
							      	<v-tooltip bottom>
							      		<template v-slot:activator="{ on: tooltip }">
						              <v-btn icon v-on="{ ...tooltip, ...menu }">
											        <v-icon color="primary">mdi-cloud-download</v-icon>
						              </v-btn>
						            </template>
						            <span>Download File</span>
				            	</v-tooltip>
							      </template>
							      <v-list class="pa-0 ma-0">
							        <v-list-item
							          v-for="(item, i) in links(file.exportLinks)"
							          :key="i"
							          class="ma-0 pa-0"
							        >
							        <v-btn text block :href="item.link" class="text-left">Download as {{ item.text | uppercase }}</v-btn>
							        </v-list-item>
							      </v-list>
							    </v-menu>
							    <!-- Download File without format selector -->
							    <v-tooltip bottom v-else-if="file.webContentLink">
					      		<template v-slot:activator="{ on }">
				              <v-btn icon v-on="on" :href="file.webContentLink">
									        <v-icon color="primary">mdi-cloud-download</v-icon>
				              </v-btn>
				            </template>
				            <span>Download File</span>
		            	</v-tooltip>
		            </v-card-actions>
		          </v-card>
						</v-col>

						<v-col md="12" v-if="nextPageToken">
							<v-btn text block @click="load_more">Load More</v-btn>	
						</v-col>
					</v-row>

					<Empty v-else-if="!loading" headline="No content found!"></Empty>
			</v-card-text>
		</v-card>
	</div>
</template>

<script src="./GoogleDriveTab.js"></script>
<style lang="scss">
.files__tab {
  padding: 24px;

  .folder:hover {
  	cursor: pointer;
  	border: 1px solid grey;
  }
  .cursor:hover {
  	cursor: pointer;
  	color: blue;
  }
}
</style>