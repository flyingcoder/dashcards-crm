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
import { services } from './routes/services'
import { teams } from './routes/teams'
import { settings } from './routes/settings'
import { project_preview } from './routes/projectPreview'
import { timer } from './routes/timer'
import { invoice } from './routes/invoice'
import { forms } from './routes/forms'
import { chat } from './routes/chat'
import { calendar } from './routes/calendar'
import { reports } from './routes/reports'
import { payment } from './routes/payment'
import { cloud } from './routes/cloud'
import { support } from './routes/support'
import { member_profile } from './routes/memberProfile'
import { client_profile } from './routes/clientProfile'
import { notes } from './routes/notes'
import { questionnaire } from './routes/questionnaire'
import { projectDetails } from './routes/projectDetails'
import { expanded_clients } from './routes/expanded/expandedClients'
import { expanded_payments } from './routes/expanded/expandedPayments'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dashboard',
      component: () => import('@/modules/Dashboard/Dashboard.vue'),
      children: [
        dashboard, // path: '' => info the path is empty because is the default component for the parent
        clients, // path: /dashboard/clients
        templates, // path: /dashboard/templates
        milestones, // path: /dashboard/templates/:id/milestone
        milestoneTasks, // path: /dashboard/templates/:id/milestone/:id2/task
        projects, // path: /dashboard/projects
        services, // path: /dashboard/services
        teams, // path: /dashboard/team
        settings, // path: /dashboard/settings,
        project_preview, //path: /dashboard1/project-preview
        timer, //path: /dashboard/timer
        invoice, //path: /dashboard/invoice
        forms, //path: /dashboard/forms
        chat, //path: /dashboard/chat
        calendar, //path: /dashboard/calendar
        reports, //path: /dashboard/reports
        payment, //path: /dashboard/payment
        cloud, //path: /dashboard/cloud
        support, //path: /dashboard/support
        member_profile, //path: /dashboard/team/profile/:id
        client_profile, //path: /dashboard/clients/profile/:id
        notes, //path: /dashboard/notes/
        questionnaire, //path: /dashboard/forms/questionnaire
        projectDetails, //path: /dashboard/forms/project-details
        expanded_clients, //path: /dashboard/expanded-clients
        expanded_payments, //path: /dashboard/expanded-payments
      ]
    },
    setPassword, // path: /set-password
    home, // path: /
    checkout, // path: /checkout
    login, // path: /login
    signup, // path: /signup
    forgotPassword, // path: /forgot-password
    pricing, // path: /pricing,
    notFound // path: /404
  ],
  mode: 'history'
})
