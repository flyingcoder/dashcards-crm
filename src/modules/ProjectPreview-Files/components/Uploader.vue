<template>
	<v-card flat outlined class="uploader">
		<v-card-text class="preview-wrapper text-center" v-if="previews.length === 0" >
			<v-spacer></v-spacer>
			<v-avatar tile size="150" >
				<v-icon class="main-icon">mdi-google-drive</v-icon>
			</v-avatar>
			<v-spacer></v-spacer>
		</v-card-text>
		<v-card-text v-else class="preview-wrapper">
			<v-avatar size="150" 
					tile
					v-for="(file, index) in previews"
					:key="index"
					class="ma-1 bordered"
			>
				<v-tooltip top>
		      <template v-slot:activator="{ on }">
						<v-img 
							v-on="on"
							contain
							:src="file.image"
						>
				        <v-btn outlined class="ma-2":disabled="btnloading" @click="removeFile(index)" icon>
									<v-icon color="red">close</v-icon>
								</v-btn>
						</v-img>
		      </template>
		      <span>{{file.name}}</span>
		    </v-tooltip>
			</v-avatar>

		</v-card-text>
		<v-progress-linear
        v-show="isUploading"
        :indeterminate="true"
      ></v-progress-linear>
		<input type="file" ref="hidden_file_input" @change="filesAdded" multiple class="hidden">
		<v-card-actions class="pa-2 actions">
			<span class="caption">{{ filescounts }}</span>
			<v-spacer></v-spacer>
				<v-btn text outlined :disabled="isMaxFile || btnloading" @click="$refs.hidden_file_input.click()">
				 Add Files <v-icon small right>mdi-file-plus</v-icon>
			  </v-btn>
			  <v-btn @click="removeFiles" text outlined :disabled="!hasFile || btnloading">
			  	Remove Files <v-icon small right>mdi-file-remove</v-icon>
			  </v-btn>
			  <v-btn @click="uploadFiles" text outlined :disabled="!hasFile" :loading="btnloading">
					Upload Files <v-icon small right>mdi-cloud-upload</v-icon>
				</v-btn>
			<v-spacer></v-spacer>
		</v-card-actions>
	</v-card>
</template>
<style lang="scss">
	.uploader {
		min-height: 200px;
		padding: 5px;

		.bordered { border: 1px solid #e0e0e0; border-radius: 5px;}
		.hidden { display: none !important; }
		.preview-wrapper { min-height: 150px; }
		.main-icon { font-size: 140px; }
	}
</style>
<script>
	export default {
		name : 'Uploader',
		props: {
			maxFiles: { type: Number, default : 5 },
		},

		data: () => ({
			files: [],
			previews: [],
			btnloading: false,
			isUploading: false
		}),

		mounted(){
			this.$event.$on('file-upload-clear-all', () => this.removeFiles())
			this.$event.$on('file-uploaded', (file) => this.file_done_upload(file))
			this.$event.$on('btnloading_off', () => { this.btnloading = false })
		},
		
		computed : {
			hasFile(){
				return this.files.length > 0
			},
			isMaxFile(){
				return this.files.length >= this.maxFiles
			},
			filescounts(){
				return this.files.length +'/'+this.maxFiles
			}
		},

		methods: {
			filesAdded(event) {
				if (event.target.files && event.target.files.length > 0) {
		          	[...event.target.files].forEach(item => {
		          		if (!this.isMaxFile) {
				          	this.files.push(item)
			          	 	this.previews.push(this.createPreview(item))
		          		} else {
		          			this.$event.$emit('open_snackbar', 'Some items are skipped, max files count exceed!', 'warning')
		          		}
		          	})
		        }
			},
			createPreview(file) {
				if (file.type.includes('image')) {
			    return { name: file.name, image:  URL.createObjectURL(file) }
				} else {
					return { name: file.name, image:  require('@/assets/temp/no-image.jpg') }
				}
			},
			removeFile(index){
				this.files.splice(index, 1)
				this.previews.splice(index, 1)
			},
			removeFiles(){
				this.files = []
				this.previews = []
				this.isUploading =  false
			},
			uploadFiles(){
				this.btnloading = this.isUploading =  true
				this.$emit('upload-files', this.files)
			},
			file_done_upload(file){
				console.log(file)
			}
		}
	}
</script>