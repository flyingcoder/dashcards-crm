import Vue from 'vue'
import Avatar from '@/common/Avatar.vue'
import Media from '@/common/Media.vue'
import Empty from '@/common/Empty.vue'
import VuePhoneNumberInput from 'vue-phone-number-input'
import VueFriendlyIframe from 'vue-friendly-iframe';

import 'file-icon-vectors/dist/file-icon-square-o.min.css'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

Vue.component('vue-phone-number-input', VuePhoneNumberInput)

Vue.component('Avatar', Avatar)

Vue.component('Media', Media)

Vue.component('Empty', Empty)

Vue.use(VueFriendlyIframe);