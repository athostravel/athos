import Dropdown from './Dropdown.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Dropdown)
    }
}

use(Plugin)

export default Plugin
