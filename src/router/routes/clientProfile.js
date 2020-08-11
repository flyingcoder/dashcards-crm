import TaskTab from '@/modules/ClientProfile-Task/routes'
import InvoiceTab from '@/modules/ClientProfile-Invoice/routes'
import StaffTab from '@/modules/ClientProfile-Staffs/routes'
import CompanyTab from '@/modules/ClientProfile-Company/routes'
import ProjectsCampaigns from "@/modules/ClientProfile-ProjectsCampaigns/routes";
import auth from '../middleware/auth'

export const client_profile = {
    path: 'clients/profile/:user_id',
    props: true,
    component: () => import('@/modules/ClientProfile/ClientProfile.vue'),
    children: [TaskTab, InvoiceTab, StaffTab, CompanyTab, ProjectsCampaigns ],
    meta: {
        middleware: [auth]
    }
}
