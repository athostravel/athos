import OriginSelection from './OriginSelection.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, OriginSelection)
    }
}

use(Plugin)

export default Plugin
