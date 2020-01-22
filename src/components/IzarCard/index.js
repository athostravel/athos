import IzarCard from './IzarCard.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, IzarCard)
    }
}

use(Plugin)

export default Plugin
