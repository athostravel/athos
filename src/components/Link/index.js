import Link from './Link.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Link)
    }
}

use(Plugin)

export default Plugin
