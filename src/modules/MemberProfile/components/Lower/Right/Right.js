import { is_screen_medium_and_down } from '@/global_utils/is_screen_medium_and_down'

export default {
    name: 'ProfileRight',
    mixins: [is_screen_medium_and_down],

    data: () => ({
        tabs: [{
                icon: 'mdi-facebook'
            },
            {
                icon: 'mdi-twitter'
            },
            {
                icon: 'mdi-instagram'
            }
        ],
        texts: [{
                content: 'This is your Facebook timeline.',
                icon:'mdi-facebook'
            },
            {
                content: 'This is your Twitter.',
                icon:'mdi-twitter'
            },
            {
                content: 'This is your Instagram.',
                icon:'mdi-instagram'
            }
        ]
    })
}