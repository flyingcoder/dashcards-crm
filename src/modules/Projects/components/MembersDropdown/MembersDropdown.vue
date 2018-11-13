<template>
	<div class="members-dropdown">
		<v-autocomplete
				label="Search Members"
				v-model="members"
				:items="items"
				:loading="is_loading"
				:search-input.sync="search"
				hide-no-data
				no-filter
				item-value="id"
				chips
				multiple
		>
			<template slot="selection" slot-scope="data">
				<v-chip
						:selected="data.selected"
						outline
						class="chip--select-multi"
				>
					<img :src="require('@/assets/temp/user.png')" width="30" height="30">
					&nbsp;{{data.item.first_name}}
				</v-chip>
			</template>

			<template slot="item" slot-scope="{item}">
					<div class="member-avatar">
						<img :src="require('@/assets/temp/user.png')" width="30" height="30">
					</div>
					<div class="member-full-name">
						{{item.first_name}} {{item.last_name}}
					</div>
					<div class="checked-icon" v-if="is_item_active(item.id)">
						<v-icon color="green">check_circle</v-icon>
					</div>
			</template>

		</v-autocomplete>
	</div>
</template>

<script>
	import debounce from 'lodash/debounce'
	import makeRequestTo from '@/services/makeRequestTo'

	export default {
		name: 'MembersDropdown',
		inheritAttrs: false,

		props: {
			members: Array
		},

		data: () => ({
			items: [],
			is_loading: false,
			search: null,
			selected_members: []
		}),

		watch: {
			members(val) { this.selected_members = val },
			search (val) { val && this.debounce(val) },
			selected_members(val) { this.$emit('update:members', val) }
		},

		methods: {

			debounce: debounce(function(val){
				this.is_loading = true
				makeRequestTo.fill_dropdown('member', val)
					.then(response => this.items = response.data)
					.finally(() => this.is_loading = false)
			}, 500),

			is_item_active(id) {
				return this.selected_members.includes(id)
			}

		}

	}
</script>

<style lang="scss" scoped>

</style>