import {mapMutations} from "vuex";

//components
import TasksContent from "@/common/TasksCard/TasksContent";
import PreviewCard from './TaskTabPreviewCard/TaskTabPreviewCard.vue'

export default {
    name: 'TasksTab',
    components: {
        TasksContent,
        PreviewCard
    },
    props: {
        id: [Number, String]
    },

    provide: {
        bodyMaxHeight: '1200px'
    },

    data: () => ({
        task: null
    }),

    created() {
        this.$router.replace({name: 'project_preview'})
        this.set_id(null)
    },

    methods: {
        ...mapMutations('taskCards', ['set_id'])
    }
}
