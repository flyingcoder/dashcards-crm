import request from '@/services/axios_instance'
import moment from 'moment'
import { global_utils } from '@/global_utils/global_utils'
import { list_functionality } from '@/services/list-functionality/list-functionality'
//Components
import Empty from '@/common/Empty.vue'
import DashCard from '@/common/DashCard.vue'
import vcarousel from 'vue-owl-carousel'
import FilesPreview from '@/common/FilesPreview.vue'

export default {
    name: 'TimelineCard',
    mixins: [global_utils, list_functionality],
    components: {
        DashCard,
        Empty,
        vcarousel,
        FilesPreview
    },

    props: {
        id: [Number, String],
        dashboard: Boolean,
        viewMoreLink: Object,
        isExpanded: {
            type: Boolean,
            default: false
        }
    },

    data: () => ({
        selected_item: null,
        default_img: require('@/assets/temp/no-image.jpg')
    }),
    computed: {
        api() {
            return this.id ? `api/projects/${this.id}/timeline` : 'api/activities'
        },
        enableViewMore() {
            return !this.noMoreData
        },
        per_page() {
            return this.isExpanded ? 50 : 10
        }
    },
    created() {
        this.fill_timeline_card()
    },

    methods: {
        get_calendar_time(time) {
            let string = moment(time)
                .calendar()
                .split('at')
            return string.join('')
        },
        fill_timeline_card() {
            this.fill_table_via_url(this.api + `?per_page=${this.per_page}`)
        },
        load_more_timeline() {
            this.load_more_via_url(this.api)
        },
        set_icon(item) {
            const items = [
                'mdi-buffer',
                'mdi-book-variant',
                'mdi-airballoon',
                'mdi-access-point'
            ]
            let icon = items[Math.floor(Math.random() * items.length)]
            //todo set icon by types
            return icon
        },
        expand() {
            this.$router.push({
                name: 'expanded-timeline'
            })
        }
    }
}