<template>
	<v-row no-gutters>
		<v-list three-line flat class="comments-wrapper">
				<v-subheader>Comments</v-subheader>
	      <template v-for="(item, index) in items">
	        <v-list-item
	          :key="item.id"
	          @mouseover="hover = true" 
	          @mouseleave="hover = false"
	        >
	          <v-list-item-avatar>
	            <v-img :src="item.causer.image_url"></v-img>
	          </v-list-item-avatar>

	          <v-list-item-content>
	            <v-list-item-title v-html="item.causer.fullname"></v-list-item-title>
	            <v-list-item-subtitle>{{ item.created_at  | from_now }}</v-list-item-subtitle>
	            <v-list-item-subtitle v-html="item.body"></v-list-item-subtitle>
	          </v-list-item-content>

	          <v-list-item-action>
		          <v-btn icon 
		          	v-show="hover && can_delete_comment(item)"
                @click="confirm_delete_comment(item)">
		            <v-icon small color="grey lighten-1">delete</v-icon>
		          </v-btn>
		        </v-list-item-action>
	        </v-list-item>
	      </template>
	    </v-list>

      <v-row>
        <v-col md="2">
          <v-avatar size="80">
            <v-img :src="user.image_url" :alt="user.fullname"></v-img>
          </v-avatar>
          <v-btn small 
	          :loading="btnloading"
	           @click="addComment" 
	           class="mt-4" 
	           color="gray">
	           <v-icon small left>mdi-send</v-icon> Send
	         </v-btn>
        </v-col>
        <v-col md="10" class="pr-3 pl-4">
            <rich-editor
              placeholder="Enter a coment"
              ref="editor"
              v-model="comment"
            ></rich-editor>
        </v-col>
      </v-row>

      <DeleteDialog
	      ref="delete_comment_dialog"
	      title="Delete Comment"
	      text-content="Are you sure you want to delete this comment?"
	      @delete="confirmed_delete_comment"
	    />
	</v-row>
</template>
<script src="./Comment.js"></script>
<style scoped>
>>> .comments-wrapper{
	width: 100%;
}
</style>