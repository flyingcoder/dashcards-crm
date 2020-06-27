<template>
    <v-snackbar v-model="snackbar" :color="color" :timeout="timeout" multi-line>
        <template v-slot:default>
            <v-icon color="white" large>{{ icon }}</v-icon>
            <div class="pa-1" v-html="text"></div>
            <v-icon color="white" @click="snackbar = false" medium>mdi-close</v-icon>
        </template>
    </v-snackbar>
</template>
<script>
export default {
    data() {
        return {
            snackbar: false,
            text: null,
            color: null,
            timeout: null,
            icon: null
        }
    },

    created() {
        this.$event.$on(
            'open_snackbar',
            (text, type = 'success', timeout = 4000) => {
                if (!text) return
                this.snackbar = true
                this.text = text
                this.color = this.get_color(type)
                this.timeout = timeout
                this.icon = this.get_icon(type)
            }
        )
    },

    computed: {
        snackbar_store() {
            return this.$store.getters.snackbar
        }
    },

    watch: {
        snackbar_store(snackbar) {
            snackbar.status &&
                this.$event.$emit('open_snackbar', snackbar.message, 'error')
        }
    },

    methods: {
        get_color(type) {
            const colors = {
                error: 'red',
                notification: 'orange',
                success: 'green',
                info: 'primary'
            }
            return colors[type]
        },

        get_icon(type) {
            const icons = {
                error: 'mdi-alert-box',
                notification: 'mdi-bell-outline',
                success: 'mdi-check-decagram',
                info: 'mdi-information-outline'
            }
            return icons[type]
        }
    }
}
</script>