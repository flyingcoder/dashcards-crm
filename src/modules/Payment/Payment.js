import TableHeader from '@/common/TableHeader.vue'
import Empty from '@/common/Empty'
import { GChart } from 'vue-google-charts'

export default {
    name: 'Payment',
    components: {
        TableHeader,
        Empty,
        GChart
    },

    data: () => ({
        paths: [
            { text: 'Dashboard', disabled: false, router_name: 'default-content' },
            { text: 'Payment', disabled: true, router_name: null }
        ],
        labels: [
            '12am',
            '3am',
            '6am',
            '9am',
            '12pm',
            '3pm',
            '6pm',
            '9pm',
        ],
        value: [
            200,
            675,
            410,
            390,
            310,
            460,
            250,
            240,
        ],
        chartsLib: null,
        // Array will be automatically processed with visualization.arrayToDataTable function
        chartData: [
            ['Year', 'Sales', 'Expenses', 'Profit'],
            ['2014', 1000, 400, 200],
            ['2015', 1170, 460, 250],
            ['2016', 660, 1120, 300],
            ['2017', 1030, 540, 350]
        ],
        loading: false
    }),
    computed: {
        chartOptions() {
            if (!this.chartsLib) return null
            return this.chartsLib.charts.Bar.convertOptions({
                chart: {
                    title: 'Company Performance',
                    subtitle: 'Sales, Expenses, and Profit: 2014-2017'
                },
                bars: 'horizontal', // Required for Material Bar Charts.
                hAxis: { format: 'decimal' },
                height: 400,
                colors: ['#1b9e77', '#d95f02', '#7570b3']
            })
        }
    },
    methods: {
        onChartReady(chart, google) {
            this.chartsLib = google
        }
    }
}