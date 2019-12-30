import SwitchOrion from './SwitchOrion.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, SwitchOrion)
    }
}

use(Plugin)

export default Plugin
