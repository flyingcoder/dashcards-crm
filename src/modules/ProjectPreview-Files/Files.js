import {
    is_screen_medium_and_down
} from '@/global_utils/is_screen_medium_and_down'

//components
import BuzzookaTab from '@/modules/ProjectPreview-Files/tabs/Buzzooka/BuzzookaTab.vue'
import GoogleDriveTab from '@/modules/ProjectPreview-Files/tabs/GoogleDrive/GoogleDriveTab.vue'
import DropboxTab from '@/modules/ProjectPreview-Files/tabs/Dropbox/DropboxTab.vue'

export default {
    name: 'FilesTab',
    mixins: [is_screen_medium_and_down],
    components: {
        BuzzookaTab,
        GoogleDriveTab,
        DropboxTab,
    },
    props: {
        id: [Number, String] //from route prop
    },

    data() {
        return {
            active_tab: 'files',
            view: 'files',
            tabs: [{
                name: 'Project Files',
                view: `files`,
                icon: 'mdi-file'
            }, {
                name: 'Google Drive',
                view: `google-drive`,
                icon: 'mdi-google-drive'
            }, {
                name: 'Dropbox',
                view: `dropbox`,
                icon: 'mdi-dropbox'
            }, ]
        }
    },
    created() {
        if (this.$route.params.view) {
            this.view = this.$route.params.view
            let index = this.tabs.findIndex(i => i.view === this.view)
            this.active_tab = ~index ? index : 0
        }
    },

    methods: {
        changeTab(tab) {
            this.view = tab
            this.$router.push({
                name: 'project-preview-files',
                params: {
                    id: this.id,
                    view: this.view
                }
            })
        }
    }
}