<template>
    <v-menu class="datacards__dropdown"
	        transition="slide-y-transition"
	        :nudge-bottom="10"
	        bottom
	        offset-y
            :close-on-content-click="false"
	>
		<div class="dropdown" slot="activator">
			<header-icon
                :image-src="require('@/assets/icons/header/add__default.png')"
                :hovered-image-src="require('@/assets/icons/header/add.png')"
            />
		</div>

		<v-list class="add__cards_list">

            <v-list-tile-title class="add__cards__title">Data Boxes</v-list-tile-title>

            <label class="select__all"> <span>Add All Data Box</span>
                <input type="checkbox" checked="checked">
                <span class="checkmark"></span>
            </label>

			<v-layout row wrap align-center justify-center class="card__layout">

                <v-flex sm6 xs12 class="data__box" 
                    v-for="(item, index) in items"
                    :key="index"
                >
                
                <input type="checkbox" name="boxes" :value="item.title" :id="index" />
                <label class="card__option" :for="index">

                    <div class="card__option_content">
                        <v-img max-width="35px" :src="item.icon" class="card__icons"/>

                        <div class="card__title">
                            {{ item.title }}
                        </div>
                    </div>
                    
                </label>

                </v-flex>

            </v-layout>

            <div class="card__btn">
                <v-btn dark color="#8b94bf" class="reset">Reset Default</v-btn>
                <v-btn dark color="#8b94bf" class="save">Save</v-btn>
            </div>

		</v-list>

	</v-menu>
</template>


<script>
import HeaderIcon from './HeaderIcon.vue'

export default {
    name: 'AddDataCards',

    components: {
        HeaderIcon
    },

    data: () => ({
        avatarSize: 'auto',
        items: [
            {
                title: 'Task',
                icon: require('@/assets/icons/sidebar/templates.svg')
            },
            {
                title: 'Timeline',
                icon: require('@/assets/icons/sidebar/timers.svg')
            },
            {
                title: 'Client',
                icon: require('@/assets/icons/sidebar/clients.svg')
            },
            {
                title: 'Timer',
                icon: require('@/assets/icons/sidebar/timers.svg')
            },
            {
                title: 'Payment',
                icon: require('@/assets/icons/sidebar/payment.svg')
            },
            {
                title: 'Invoice',
                icon: require('@/assets/icons/sidebar/invoice.svg')
            },
            {
                title: 'Calendar',
                icon: require('@/assets/icons/sidebar/calendar.svg')
            },
            {
                title: 'Passbox',
                icon: require('@/assets/icons/header/user/lock.svg')
            }
        ]
    }),

  }
</script>

<style lang="scss" scoped>

@import '~@/sass/_variables';

.add__cards_list{
    background-color: $lightViolete;
    width: 420px;
    padding: 15px 25px;
    
    .add__cards__title{
        font-size: 23px;
        color: $titleDarkBlue;
        margin-bottom: 15px;
    }

    .card__btn{
        text-align: center;
        display: flex;
        justify-content: space-evenly;
        .reset, .save{
            width: 140px;
            height: 40px;
        }
    }

    .card__layout{
        margin-bottom: 15px;
        .data__box{
            text-align: center;
            .card__option{
                display: block;
                position: relative;
                background-color: $lightViolete-2;
                cursor: pointer;
                text-align: center;
                width: 120px;
                height: 90px;
                border-radius: 10px;
                border: 2px solid $lightViolete-2;
                margin: 5px auto;

                &:hover{
                    border: 2px solid $darkViolete;
                }

                .card__option_content{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    margin-right: -50%;
                    transform: translate(-50%, -50%);

                    .card__title{
                        font-size: 18px;
                        color: $darkViolete;
                        margin-top: 10px;
                    }

                    .card__icons{
                        margin: 0 auto;
                    }

                }

            }        
            input[type=checkbox]{
                display: none;
            }
            
            input[type=checkbox]:checked + .card__option{
                background-color: $darkViolete;
                border: 2px solid $darkViolete;
                
                .card__title{
                    color: $white;
                }
            }
        }
    }

    .select__all {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        font-size: 18px;
        color: $titleDarkBlue;

        /* Hide the browser's default checkbox */
        input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
            position: absolute;
            top: 0;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: $darkViolete;
            border-radius: 50%;

            &:after {
                content: "";
                position: absolute;
                display: none;
            }

            &:after {
                left: 8px;
                top: 4px;
                width: 7px;
                height: 13px;
                border: solid white;
                border-width: 0 3px 3px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
            }

        }

        &:hover input ~ .checkmark {
            background-color: $darkViolete-2;
        }

        input:checked ~ .checkmark {
            background-color: $darkViolete-2;
        }

        input:checked ~ .checkmark:after {
            display: block;
        }
        
    }
    
}
</style>