import CardAries from './CardAries.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, CardAries)
    }
}

use(Plugin)

export default Plugin
