import { merge } from 'lodash'

export default {
    props: {
        config: {
            type: Object,
            default: () => {}
        }
    },
    data () {
        return {
            cfg: {}
        }
    },
    beforeMount () {
        this.cfg = merge(this.cfg, this.config)
    },
    methods: {
        // Modal Component
        openModal (id) {
            this.$root.$emit('openModal', { id })
        },
        closeModal (id) {
            this.$root.$emit('closeModal', { id })
        }
    }
}
