import ListAries from './ListAries.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, ListAries)
    }
}

use(Plugin)

export default Plugin
