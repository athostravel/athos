import IconCard from './IconCard.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, IconCard)
    }
}

use(Plugin)

export default Plugin
