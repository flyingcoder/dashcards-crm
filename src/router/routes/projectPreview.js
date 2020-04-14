import HQTab from '@/modules/ProjectPreview-HQ/routes'
import FilesTab from '@/modules/ProjectPreview-Files/routes'
import MembersTab from '@/modules/ProjectPreview-Members/routes'
import MessagesTab from '@/modules/ProjectPreview-Messages/routes'
import MilestonesTab from '@/modules/ProjectPreview-Milestones/routes'
import TasksTab from '@/modules/ProjectPreview-Tasks/routes'
import ReportsTab from '@/modules/ProjectPreview-Reports/routes'
import TimerTab from '@/modules/ProjectPreview-Timer/routes'
import InvoiceTab from '@/modules/ProjectPreview-Invoice/routes'
import auth from '../middleware/auth'

export const project_preview = {
  path: 'project-preview/:id',
  component: () => import('@/modules/ProjectPreview/ProjectPreview.vue'),
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
