import Vue from 'vue'
import Router from 'vue-router'

import { home } from './routes/home'
import { checkout } from './routes/checkout'
import { login } from './routes/login'
import { signup } from './routes/signup'
import { forgotPassword } from './routes/forgotPassword'
import { setPassword } from './routes/setPassword'
import { notFound } from './routes/notFound'
import { pricing } from './routes/pricing'
import { dashboard } from './routes/dashboard'
import { clients } from './routes/clients'
import { templates } from './routes/templates'
import { milestones } from './routes/milestones'
import { milestoneTasks } from './routes/milestoneTasks'
import { projects } from './routes/projects'
import { campaigns } from './routes/campaigns'
import { teams } from './routes/teams'
import { settings } from './routes/settings'
import { project_preview } from './routes/projectPreview'
import { taskTimer } from './routes/taskTimer'
import { globalTimer } from './routes/globalTimer'
import { alarm } from './routes/alarm'
import { invoice } from './routes/invoice'
import { forms, formResponses } from './routes/forms'
import { formBuilder, formEdit } from './routes/formBuilder'
import { chat } from './routes/chat'
import { calendar } from './routes/calendar'
import { reports } from './routes/reports'
import { payment } from './routes/payment'
import { connect } from './routes/connect'
import { support } from './routes/support'
import { member_profile } from './routes/memberProfile'
import { client_profile } from './routes/clientProfile'
import { notes } from './routes/notes'
import { bugs } from './routes/bugs'
import { projectDetails } from './routes/projectDetails'
import { expanded_clients } from './routes/expanded/expandedClients'
import { expanded_payments } from './routes/expanded/expandedPayments'
import { expanded_calendar } from './routes/expanded/expandedCalendar'
import { expanded_invoice } from './routes/expanded/expandedInvoice'
import { expanded_timeline } from './routes/expanded/expandedTimeline'
import { expanded_tasks } from './routes/expanded/expandedTasks'
import { pay_invoice } from './routes/payInvoice'
import { invoice_templates } from './routes/invoiceTemplates'
import { formResponse } from './routes/formResponse'
import { servicesList } from './routes/servicesList'
import { admin_dashboard } from './routes/admins/adminDashboard'
import { admin_subscribers } from './routes/admins/adminSubscribers'
import { admin_apis } from './routes/admins/adminApis'
import { admin_logs } from './routes/admins/adminLogs'
import { admin_database } from './routes/admins/adminDatabase'
import { admin_payments } from './routes/admins/adminPayments'
import { admin_templates } from './routes/admins/adminTemplates'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/dashboard',
            component: () => import('@/modules/Dashboard/Dashboard.vue'),
            children: [
                dashboard, // path: '' => info the path is empty because is the default component for the parent
                clients, // path: /dashboard/clients
                templates, // path: /dashboard/templates
                milestones, // path: /dashboard/templates/:id/milestone
                milestoneTasks, // path: /dashboard/templates/:id/milestone/:id2/task
                projects, // path: /dashboard/projects
                campaigns, // path: /dashboard/campaigns
                teams, // path: /dashboard/team
                settings, // path: /dashboard/settings,
                project_preview, //path: /dashboard/project-preview
                taskTimer, //path: /dashboard/task-timer
                globalTimer, //path: /dashboard/global-timer
                alarm, //path: /dashboard/alarm
                invoice, //path: /dashboard/invoice
                forms, //path: /dashboard/forms
                formResponses, //path: /dashboard/forms/:id/responses
                formBuilder, //path: /dashboard/forms/form-builder
                formEdit, //path: /dashboard/forms/form/:id/edit
                chat, //path: /dashboard/chat
                calendar, //path: /dashboard/calendar
                reports, //path: /dashboard/reports
                payment, //path: /dashboard/payment
                pay_invoice, //path: /dashboard/pay-invoice/:id
                connect, //path: /dashboard/connect
                support, //path: /dashboard/support
                member_profile, //path: /dashboard/team/profile/:id
                client_profile, //path: /dashboard/clients/profile/:id
                notes, //path: /dashboard/notes/
                projectDetails, //path: /dashboard/forms/project-details
                expanded_clients, //path: /dashboard/expanded-clients
                expanded_payments, //path: /dashboard/expanded-payments
                expanded_calendar, //path: /dashboard/expanded-calendar
                expanded_invoice, //path: /dashboard/expanded-invoice
                expanded_timeline, //path: /dashboard/expanded-timeline
                expanded_tasks, //path: /dashboard/expanded-timeline
                bugs, // path: /dashboard/bugs
                invoice_templates, //path: dashboard/invoice-templates
                servicesList //path: /dashboard/services
            ]
        },
        setPassword, // path: /set-password
        home, // path: /
        checkout, // path: /checkout
        login, // path: /login
        signup, // path: /signup
        forgotPassword, // path: /forgot-password
        pricing, // path: /pricing,
        notFound, // path: /404
        formResponse, //path: /form/:slug
        {
            path: '/admin-dashboard',
            component: () => import('@/modules/Dashboard/Dashboard.vue'),
            children: [
                admin_dashboard, //path: admin-dashboard
                admin_subscribers, //path: admin-dashboard/subscribers
                admin_apis, //path: admin-dashboard/apis
                admin_logs, //path: admin-dashboard/logs
                admin_database, //path: admin-dashboard/database
                admin_payments, //path: admin-dashboard/payments
                admin_templates, //path: admin-dashboard/templates
            ]
        }
    ],
    mode: 'history'
})