export default {
    name: 'CustomField',
    inheritAttrs: false,
    props: {
        className: String,
        icon: String,
        'input-type': String,
        value: String,
        valid: {
            type: Boolean,
            default: true
        }
    },

    computed: {
        imagePath() {
            return this.icon ? require('@/assets/' + this.icon) : null
        },
        listeners() {
            return {
                ...this.$listeners,
                input: event => this.$emit('input', event.target.value)
            }
        }
    }
}
