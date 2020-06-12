export const actions = {
    type_changed_to_monthly({ commit }) {
        commit('clear_rows')
        commit('set_selected_project', null)
        commit('set_total_amount', 0)
        commit('set_billed_to', null)
        commit('set_billed_from', null)
    },

    set_table_rows({ commit }, payload) {
        commit('set_billed_to', payload.billed_to.id)
        commit('set_billed_from', payload.billed_from.id)
        const rows = payload.tasks.map(task => ({
            descriptions: task.title,
            hours: get_hours(task.total_time),
            rate: 1,
            amount: get_hours(task.total_time) * 1
        }))
        rows.length && commit('add_rows', rows)

        function get_hours(time) {
            if (!time) return 0
            const hours = time.split(':')[0]
            const mins = time.split(':')[1]
            return Number(Number(hours) + Number(mins / 60)).toPrecision(3)
        }
    }
}