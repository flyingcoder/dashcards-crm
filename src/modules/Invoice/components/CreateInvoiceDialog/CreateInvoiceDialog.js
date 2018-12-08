//Components
import DialogToolbar from './DialogToolbar.vue'
import InfoSection from './InfoSection/InfoSection.vue'
import TableSection from './TableSection/TableSection.vue'
import AdditionalInfoSection from './AdditionalInfoSection/AdditionalInfoSection.vue'

export default {
	components: {
		DialogToolbar, InfoSection, TableSection, AdditionalInfoSection
	},

	props: {
		open: Boolean,
	},
}