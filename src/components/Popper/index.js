import Popper from './Popper.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, Popper)
    }
}

use(Plugin)

export default Plugin
