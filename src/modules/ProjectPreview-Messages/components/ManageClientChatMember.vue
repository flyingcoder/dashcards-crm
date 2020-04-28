<template>
  <div class="text-center" v-if="conversation">
    <v-dialog v-model="dialog" max-width="800" persistent scrollable>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Manage Members
          <v-spacer></v-spacer>
          <v-icon @click="clear_and_close()">close</v-icon>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-flex sm12 md8>
                <v-text-field
                  solo
                  label="Search for people to add"
                  required
                  clearable
                  prepend-inner-icon="search"
                  v-model="search"
                  @keydown="filter_users"
                  @click:clear="filter_users"
                ></v-text-field>

                <v-list
                  v-if="filtered_by_search.length > 0"
                  id="filtered_by_search_wrapper"
                >
                  <v-list-item
                    v-for="item in filtered_by_search"
                    :key="item.title"
                    @click="selected(item)"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.image_url"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.fullname"
                      ></v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-icon>
                      <v-icon v-show="item.is_selected" color="success"
                        >mdi-checkbox-marked-circle</v-icon
                      >
                    </v-list-item-icon>
                  </v-list-item>
                </v-list>
              </v-flex>
              <v-flex sm12 md4>
                <v-list id="all_selected_wrapper">
                  <v-subheader
                    >Selected ({{ all_selected.length }})</v-subheader
                  >
                  <v-list-item
                    v-if="all_selected.length > 0"
                    v-for="item in all_selected"
                    :key="item.title"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.image_url"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-subtitle
                        v-text="item.fullname"
                      ></v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-icon v-if="can_be_remove(item)">
                      <v-icon @click="selected(item)" small color="danger"
                        >close</v-icon
                      >
                    </v-list-item-icon>
                  </v-list-item>
                </v-list>
              </v-flex>
            </v-row>
          </v-container>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="clear_and_close">
            Cancel
          </v-btn>
          <v-btn color="primary" @click="update_members" :loading="btnloading">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style scoped>
#all_selected_wrapper {
  max-height: 340px;
  overflow-y: auto;
  overflow-x: hidden;
}
#filtered_by_search_wrapper {
  max-height: 260px;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>

<script>
import { api_to } from '@/modules/Chat/api'
import _cloneDeep from 'lodash/cloneDeep'

export default {
  name: 'ManageClientChatMember',
  props: {
    conversation: Object
  },
  data() {
    return {
      dialog: false,
      all_users: [],
      filtered_by_search: [],
      all_selected: [],
      search: '',
      btnloading: false
    }
  },
 /* created() {
let uroles = Object.values(this.loggedUser.user_roles)[0]
  console.log(uroles.includes('manager'))
  },*/
  computed: {
    loggedUser(){
      return this.$store.getters.user
    }
  },
  methods: {
    open_dialog() {
      this.dialog = true
      this.all_selected = _cloneDeep(this.conversation.members)
      this.get_chat_list()
    },
    clear_and_close() {
      this.dialog = false
    },
    get_chat_list_only() {
      api_to.get_chat_list().then(({ data }) => {
        this.filtered_by_search = this.filter_users_for_selected(data)
        this.all_users = _cloneDeep(data)
      })
    },
    update_members() {
      this.btnloading = true
      var payload = {
        convo_id: this.conversation.id,
        users: this.all_selected.map(value => {
          return value.id
        })
      }
      api_to
        .update_members_list(payload)
        .then(({ data }) => {
          this.conversation.members = data
          this.clear_and_close()
        })
        .finally(() => (this.btnloading = false))
    },
    can_be_remove(user) {
      if (user.id === this.loggedUser.id) return false //cant delete self
      
      if (user.is_company_owner)  return false

      if (this.loggedUser.is_company_owner)  return true

      let uroles = Object.values(this.loggedUser.user_roles)[0]

      let roles = Object.values(user.user_roles)[0]

      if (uroles.includes('admin') && roles.includes('admin')) { //both admin
        return false
      } else if (uroles.includes('admin') && !roles.includes('admin')) {
        return true
      } else if (uroles.includes('manager') && roles.includes('manager')) { //both manager
        return false
      } else if (uroles.includes('manager') && roles.includes('admin')) {
        return false
      }
      
      if (uroles.includes('client') || uroles.includes('member')){
        return false
      }

      return true
    },
    select(item, value) {
      let index = this.filtered_by_search.findIndex(user => item.id === user.id)
      if (~index) {
        this.filtered_by_search[index].is_selected = value
      }
    },
    selected(item) {
      let index = this.all_selected.findIndex(user => item.id === user.id)
      if (~index) {
        this.select(item, false)
        this.all_selected.splice(index, 1)
      } else {
        this.select(item, true)
        this.all_selected.push(item)
      }
    },

    filter_users_for_selected(items) {
      var selected_ids = this.conversation.members.map(value => {
        return value.id
      })
      return items.map(item =>
        Object.assign(item, { is_selected: selected_ids.indexOf(item.id) >= 0 })
      )
    },
    filter_users(event) {
      setTimeout(() => {
        if (this.search && this.search !== '') {
          this.filtered_by_search = _cloneDeep(this.all_users).filter(item => {
            return item.fullname
              .toLowerCase()
              .includes(this.search.toLowerCase().trim())
          })
        } else {
          this.filtered_by_search = _cloneDeep(this.all_users)
        }
      }, 1)
    }
  }
}
</script>
