
import DashCard from '@/common/DashCard.vue'
import TimerContent from "./TimerContent";
export default {
    name: 'TimerCard',
    components: {
        TimerContent,
        DashCard,
    },

    props: {
        id: [Number, String],
        viewMoreLink: Object,
        dashboard: Boolean
    },

    methods: {
        expand() {
            this.$router.push({
                name: 'taskTimer'
            })
        }
    }
}