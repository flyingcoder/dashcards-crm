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

<script src="./MembersDropdown.js">
</script>
<style lang="scss" scoped src="./MembersDropdown.scss">
</style>
