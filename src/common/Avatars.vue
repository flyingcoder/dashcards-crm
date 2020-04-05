<template>
	<div class="avatar-wrapper">
		<ul class="avatars">
			<li class="avatars__item" v-if="cutList.length > 0" v-for="(item, index) in cutList" :key="index">
				<v-tooltip top>
			      <template v-slot:activator="{ on }">
					<img v-on="on" v-if="deep" :src="item.user.image_url" class="avatars__img" />
					<img v-on="on" v-else :src="item.image_url" class="avatars__img" />
			      </template>
			      <span v-if="deep">{{item.user.fullname}}</span>
			      <span v-else>{{item.fullname}}</span>
			    </v-tooltip>
			</li>
			<li class="avatars__item" v-if="less > 0">
				<span class="avatars__others">+{{less}}</span>
			</li>
			<li class="avatars__item" v-if="hasAddMember">
				<span class="avatars__add">
					<v-icon dark @click="$emit('add-member', item)">add</v-icon>
				</span>
			</li>
		</ul>
	</div>
</template>
<script>
import _cloneDeep from 'lodash/cloneDeep'
export default {
  inheritAttrs: false,
 	props: {
  	items : { type: Array, default : [] },
  	count : { type: Number, default : 3 },
  	deep : { type: Boolean, default : false },
  	hasAddMember: { type: Boolean, default : false },
	},
	computed : {
		less() {
			return this.items.length - this.count
		},
		cutList () {
			if (this.items.length < this.count) {
				return this.items
			}
			return _cloneDeep(this.items).slice(0, this.count)
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '~@/sass/variables';
	div.avatar-wrapper {
		display: flex;
	}
	ul.avatars {
		display: flex ; 
		list-style-type: none ;
		margin: 2px auto;
		padding: 0px 7px 0px 0px ;
	}

	li.avatars__item {
		height: 49px ;
		margin: 0px 0px 0px 0px ;
		padding: 0px 0px 0px 0px ;
		position: relative ;
		width: 42px ; 
	}

	img.avatars__img,
	span.avatars__initials,
	span.avatars__others,
	span.avatars__add {
		background-color: #3B589E ;
		border: 2px solid #1F2532 ;
		border-radius: 100px 100px 100px 100px ;
		color: #FFFFFF ;
		display: block ;
		font-family: sans-serif ;
		font-size: 12px ;
		font-weight: bolder ;
		height: 45px ;
		line-height: 42px ;
		text-align: center ;
		width: 45px ;
	}

	span.avatars__others {
		background-color: #1E8FE1 ;
	}
	span.avatars__add {
	}
</style>
