<template>
	<div class="timer__tab">

        <v-layout row>
			<v-flex xs12 class="text-xs-right">
				<v-btn fab small class="add__btn" @click="add_dialog = true">
				<v-icon>add</v-icon>
				</v-btn>
			</v-flex>
		</v-layout>

		<custom-table
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
                            :nudge-left="110"
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

		</custom-table>

	</div>
</template>

<script src="./TimerTab.js">
</script>
<style lang="scss" scoped src="./TimerTab.scss">
</style>
