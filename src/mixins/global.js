import { merge } from 'lodash'

export default {
    data () {
        return {
            options: {},
            defaultOptions: {}
        }
    },
    mounted () {
        this.options = merge(this.defaultOptions, this.$props || {})
    }
}
