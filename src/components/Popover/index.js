import Popover from './Popover.vue'
import PopoverContent from './PopoverContent.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Popover)
        registerComponent(Vue, PopoverContent)
    }
}

use(Plugin)

export default Plugin
