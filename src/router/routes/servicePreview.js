import HQTab from '@/modules/ServicePreview-HQ/routes'
import FilesTab from '@/modules/ServicePreview-Files/routes'
import MembersTab from '@/modules/ServicePreview-Members/routes'
import MessagesTab from '@/modules/ServicePreview-Messages/routes'
import MilestonesTab from '@/modules/ServicePreview-Milestones/routes'
import TasksTab from '@/modules/ServicePreview-Tasks/routes'
import ReportsTab from '@/modules/ServicePreview-Reports/routes'
import TimerTab from '@/modules/ServicePreview-Timer/routes'
import InvoiceTab from '@/modules/ServicePreview-Invoice/routes'
import auth from '../middleware/auth'

export const service_preview = {
    path: 'service-preview/:id',
    component: () => import('@/modules/ServicePreview/ServicePreview.vue'),
    props: true,
    children: [
        HQTab,
        FilesTab,
        MembersTab,
        MessagesTab,
        MilestonesTab,
        TasksTab,
        ReportsTab,
        TimerTab,
        InvoiceTab
    ],

    meta: {
        middleware: [auth]
    }
}