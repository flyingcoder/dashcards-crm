import {mapGetters} from 'vuex'
import {api_to} from '../../../api'

export default {
    data: () => ({
        active_row: {
            descriptions: '',
            rate: '',
            hours: ''
        }
    }),

    computed: {
        ...mapGetters('invoice', ['dialog', 'rows', 'selected_project']),
        should_disable() {
            const {descriptions, rate, hours} = this.active_row
            return !descriptions || !rate || !hours
        }
    },

    watch: {
        selected_project(val) {
            val && this.fetch_projects_tasks(val)
        }
    },

    methods: {
        calculate_amount(row) {
            return row.rate * row.hours
        },

        add_new_row() {
            const {descriptions, rate, hours} = this.active_row
            const amount = this.calculate_amount(this.active_row)
            this.$store.commit('invoice/add_new_row', {
                descriptions,
                rate,
                hours,
                amount
            })
            this.active_row = {
                descriptions: '',
                rate: '',
                hours: ''
            }
        },

        delete_row(index) {
            this.$store.commit('invoice/delete_row', index)
        },

        row_updated(key, value, index) {
            let row = {...this.rows[index]}
            row[key] = Number(value)
            row.amount = row.hours * row.rate
            this.$store.commit('invoice/update_row', {row, index})
        },

        fetch_projects_tasks(pro_id) {
            this.$store.commit('set_custom_loader', true)
            api_to
                .get_projects_tasks(pro_id)
                .then(({data}) =>
                    this.$store.dispatch('invoice/set_table_rows', data)
                )
                .finally(() => this.$store.commit('set_custom_loader', false))
        }
    }
}
