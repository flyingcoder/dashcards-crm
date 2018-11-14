import Vue from 'vue'
import Router from 'vue-router'
import {check_user} from "./route_guard"

import { home } from "./routes/home";
import { checkout } from "./routes/checkout";
import { notFound } from "./routes/notFound";
import { login } from "./routes/login";
import { signup } from "./routes/signup";
import { forgotPassword } from "./routes/forgotPassword";
import { pricing } from "./routes/pricing";
import { dashboard } from "./routes/dashboard";
import { clients } from "./routes/clients";
import { groups } from "./routes/groups";
import { templates } from "./routes/templates";
import { milestones } from "./routes/milestones";
import { milestoneTasks } from "./routes/milestoneTasks";
import { projects } from "./routes/projects";
import { services } from "./routes/services";
import { teams } from "./routes/teams";
import { settings } from './routes/settings';
import { projectHQ } from "./routes/projectHQ";

Vue.use(Router)

export default new Router({
  routes: [
	  {
		  path: '/dashboard',
		  component: () => import('@/modules/Dashboard/Dashboard.vue'),
		  children: [
			  dashboard, // path: '' => info the path is empty because is the default component for the parent
				clients, // path: /dashboard/clients
				groups, // path: /dashboard/team/groups
			  templates, // path: /dashboard/templates
			  milestones, // path: /dashboard/templates/:id/milestone
			  milestoneTasks, // path: /dashboard/templates/:id/milestone/:id2/task
				projects,// path: /dashboard/projects
				services, // path: /dashboard/services
				teams,// path: /dashboard/team
			  settings, // path: /dashboard/settings,
			  projectHQ, //path: /dashboard/project-hq
		  ]
	  },

	  home, // path: /
	  checkout, // path: /checkout
	  notFound, // path: /404
	  login, // path: /login
	  signup, // path: /signup
	  forgotPassword, // path: /forgot-password
	  pricing, // path: /pricing

  ],
  mode: 'history'
})
