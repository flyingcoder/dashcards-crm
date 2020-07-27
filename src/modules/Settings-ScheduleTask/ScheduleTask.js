import {list_functionality} from '@/services/list-functionality/list-functionality'
import {api_to} from './api'
import {mapGetters} from "vuex";
import _cloneDeep from 'lodash/cloneDeep'
import {global_utils} from "@/global_utils/global_utils";
import * as moment from "moment";
//Components
import Editor from '@/common/Editor/Editor.vue'
import DeleteDialog from "@/common/DeleteDialog.vue";
import HistoryDialog from "./components/HistoryDialog.vue";

export default {
    name: 'ScheduleTask',
    mixins: [list_functionality, global_utils],
    components: {
        Editor,
        DeleteDialog,
        HistoryDialog
    },
    data: () => ({
        paths: [
            {text: 'Settings', disabled: false, router_name: 'settings'},
            {text: 'Schedule Tasks', disabled: true, router_name: null}
        ],
        members: [],
        activeType: null,
        schedule_tasks: [],
        timezones: [],
        editting: false,
        submitting: false,
        defaults: {
            id: null,
            schedule_type: 'email',
            name: null,
            from: null,
            to: [],
            subject: null,
            contents: null,
            interval_type: 'every_month_at',
            interval_at: '1',
            timezone: 'UTC'
        },
        task: {
            id: null,
            schedule_type: 'email',
            name: null,
            from: null,
            to: [],
            subject: null,
            contents: null,
            interval_type: 'every_month',
            interval_at: null,
            timezone: 'UTC'
        },
        delete_dialog: false,
        history_dialog: false,
        to_delete: null,
        activeId: null
    }),
    mounted() {
        this.$event.$emit('path-change', this.paths)
        this.getScheduleTasks()
        this.getMembers()
    },
    computed: {
        ...mapGetters(['user']),
        interval_type_at() {
            if (!this.interval_types)
                return ''
            let index = this.interval_types.findIndex(i => i.value === this.task.interval_type)
            if (~index)
                return this.interval_types[index].at
            return ''
        },
        every_hour_at() {
            const hours = [];
            for (let hour = 0; hour < 24; hour++) {
                hours.push(moment({hour}).format('h:mm A'));
            }
            return hours
        },
        every_week_at() {
            return this.weekdays()
        },
        every_month_at() {
            const nth = []
            const days = 31
            for (let day = 1; day < days; day++) {
                nth.push({value: `${day}`, text: `${this.getOrdinalNum(day)} Of The Month`})
            }
            nth.push({value: 'last', text: `Last Day Of The Month`});
            return nth
        },
        interval_types() {
            return [
                {text: 'Every Hour', value: 'every_hour', at: null},
                {text: 'Every Day At', value: 'every_day_at', at: this.every_hour_at},
                {text: 'Every Week On', value: 'every_week_at', at: this.every_week_at},
                {text: 'Every Month On', value: 'every_month_at', at: this.every_month_at},
            ]
        },
        validScheduleTask() {
            if (!this.task.interval_type) return false
            if (this.task.interval_type.includes('_at') && (!this.task.interval_at || this.task.interval_at === '')) {
                return false
            }
            if (!this.validateEmail(this.task.from)) return false
            if (this.task.to.length > 0) {
                for (let i = 0; i < this.task.to.length; i++) {
                    if (!this.validateEmail(this.task.to[i].trim())) {
                        return false
                    }
                }
            }
            return (this.task.name && this.task.from && this.task.to.length > 0 && this.task.contents)
        },
    },
    methods: {
        resetEditor() {
            if (this.$refs.editor)
                this.$refs.editor.setValue('')
        },
        newScheduleTask(type) {
            this.editting = false
            this.task = _cloneDeep(this.defaults)
            this.task.schedule_type = type
            this.task.from = this.user.email
            if (this.$refs.editor)
                this.$refs.editor.setValue(this.task.contents || '')
        },
        setActiveType(item) {
            this.editting = true
            this.activeType = {
                id: item.id,
                schedule_type: item.schedule_type,
                name: item.props.name,
                from: item.props.from,
                to: item.props.to,
                subject: item.props.subject,
                contents: item.props.contents,
                interval_type: item.interval_type,
                interval_at: item.interval_at,
                timezone: item.timezone
            }
            this.task = this.activeType
            if (this.$refs.editor)
                this.$refs.editor.setValue(this.task.contents)
        },
        addNewScheduleTask() {
            if (!this.validScheduleTask) {
                this.$event.$emit('open_snackbar', 'Please fill in required * fields', 'error')
                return
            }
            this.submitting = true
            let payload = {
                schedule_type: this.task.schedule_type,
                name: this.task.name,
                from: this.task.from,
                to: this.task.to,
                subject: this.task.subject,
                contents: this.task.contents,
                interval_type: this.task.interval_type,
                interval_at: this.task.interval_at,
                timezone: this.task.timezone
            }
            api_to.newScheduleTask(payload)
                .then(({data}) => {
                    this.schedule_tasks.push(data)
                    this.$event.$emit('open_snackbar', 'Schedule task added.')
                    this.task = _cloneDeep(this.defaults)
                    this.resetEditor()
                })
                .finally(() => {
                    this.submitting = false
                })
        },
        saveChanges() {
            if (!this.validScheduleTask) {
                this.$event.$emit('open_snackbar', 'Please fill in required * fields', 'error')
                return
            }
            this.submitting = true
            let payload = {
                id: this.task.id,
                schedule_type: this.task.schedule_type,
                name: this.task.name,
                from: this.task.from,
                to: this.task.to,
                subject: this.task.subject,
                contents: this.task.contents,
                interval_type: this.task.interval_type,
                interval_at: this.task.interval_at,
                timezone: this.task.timezone
            }
            api_to.updateScheduleTask(this.task.id, payload)
                .then(({data}) => {
                    let index = this.schedule_tasks.findIndex(i => i.id === data.id)
                    if (~index) {
                        this.schedule_tasks.splice(index, 1, data)
                        this.$event.$emit('open_snackbar', 'Schedule task updated.')
                    }
                })
                .finally(() => {
                    this.submitting = false
                })
        },
        getScheduleTasks() {
            this.loading = true
            api_to.scheduleTask()
                .then(({data}) => {
                    this.schedule_tasks = data.schedule_tasks
                    if (this.schedule_tasks.length > 0)
                        this.setActiveType(this.schedule_tasks[0])

                    this.timezones = Object.values(data.timezones)
                })
                .finally(() => {
                    this.loading = false
                })
        },
        toggleStatus(item) {
            api_to.toggle_status(item.id)
                .then(({data}) => {
                    let index = this.schedule_tasks.findIndex(i => i.id === data.id)
                    if (~index) {
                        this.schedule_tasks.splice(index, 1, data)
                        let message = (data.deleted_at) ? 'Schedule task deactivated!' : 'Schedule task activated!'
                        this.$event.$emit('open_snackbar', message)
                    }
                })
        },
        getMembers() {
            api_to.members()
                .then(({data}) => {
                    this.members = data
                })
        },
        confirm_delete(item) {
            this.to_delete = item
            this.delete_dialog = true
        },
        handleDelete() {
            api_to.delete_schedule_task(this.to_delete.id)
                .then(({data}) => {
                    let index = this.schedule_tasks.findIndex(i => i.id === this.to_delete.id)
                    if (~index) {
                        this.schedule_tasks.splice(index, 1)
                        this.to_delete = null
                        this.delete_dialog = false
                        this.$event.$emit('open_snackbar', 'Schedule task deleted.')
                    }
                })
                .finally(() => {
                    if (this.schedule_tasks.length > 0)
                        this.setActiveType(this.schedule_tasks[0])
                })
        },
        showHistory(item) {
            this.activeId = item.id
            this.history_dialog = true
        }
    }
}