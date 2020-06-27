import request from '@/services/axios_instance'
import moment from 'moment'
import { global_utils } from '@/global_utils/global_utils'
import { list_functionality } from '@/services/list-functionality/list-functionality'
//Components 
import DashCard from '@/common/DashCard.vue'
import vcarousel from 'vue-owl-carousel'
import FilesPreview from '@/common/FilesPreview.vue'

export default {
    name: 'TimelineCard',
    mixins: [global_utils, list_functionality],
    components: {
        DashCard, 
        vcarousel,
        FilesPreview
    },

    props: {
        id: [Number, String],
        dashboard: Boolean,
        viewMoreLink: Object,
        type: { type: String, default: 'projects' }, //or services
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
            return this.id ? `api/${this.type}/${this.id}/timeline` : 'api/activities'
        },
        enableViewMore() {
            return !this.noMoreData
        },
        per_page() {
            var limit = this.$store.getters['configs/timeline_display_limits']
            return this.isExpanded ? Math.ceil(limit * 1.5) : Math.ceil(limit)
        }
    },
    mounted() {
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