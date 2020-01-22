import Popover from './Popover.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Popover)
    }
}

use(Plugin)

export default Plugin
