import Vue from 'vue'
import { Bar, Radar, Line } from 'vue-chartjs'

Vue.component('BarChart', {
    extends: Bar,
    props: {
        data: {
            type: Object,
            required: true,
        },
        options: {
            type: Object,
            required: false,
            default: () => ({
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
            }),
        },
    },
    watch: {
        data() {
            this.renderChart(this.data, this.options)
        },
    },
    mounted() {
        this.renderChart(this.data, this.options)
    },
})

Vue.component('RadarChart', {
    extends: Radar,
    props: {
        data: {
            type: Object,
            required: true,
        },
        options: {
            type: Object,
            required: false,
            default: () => ({
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                }
            }),
        },
    },
    watch: {
        data() {
            this.renderChart(this.data, this.options)
        }
    },
    mounted() {
        this.renderChart(this.data, this.options)
    },
})

Vue.component('LineChart', {
    extends: Line,
    props: {
        data: {
            type: Object,
            required: true,
        },
        options: {
            type: Object,
            required: false,
            default: () => ({
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                }
            }),
        },
    },
    watch: {
        data() {
            this.renderChart(this.data, this.options)
        }
    },
    mounted() {
        this.renderChart(this.data, this.options)
    }
});