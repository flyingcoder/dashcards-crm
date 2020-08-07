import auth from '../middleware/auth'

export const templates = {
    path: 'templates',
    name: 'templates',
    component: () => import('@/modules/Templates/Templates.vue'),
    meta: {
        middleware: [auth]
    }
}

export const report_builder = {
    path: 'reports/builder',
    name: 'report-builder-create',
    component: () => import('@/modules/Templates-ReportBuilder/ReportBuilder.vue'),
    meta: {
        middleware: [auth]
    }
}

export const report_builder_edit = {
    path: 'reports/builder/:id/edit',
    name: 'report-builder-edit',
    component: () => import('@/modules/Templates-ReportBuilder/ReportBuilder.vue'),
    meta: {
        middleware: [auth]
    }
}
