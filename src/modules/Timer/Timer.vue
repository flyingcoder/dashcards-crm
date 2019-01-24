<template>
	<div class="timer">

		<breadcrumb :paths="paths"/>

		<custom-table
				v-if="items.length || loading"
				:headers="headers"
				:items="items"
				:loading="loading"
				:sort="sort"
				:has-checkbox="true"
				hide-actions
				@items-selected="selected_ids = $event"
				@sorted="changeSort"
		>
		<template slot="toolbar">
			<v-toolbar flat class="table__toolbar">
				
				<v-toolbar-title class="table__toolbar-title">Timer</v-toolbar-title>

				<v-spacer></v-spacer>

				<v-toolbar-items class="timer__option">
					
					<v-menu class="sort__dropdown"
						transition="slide-y-transition"
						:nudge-left="135"
						:nudge-bottom="2"
						flat
						offset-y>
						<v-btn fab flat small class="sort__option" slot="activator">
							<v-icon>more_horiz</v-icon>
						</v-btn>
						<v-list class="sort__list" flat>
							<v-list-tile class="sort__list_tile" v-for="(sortLists, index) in sortList" :key="index">
								<v-list-tile-title class="sort__list_item">{{ sortLists.title }}</v-list-tile-title>
							</v-list-tile>
						</v-list>
					</v-menu>
				
				</v-toolbar-items>
			</v-toolbar>
		</template>

		<template slot="custom-item" slot-scope="item" class="template-table">
			
			<td class="text-xs-left team__member"> <!--TODO fill image with dynamic data from backend-->
				<div class="member__image">
					<img :src="require('@/assets/temp/user.png')" /> &nbsp;
				</div>
				<div class="member__name text-cap">
					MOOOOOOOOOOOO
				</div>
			</td>

			<td class="text-cap">Hello</td>
			<td class="">Whole</td>
			<td class="">World</td>
			<td class="">World</td>
			<td class="">World</td>

			<td class="">
				<v-btn fab small flat depressed>
					<img src="@/assets/icons/groups/edit.svg" alt="">
				</v-btn>
				<v-btn fab small flat depressed>
					<img src="@/assets/icons/groups/delete.svg" alt="">
				</v-btn>
			</td>
		</template>

		</custom-table>

		<div class="empty-timer" v-else>
			<div class="empty-content">
				<div class="empty-svg">
					<svg viewBox="0 0 250 250">
						<path d="M125 0c35,0 66,14 88,37 23,22 37,53 37,88 0,35 -14,66 -37,88 -22,23 -53,37 -88,37 -35,0 -66,-14 -88,-37 -23,-22 -37,-53 -37,-88 0,-35 14,-66 37,-88 22,-23 53,-37 88,-37zm-4 56c0,-4 4,-8 8,-8 5,0 8,4 8,8l0 54c5,3 8,8 8,14 0,9 -8,16 -17,16 -1,0 -2,0 -3,0l-46 56c-3,4 -8,4 -11,1 -4,-2 -4,-8 -1,-11l46 -56c-1,-2 -1,-4 -1,-6 0,-7 4,-12 9,-15l0 -53zm81 -8c-20,-20 -47,-32 -77,-32 -30,0 -57,12 -77,32 -20,20 -32,47 -32,77 0,30 12,57 32,77 20,20 47,32 77,32 30,0 57,-12 77,-32 20,-20 32,-47 32,-77 0,-30 -12,-57 -32,-77z M121 135c0,-4 4,-8 8,-8 5,0 8,4 8,8l0 68c0,5 -3,8 -8,8 -4,0 -8,-3 -8,-8l0 -68z M131 136c-3,-3 -3,-8 0,-11 3,-3 8,-3 11,0l48 48c3,3 3,8 0,11 -3,3 -8,3 -12,0l-47 -48z M141 132c-5,0 -8,-3 -8,-8 0,-4 3,-8 8,-8l67 0c5,0 9,4 9,8 0,5 -4,8 -9,8l-67 0z"/>
					</svg>
				</div>
				<div class="empty-btn">
					<v-btn large dark color="#3b589e">Add Timer</v-btn>
				</div>
			</div>
		</div>

	</div>
</template>

<script src="./Timer.js">
</script>
<style lang="scss" scoped src="./Timer.scss">
</style>
