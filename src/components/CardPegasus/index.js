import CardPegasus from './CardPegasus.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, CardPegasus)
    }
}

use(Plugin)

export default Plugin
