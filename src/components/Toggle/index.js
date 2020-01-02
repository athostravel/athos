import Toggle from './Toggle.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Toggle)
    }
}

use(Plugin)

export default Plugin
