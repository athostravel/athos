import ArcusLayout from './ArcusLayout.vue'
import { use, registerComponent } from '@utils/plugins'

const Plugin = {
    install (Vue) {
        registerComponent(Vue, ArcusLayout)
    }
}

use(Plugin)

export default Plugin
