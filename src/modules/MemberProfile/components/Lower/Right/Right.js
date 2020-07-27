import { is_screen_utils } from '@/global_utils/is_screen_utils'

export default {
    name: 'ProfileRight',
    mixins: [is_screen_utils],

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
                content: 'This is your Twitter tweets.',
                icon:'mdi-twitter'
            },
            {
                content: 'This is your Instagram feed.',
                icon:'mdi-instagram'
            }
        ]
    })
}