<template>
	<v-menu
			v-if="user"
      v-model="menu"
      :close-on-content-click="false"
      offset-y
      :max-width="350"
    >
      <template v-slot:activator="{ on }">
      	<div v-on="on">
	        <v-avatar color="grey" :size="size" >
	        	<v-img :src="user.image_url" class="hover"></v-img>
	        </v-avatar>
	        <span class="ml-1" v-if="!iconOnly">{{ displayName | ucwords | truncate }}</span>
      	</div>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-row>
              	<v-col md="3">
  			        	<v-img :src="user.image_url"></v-img>
              	</v-col>
              	<v-col md="9">
  	              <v-list-item-title class="title">{{user.fullname | ucwords}}</v-list-item-title>
  	              <v-list-item-subtitle class="caption"><v-icon small left>email</v-icon> {{user.email}}</v-list-item-subtitle>
  	              <v-list-item-subtitle class="body-2"><v-icon small left>person</v-icon> {{user.job_title | ucwords}}</v-list-item-subtitle>
              	</v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn @click="navigate_to_profile" text small class="caption"><v-icon small left>person</v-icon> View Profile</v-btn>
            <v-btn @click="navigate_to_email" text small class="caption"><v-icon small left>email</v-icon> Email</v-btn>
            <v-btn @click="navigate_to_chat" text small class="caption"><v-icon small left>message</v-icon> Chat</v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
</template>
<script>
import _cloneDeep from 'lodash/cloneDeep'

export default {
  	inheritAttrs: false,
  	props: {
  		user : { type : Object },
  		size : { type : Number, default : 42 },
  		iconOnly : { type : Boolean, default : false },
  		display : { type : String, default : '' },
  	},
  	data: () => ({
    	menu: false
	  }),
	  computed : {
	  	displayName(){
	  		if (this.display === '') {
	  			return this.user.fullname
	  		}
	  		return this.display
	  	}
	  },
  	methods : {
  		navigate_to_profile(){
  			if (typeof this.user.user_roles === 'undefined') {
	        this.$router.push(`/dashboard/team/profile/${user.id}`)
	      }
	      let item = Object.values(this.user.user_roles)
	      if (item[0].indexOf('client') >= 0 || item[0].indexOf('agent') >= 0) {
	        this.$router.push(`/dashboard/clients/profile/${this.user.id}`)
	      } else {
	        this.$router.push(`/dashboard/team/profile/${this.user.id}`)
	      }
  		},
  		navigate_to_chat() {
  			this.$router.push(`/dashboard/chat/${this.user.id}`)
  		},
  		navigate_to_email() {
  			//todo
  		}
  	}
}
</script>
<style scoped>
>>> .hover {
	cursor: pointer;
}
</style>
