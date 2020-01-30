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
        merge (...args) {
            let result = {}
            args.forEach((arg) => { result = merge(result, arg) })
            return result
        }
    }
}
