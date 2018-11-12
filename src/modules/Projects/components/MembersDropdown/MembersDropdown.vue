<template>
	<div class="members-dropdown">
		<v-autocomplete
				v-model="members"
				:items="items"
				:loading="is_loading"
				:search-input.sync="search"
				return-object
				hide-no-data
				no-filter
				chips
				multiple
				v-bind="$attrs"
		>
			<template slot="selection" slot-scope="data">
				<v-chip
						:selected="data.selected"
						close
						class="chip--select-multi"
				>
					{{data.item.text}} tick
				</v-chip>
			</template>
			<template
					slot="item"
					slot-scope="data"
			>
				<template>
					<v-list-tile-content>
						{{data.item.text}}
					</v-list-tile-content>
				</template>
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

		data: () => ({
			items: [],
			is_loading: false,
			search: null,
			members: []
		}),

		watch: {
			search (val) {
				val && this.debounce(val)
			}
		},

		methods: {

			debounce: debounce(function(val){
				this.is_loading = true
				makeRequestTo.fill_dropdown('member', val)
					.then(response => this.update_items(response.data))
					.finally(() => this.is_loading = false)
			}, 500),

			update_items(new_items) {
				let items = []
				new_items.forEach(({id, first_name, last_name}) => {
					items.push({text: `${first_name} ${last_name}`, value: id})
				})
				this.items = items
			}
		}

	}
</script>

<style scoped>

</style>