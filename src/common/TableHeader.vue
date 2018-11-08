<template functional>
	<div class="table-header">
		<component :is="injections.components.Breadcrumb" :paths="props.paths"/>
		
		<v-speed-dial v-model="fab" direction="left" hover   slide-y-reverse-transition>
        <v-btn slot="activator" v-model="fab" class="more__btn" fab small>
          <v-icon>more_horiz</v-icon>
        </v-btn>
        <v-btn fab dark small class="add__btn" v-on="listeners">
          <v-icon>add</v-icon>
        </v-btn>
      </v-speed-dial>
	</div>
</template>

<script>
	import Breadcrumb from '@/common/Breadcrumb.vue'

	export default {
		name: 'TableHeader',
		functional: true,
		props: {
			paths: Array,
		},
		data (){
			return{
				fab: false,
			}
		},
		inject: {
			components: {
				default: {
					Breadcrumb
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "~@/sass/variables";

	.table-header {
		display: grid;
		grid-auto-flow: column;
		justify-content: space-between;
		align-items: center;

		button.add__btn.v-btn.v-btn--floating.v-btn--small{
      background-color: $blue;
      .v-icon{
          color: $white;
      }
    }

    button.more__btn.v-btn.v-btn--floating.v-btn--small{
      background-color: $white;
      border: 1px solid $white;
      .v-icon{
        color: $tableDarkText;
      }
    }
	}
</style>