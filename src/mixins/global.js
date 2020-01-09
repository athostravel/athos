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
    }
}
