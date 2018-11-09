<template>
    <div class="table-header">
        <breadcrumb :paths="paths"/>
        
        <v-speed-dial direction="left" slide-y-reverse-transition >
            <v-btn slot="activator" fab small class="add__btn" @click="$emit('click')">
                <v-icon>add</v-icon>
            </v-btn>
            <v-btn slot="activator" class="more__btn" fab small>
                <v-icon>more_horiz</v-icon>
            </v-btn>
        </v-speed-dial>
    </div>
</template>

<script>
    import Breadcrumb from '@/common/Breadcrumb.vue'

    export default {
        name: 'TableHeader',
        props: {
            paths: Array,
        },
        data (){
            return{
                fab: true,
            }
        },
        components: {
            Breadcrumb
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