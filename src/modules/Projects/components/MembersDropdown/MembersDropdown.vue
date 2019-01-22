<template>
	<div class="members-dropdown">
		<v-autocomplete
				:value="members"
				@input="members_selected"
				:items="items"
				:search-input.sync="search"
				:loading="isLoading"
				item-value="id"
        prepend-icon="search"
				no-filter
				chips
				multiple
        clearable
        hide-details
        color="#657186"
        label="Assign member(s)"
				v-bind="$attrs"
		>
			<template slot="selection" slot-scope="data">
				<v-chip
						:selected="data.selected"
						outline
						class="chip--select-multi"
            close
						@input="remove_chip(data.index)"
				>
					<img :src="require('@/assets/temp/user.png')" width="30" height="30">
					&nbsp;<span class="chip-member-name">{{data.item.first_name}}</span>
				</v-chip>
			</template>

			<template slot="item" slot-scope="{item}">
					<div class="member">
            <div class="member-avatar">
              <img :src="require('@/assets/temp/user.png')">
            </div>
            <div class="member-info">
              <div class="full-name">
                {{item.first_name}} {{item.last_name}}
              </div>
              <div class="job-title">
              {{item.job_title}}
              </div>
            </div>
            <div class="checked-icon" v-if="!is_item_active(item.id)">
              <v-icon color="gray">check_circle_outline</v-icon>
            </div>
            <div class="checked-icon" v-if="is_item_active(item.id)">
              <v-icon color="green">check_circle</v-icon>
            </div>
          </div>
			</template>

		</v-autocomplete>
	</div>
</template>

<<<<<<< HEAD
<script>
import debounce from 'lodash/debounce'
import _cloneDeep from 'lodash/cloneDeep'
import makeRequestTo from '@/services/makeRequestTo'

export default {
  name: 'MembersDropdown',
  inheritAttrs: false,

  props: {
    members: Array,
    memberItems: Array
  },

  data: () => ({
    items: [],
    is_loading: false,
    search: null
  }),

  watch: {
    search(val) {
      val && this.debounce(val)
    },
    memberItems(val) {
      this.items = [...val]
    }
  },

  methods: {
    members_selected(val) {
      this.$emit('update:members', val)
    },

    debounce: debounce(function(val) {
      this.is_loading = true
      makeRequestTo
        .fill_dropdown('member', val)
        .then(response => {
          this.items = response.data
          this.$emit('items-updated', response.data)
        })
        .finally(() => (this.is_loading = false))
    }, 500),

    is_item_active(id) {
      return this.members.includes(id)
    },

    remove_chip(index) {
      let members = _cloneDeep(this.members)
      members.splice(index, 1)
      this.$emit('update:members', members)
    }
  }
}
=======
<script src="./MembersDropdown.js">
>>>>>>> develop
</script>
<style lang="scss" scoped src="./MembersDropdown.scss">
</style>
